"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationController = void 0;
const common_1 = require("@nestjs/common");
const registration_service_1 = require("./registration.service");
const registration_dto_1 = require("./dto/registration.dto");
let RegistrationController = class RegistrationController {
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
    async createParticipant(registration) {
        const existMail = await this.registrationService.existMail(registration.email);
        if (existMail) {
            throw new common_1.HttpException(`The ${existMail.email} has already exist!`, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return this.registrationService.createParticipant(registration);
    }
    getParticipants() {
        return this.registrationService.getParticipants();
    }
};
exports.RegistrationController = RegistrationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_dto_1.RegistrationDTO]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "createParticipant", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "getParticipants", null);
exports.RegistrationController = RegistrationController = __decorate([
    (0, common_1.Controller)('registration'),
    __metadata("design:paramtypes", [registration_service_1.RegistrationService])
], RegistrationController);
//# sourceMappingURL=registration.controller.js.map