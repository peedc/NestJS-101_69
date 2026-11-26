export declare class ElectricityService {
    calculateElectricity(unitsRaw: string, type: string): {
        units: number;
        type: string;
        energyCharge: number;
        serviceCharge: number;
        total: number;
    };
}
