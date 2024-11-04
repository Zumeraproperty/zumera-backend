"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectManagerExecutiveModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const project_manager_executive_controller_1 = require("./project-manager-executive.controller");
const project_manager_executive_service_1 = require("./project-manager-executive.service");
const project_manager_executive_schema_1 = require("./schemas/project-manager-executive.schema");
let ProjectManagerExecutiveModule = class ProjectManagerExecutiveModule {};
exports.ProjectManagerExecutiveModule = ProjectManagerExecutiveModule;
exports.ProjectManagerExecutiveModule = ProjectManagerExecutiveModule =
  __decorate(
    [
      (0, common_1.Module)({
        imports: [
          mongoose_1.MongooseModule.forFeature([
            {
              name: project_manager_executive_schema_1.ProjectManagerExecutive
                .name,
              schema:
                project_manager_executive_schema_1.ProjectManagerExecutiveSchema,
            },
          ]),
        ],
        controllers: [
          project_manager_executive_controller_1.ProjectManagerExecutiveController,
        ],
        providers: [
          project_manager_executive_service_1.ProjectManagerExecutiveService,
        ],
      }),
    ],
    ProjectManagerExecutiveModule,
  );
//# sourceMappingURL=project-manager-executive.module.js.map
