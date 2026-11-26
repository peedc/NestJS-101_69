import { Controller, Get, Query } from '@nestjs/common';
import { ElectricityService } from './electricity.service.js';

@Controller('electricity')
export class ElectricityController {
  constructor(private readonly electricityService: ElectricityService) {}

  @Get()
  getElectricity(
    @Query('units') units: string,
    @Query('type') type: string,
  ) {
    return this.electricityService.calculateElectricity(units, type);
  }
}