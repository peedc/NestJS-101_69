import { CreateConverter2Dto } from './dto/create-converter2.dto.js';
import { UpdateConverter2Dto } from './dto/update-converter2.dto.js';
export declare class Converter2Service {
    create(createConverter2Dto: CreateConverter2Dto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConverter2Dto: UpdateConverter2Dto): string;
    remove(id: number): string;
}
