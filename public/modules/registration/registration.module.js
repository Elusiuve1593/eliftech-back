"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationModule = void 0;
const common_1 = require("@nestjs/common");
const registration_service_1 = require("./registration.service");
const registration_controller_1 = require("./registration.controller");
const mongoose_1 = require("@nestjs/mongoose");
const registration_schema_1 = require("../../schemas/registration.schema");
const events_schema_1 = require("../../schemas/events.schema");
let RegistrationModule = class RegistrationModule {
};
exports.RegistrationModule = RegistrationModule;
exports.RegistrationModule = RegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: registration_schema_1.Registration.name, schema: registration_schema_1.RegistrationSchema },
                { name: events_schema_1.Events.name, schema: events_schema_1.EventsSchema },
            ]),
        ],
        providers: [registration_service_1.RegistrationService],
        controllers: [registration_controller_1.RegistrationController],
    })
], RegistrationModule);
//# sourceMappingURL=registration.module.js.map