import { ConverterService } from './converter.service.js';
export declare class ConverterController {
    private readonly converterService;
    constructor(converterService: ConverterService);
    convert(value?: string): {
        value: number;
        result: number;
    };
}
