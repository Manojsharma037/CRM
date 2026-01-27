import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'ABC Corp' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'abc@corp.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '9999999999' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'ABC Pvt Ltd', required: false })
  @IsOptional()
  @IsString()
  company?: string;
}
