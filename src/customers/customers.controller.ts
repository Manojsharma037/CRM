import { Controller, Post, Body, Get, UseGuards, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CreateCustomerDto } from './dto/create-customer.dto';

@ApiTags('Customers')
@ApiBearerAuth()
@Controller('customers')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // ✅ ADMIN only
  @Post()
  @Roles('ADMIN')
  create(@Body() dto: CreateCustomerDto) {
    return this.customersService.create(dto);
  }

  // ✅ ADMIN + EMPLOYEE
  @Get()
  @Roles('ADMIN', 'EMPLOYEE')
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return this.customersService.findAll(Number(page), Number(limit));
  }
}
