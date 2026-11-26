import { FineService } from './fine.service.js';
export declare class FineController {
    private readonly fineService;
    constructor(fineService: FineService);
    getFine(days: string, type: string): {
        days: number;
        type: string;
        chargeableDays: number;
        rate: number;
        total: number;
    };
}
