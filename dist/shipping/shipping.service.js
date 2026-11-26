var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BadRequestException, Injectable } from '@nestjs/common';
let ShippingService = class ShippingService {
    calculateShipping(weightRaw, zone) {
        if (!weightRaw || weightRaw.trim() === '') {
            throw new BadRequestException('Weight is required');
        }
        const weight = Number(weightRaw);
        if (isNaN(weight) || weight <= 0) {
            throw new BadRequestException('Weight must be a number greater than 0');
        }
        const zoneFees = {
            bangkok: 0,
            north: 10,
            south: 25,
        };
        if (!zone || !(zone in zoneFees)) {
            throw new BadRequestException('Invalid zone. Allowed: bangkok, north, south');
        }
        const zoneFee = zoneFees[zone];
        let baseFee = 50;
        if (weight > 1) {
            const extraWeight = Math.ceil(weight - 1);
            baseFee += extraWeight * 18;
        }
        const total = baseFee + zoneFee;
        return {
            weight,
            zone,
            baseFee,
            zoneFee,
            total,
        };
    }
};
ShippingService = __decorate([
    Injectable()
], ShippingService);
export { ShippingService };
//# sourceMappingURL=shipping.service.js.map