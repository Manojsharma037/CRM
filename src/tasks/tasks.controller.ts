import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@ApiTags('Tasks')
@ApiBearerAuth()
@Controller('tasks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // ✅ ADMIN only
  @Post()
  @Roles('ADMIN')
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  // ✅ ADMIN + EMPLOYEE
  @Get()
  @Roles('ADMIN', 'EMPLOYEE')
  findAll(@Request() req: any) {
    return this.tasksService.findAll(req.user);
  }

  // ✅ ADMIN + EMPLOYEE
  @Patch(':id/status')
  @Roles('ADMIN', 'EMPLOYEE')
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateTaskStatusDto,
    @Request() req: any,
  ) {
    return this.tasksService.updateStatus(+id, dto.status, req.user);
  }
}
