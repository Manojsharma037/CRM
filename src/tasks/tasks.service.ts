import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from '@prisma/client';

interface User {
  id: number;
  role: string;
}

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTaskDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: dto.assignedTo },
    });

    if (!user || user.role !== 'EMPLOYEE') {
      throw new NotFoundException('Assigned employee not found');
    }

    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status ?? TaskStatus.PENDING,
        assignedToId: dto.assignedTo,
        customerId: dto.customerId,
      },
    });
  }

  async findAll(user: User) {
    if (user.role === 'ADMIN') {
      return this.prisma.task.findMany({
        include: {
          assignedTo: {
            select: { id: true, name: true, email: true },
          },
          customer: {
            select: { id: true, name: true, email: true, phone: true },
          },
        },
      });
    }

    return this.prisma.task.findMany({
      where: { assignedToId: user.id },
    });
  }

  async updateStatus(taskId: number, status: TaskStatus, user: User) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) throw new NotFoundException('Task not found');

    if (user.role === 'EMPLOYEE' && task.assignedToId !== user.id) {
      throw new ForbiddenException('Not your task');
    }

    return this.prisma.task.update({
      where: { id: taskId },
      data: { status },
    });
  }
}
