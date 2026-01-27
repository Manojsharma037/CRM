import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
}

export class CreateUserDto {
  @ApiProperty({ example: 'Manoj Sharma' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'manoj@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ enum: Role, example: 'EMPLOYEE' })
  @IsEnum(Role)
  role: Role;
}
