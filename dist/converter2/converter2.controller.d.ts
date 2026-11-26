import { Converter2Service } from './converter2.service.js';
import { CreateConverter2Dto } from './dto/create-converter2.dto.js';
import { UpdateConverter2Dto } from './dto/update-converter2.dto.js';
export declare class Converter2Controller {
    private readonly converter2Service;
    constructor(converter2Service: Converter2Service);
    create(createConverter2Dto: CreateConverter2Dto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConverter2Dto: UpdateConverter2Dto): string;
    remove(id: string): string;
}
