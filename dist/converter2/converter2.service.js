var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let Converter2Service = class Converter2Service {
    create(createConverter2Dto) {
        return 'This action adds a new converter2';
    }
    findAll() {
        return `This action returns all converter2`;
    }
    findOne(id) {
        return `This action returns a #${id} converter2`;
    }
    update(id, updateConverter2Dto) {
        return `This action updates a #${id} converter2`;
    }
    remove(id) {
        return `This action removes a #${id} converter2`;
    }
};
Converter2Service = __decorate([
    Injectable()
], Converter2Service);
export { Converter2Service };
//# sourceMappingURL=converter2.service.js.map