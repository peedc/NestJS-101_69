import { ShippingService } from './shipping.service.js';
export declare class ShippingController {
    private readonly shippingService;
    constructor(shippingService: ShippingService);
    getShipping(weight: string, zone: string): {
        weight: number;
        zone: string;
        baseFee: number;
        zoneFee: number;
        total: number;
    };
}
