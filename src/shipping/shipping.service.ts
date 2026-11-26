import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ShippingService {
  calculateShipping(weightRaw: string, zone: string) {
    if (!weightRaw || weightRaw.trim() === '') {
      throw new BadRequestException('Weight is required');
    }
    const weight = Number(weightRaw);
    if (isNaN(weight) || weight <= 0) {
      throw new BadRequestException('Weight must be a number greater than 0');
    }

    // 2. ตรวจสอบค่า zone และคำนวณ zoneFee
    const zoneFees: Record<string, number> = {
      bangkok: 0,
      north: 10,
      south: 25,
    };

    if (!zone || !(zone in zoneFees)) {
      throw new BadRequestException('Invalid zone. Allowed: bangkok, north, south');
    }
    const zoneFee = zoneFees[zone];

    // 3. คำนวณ baseFee
    // 1 กก. แรก 50 บาท ส่วนที่เกินคิด กก. ละ 18 บาท (ปัดเศษขึ้น)
    let baseFee = 50;
    if (weight > 1) {
      const extraWeight = Math.ceil(weight - 1);
      baseFee += extraWeight * 18;
    }

    // 4. คำนวณยอดรวม
    const total = baseFee + zoneFee;

    return {
      weight,
      zone,
      baseFee,
      zoneFee,
      total,
    };
  }
}