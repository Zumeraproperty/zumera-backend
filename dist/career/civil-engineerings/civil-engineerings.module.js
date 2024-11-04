"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CivilEngineeringsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const civil_engineerings_controller_1 = require("./civil-engineerings.controller");
const civil_engineerings_service_1 = require("./civil-engineerings.service");
const civil_engineerings_schema_1 = require("./schemas/civil-engineerings.schema");
let CivilEngineeringsModule = class CivilEngineeringsModule {
};
exports.CivilEngineeringsModule = CivilEngineeringsModule;
exports.CivilEngineeringsModule = CivilEngineeringsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: civil_engineerings_schema_1.CivilEngineerings.name,
                    schema: civil_engineerings_schema_1.CivilEngineeringsSchema,
                },
            ]),
        ],
        controllers: [civil_engineerings_controller_1.CivilEngineeringsController],
        providers: [civil_engineerings_service_1.CivilEngineeringsService],
    })
], CivilEngineeringsModule);
//# sourceMappingURL=civil-engineerings.module.js.map