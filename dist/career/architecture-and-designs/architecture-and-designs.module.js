"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchitectureAndDesignsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const architecture_and_designs_controller_1 = require("./architecture-and-designs.controller");
const architecture_and_designs_service_1 = require("./architecture-and-designs.service");
const architecture_and_designs_schema_1 = require("./schemas/architecture-and-designs.schema");
let ArchitectureAndDesignsModule = class ArchitectureAndDesignsModule {
};
exports.ArchitectureAndDesignsModule = ArchitectureAndDesignsModule;
exports.ArchitectureAndDesignsModule = ArchitectureAndDesignsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: architecture_and_designs_schema_1.ArchitectureAndDesigns.name,
                    schema: architecture_and_designs_schema_1.ArchitectureAndDesignsSchema,
                },
            ]),
        ],
        controllers: [architecture_and_designs_controller_1.ArchitectureAndDesignsController],
        providers: [architecture_and_designs_service_1.ArchitectureAndDesignsService],
    })
], ArchitectureAndDesignsModule);
//# sourceMappingURL=architecture-and-designs.module.js.map