import { PrismaService } from '../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCustomerDto) {
    return this.prisma.customer.create({ data: dto });
  }

  async findAll(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [data, totalRecords] = await Promise.all([
      this.prisma.customer.findMany({ skip, take: limit }),
      this.prisma.customer.count(),
    ]);

    return {
      page,
      limit,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      data,
    };
  }

  async findOne(id: number) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });
    if (!customer) throw new NotFoundException('Customer not found');
    return customer;
  }

  async update(id: number, dto: UpdateCustomerDto) {
    await this.findOne(id);
    return this.prisma.customer.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.customer.delete({ where: { id } });
  }
}
