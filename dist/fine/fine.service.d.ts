export declare class FineService {
    calculateFine(daysRaw: string, type: string): {
        days: number;
        type: string;
        chargeableDays: number;
        rate: number;
        total: number;
    };
}
