"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHrsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hrs_dto_1 = require("./create-hrs.dto");
class UpdateHrsDto extends (0, mapped_types_1.PartialType)(
  create_hrs_dto_1.CreateHrsDto,
) {}
exports.UpdateHrsDto = UpdateHrsDto;
//# sourceMappingURL=update-hrs.dto.js.map
