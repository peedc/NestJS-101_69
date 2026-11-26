var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BadRequestException, Injectable } from '@nestjs/common';
let ElectricityService = class ElectricityService {
    calculateElectricity(unitsRaw, type) {
        if (!unitsRaw || unitsRaw.trim() === '') {
            throw new BadRequestException('Units is required');
        }
        const units = Number(unitsRaw);
        if (isNaN(units) || !Number.isInteger(units) || units < 0) {
            throw new BadRequestException('Units must be an integer greater than or equal to 0');
        }
        const serviceCharges = {
            residential: 40,
            business: 90,
        };
        if (!type || !(type in serviceCharges)) {
            throw new BadRequestException('Invalid type. Allowed: residential, business');
        }
        const serviceCharge = serviceCharges[type];
        let energyCharge = 0;
        if (units <= 150) {
            energyCharge = units * 3;
        }
        else {
            energyCharge = 150 * 3 + (units - 150) * 4;
        }
        const total = energyCharge + serviceCharge;
        return {
            units,
            type,
            energyCharge,
            serviceCharge,
            total,
        };
    }
};
ElectricityService = __decorate([
    Injectable()
], ElectricityService);
export { ElectricityService };
//# sourceMappingURL=electricity.service.js.map