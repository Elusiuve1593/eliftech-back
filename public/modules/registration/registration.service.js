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
exports.RegistrationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const registration_schema_1 = require("../../schemas/registration.schema");
const mongoose_2 = require("mongoose");
const events_schema_1 = require("../../schemas/events.schema");
let RegistrationService = class RegistrationService {
    constructor(regModel, eventModel) {
        this.regModel = regModel;
        this.eventModel = eventModel;
    }
    async createParticipant({ participantId, ...RegistrationDTO }) {
        const findParticipant = await this.eventModel.findById(participantId);
        if (!findParticipant)
            throw new common_1.HttpException('User not found', 404);
        const newParticipant = await new this.regModel(RegistrationDTO).save();
        await findParticipant.updateOne({
            $push: {
                participants: newParticipant._id,
            },
        });
        return newParticipant;
    }
    existMail(email) {
        return this.regModel.findOne({ email });
    }
    getParticipants() {
        return this.regModel.find();
    }
};
exports.RegistrationService = RegistrationService;
exports.RegistrationService = RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(registration_schema_1.Registration.name)),
    __param(1, (0, mongoose_1.InjectModel)(events_schema_1.Events.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, Object])
], RegistrationService);
//# sourceMappingURL=registration.service.js.map