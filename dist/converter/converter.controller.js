var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ConverterService } from './converter.service.js';
let ConverterController = class ConverterController {
    converterService;
    constructor(converterService) {
        this.converterService = converterService;
    }
    convert(value) {
        const num = Number(value);
        if (value === undefined || value === '' || Number.isNaN(num)) {
            throw new BadRequestException('value ต้องเป็นตัวเลข');
        }
        return { value: num, result: this.converterService.convert(num) };
    }
};
__decorate([
    Get(),
    __param(0, Query('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConverterController.prototype, "convert", null);
ConverterController = __decorate([
    Controller('converter'),
    __metadata("design:paramtypes", [ConverterService])
], ConverterController);
export { ConverterController };
//# sourceMappingURL=converter.controller.js.map