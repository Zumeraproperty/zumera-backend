"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CooperateAttorneysModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cooperate_attorneys_controller_1 = require("./cooperate-attorneys.controller");
const cooperate_attorneys_service_1 = require("./cooperate-attorneys.service");
const cooperate_attorneys_schema_1 = require("./schemas/cooperate-attorneys.schema");
let CooperateAttorneysModule = class CooperateAttorneysModule {
};
exports.CooperateAttorneysModule = CooperateAttorneysModule;
exports.CooperateAttorneysModule = CooperateAttorneysModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: cooperate_attorneys_schema_1.CooperateAttorneys.name,
                    schema: cooperate_attorneys_schema_1.CooperateAttorneysSchema,
                },
            ]),
        ],
        controllers: [cooperate_attorneys_controller_1.CooperateAttorneysController],
        providers: [cooperate_attorneys_service_1.CooperateAttorneysService],
    })
], CooperateAttorneysModule);
//# sourceMappingURL=cooperate-attorneys.module.js.map