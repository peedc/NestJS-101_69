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
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Converter2Service } from './converter2.service.js';
import { CreateConverter2Dto } from './dto/create-converter2.dto.js';
import { UpdateConverter2Dto } from './dto/update-converter2.dto.js';
let Converter2Controller = class Converter2Controller {
    converter2Service;
    constructor(converter2Service) {
        this.converter2Service = converter2Service;
    }
    create(createConverter2Dto) {
        return this.converter2Service.create(createConverter2Dto);
    }
    findAll() {
        return this.converter2Service.findAll();
    }
    findOne(id) {
        return this.converter2Service.findOne(+id);
    }
    update(id, updateConverter2Dto) {
        return this.converter2Service.update(+id, updateConverter2Dto);
    }
    remove(id) {
        return this.converter2Service.remove(+id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateConverter2Dto]),
    __metadata("design:returntype", void 0)
], Converter2Controller.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Converter2Controller.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Converter2Controller.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateConverter2Dto]),
    __metadata("design:returntype", void 0)
], Converter2Controller.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Converter2Controller.prototype, "remove", null);
Converter2Controller = __decorate([
    Controller('converter2'),
    __metadata("design:paramtypes", [Converter2Service])
], Converter2Controller);
export { Converter2Controller };
//# sourceMappingURL=converter2.controller.js.map