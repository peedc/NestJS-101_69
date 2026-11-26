var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BadRequestException, Injectable } from '@nestjs/common';
let FineService = class FineService {
    calculateFine(daysRaw, type) {
        if (!daysRaw || daysRaw.trim() === '') {
            throw new BadRequestException('Days is required');
        }
        const days = Number(daysRaw);
        if (isNaN(days) || !Number.isInteger(days) || days < 0) {
            throw new BadRequestException('Days must be an integer greater than or equal to 0');
        }
        const rates = {
            general: 5,
            reserve: 20,
            reference: 50,
        };
        if (!type || !(type in rates)) {
            throw new BadRequestException('Invalid type. Allowed: general, reserve, reference');
        }
        const rate = rates[type];
        const chargeableDays = Math.max(0, days - 3);
        const total = Math.min(chargeableDays * rate, 500);
        return {
            days,
            type,
            chargeableDays,
            rate,
            total,
        };
    }
};
FineService = __decorate([
    Injectable()
], FineService);
export { FineService };
//# sourceMappingURL=fine.service.js.map