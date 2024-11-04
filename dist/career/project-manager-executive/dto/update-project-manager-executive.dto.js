"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectManagerExecutiveDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_project_manager_executive_dto_1 = require("./create-project-manager-executive.dto");
class UpdateProjectManagerExecutiveDto extends (0, mapped_types_1.PartialType)(
  create_project_manager_executive_dto_1.CreateProjectManagerExecutiveDto,
) {}
exports.UpdateProjectManagerExecutiveDto = UpdateProjectManagerExecutiveDto;
//# sourceMappingURL=update-project-manager-executive.dto.js.map
