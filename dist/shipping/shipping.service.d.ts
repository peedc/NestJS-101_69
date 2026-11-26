export declare class ShippingService {
    calculateShipping(weightRaw: string, zone: string): {
        weight: number;
        zone: string;
        baseFee: number;
        zoneFee: number;
        total: number;
    };
}
