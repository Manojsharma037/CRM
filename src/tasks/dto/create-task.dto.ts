import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '@prisma/client';

export class CreateTaskDto {
  @ApiProperty({ example: 'Follow up call' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Call customer for feedback', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 2, description: 'EMPLOYEE user id' })
  @IsInt()
  assignedTo: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  customerId: number;

  @ApiProperty({ enum: TaskStatus, required: false })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
