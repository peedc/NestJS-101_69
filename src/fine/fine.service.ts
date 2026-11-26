import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FineService {
  calculateFine(daysRaw: string, type: string) {
    // 1. ตรวจสอบค่า days (ต้องเป็นจำนวนเต็มตั้งแต่ 0 ขึ้นไป)
    if (!daysRaw || daysRaw.trim() === '') {
      throw new BadRequestException('Days is required');
    }

    const days = Number(daysRaw);
    if (isNaN(days) || !Number.isInteger(days) || days < 0) {
      throw new BadRequestException('Days must be an integer greater than or equal to 0');
    }

    // 2. ตรวจสอบค่า type และกำหนดอัตราค่าปรับต่อวัน
    const rates: Record<string, number> = {
      general: 5,
      reserve: 20,
      reference: 50,
    };

    if (!type || !(type in rates)) {
      throw new BadRequestException('Invalid type. Allowed: general, reserve, reference');
    }
    const rate = rates[type];

    // 3. คำนวณจำนวนวันที่ต้องคิดค่าปรับ (ผ่อนผัน 3 วันแรก)
    const chargeableDays = Math.max(0, days - 3);

    // 4. คำนวณค่าปรับรวม (สูงสุดไม่เกิน 500 บาท)
    const total = Math.min(chargeableDays * rate, 500);

    return {
      days,
      type,
      chargeableDays,
      rate,
      total,
    };
  }
}