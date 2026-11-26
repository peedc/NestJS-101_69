import { ElectricityService } from './electricity.service.js';
export declare class ElectricityController {
    private readonly electricityService;
    constructor(electricityService: ElectricityService);
    getElectricity(units: string, type: string): {
        units: number;
        type: string;
        energyCharge: number;
        serviceCharge: number;
        total: number;
    };
}
