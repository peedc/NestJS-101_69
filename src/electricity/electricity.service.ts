import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ElectricityService {
  calculateElectricity(unitsRaw: string, type: string) {
    // 1. ตรวจสอบค่า units (ต้องเป็นจำนวนเต็มตั้งแต่ 0 ขึ้นไป)
    if (!unitsRaw || unitsRaw.trim() === '') {
      throw new BadRequestException('Units is required');
    }

    const units = Number(unitsRaw);
    if (isNaN(units) || !Number.isInteger(units) || units < 0) {
      throw new BadRequestException('Units must be an integer greater than or equal to 0');
    }

    // 2. ตรวจสอบค่า type และกำหนดค่าบริการรายเดือน
    const serviceCharges: Record<string, number> = {
      residential: 40,
      business: 90,
    };

    if (!type || !(type in serviceCharges)) {
      throw new BadRequestException('Invalid type. Allowed: residential, business');
    }
    const serviceCharge = serviceCharges[type];

    // 3. คำนวณค่าพลังงานแบบขั้นบันได (150 หน่วยแรก 3 บาท, ส่วนที่เกิน 4 บาท)
    let energyCharge = 0;
    if (units <= 150) {
      energyCharge = units * 3;
    } else {
      energyCharge = 150 * 3 + (units - 150) * 4;
    }

    // 4. คำนวณยอดรวม
    const total = energyCharge + serviceCharge;

    return {
      units,
      type,
      energyCharge,
      serviceCharge,
      total,
    };
  }
}