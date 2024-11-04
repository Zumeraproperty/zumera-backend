"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCooperateAttorneysDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cooperate_attorneys_dto_1 = require("./create-cooperate-attorneys.dto");
class UpdateCooperateAttorneysDto extends (0, mapped_types_1.PartialType)(
  create_cooperate_attorneys_dto_1.CreateCooperateAttorneysDto,
) {}
exports.UpdateCooperateAttorneysDto = UpdateCooperateAttorneysDto;
//# sourceMappingURL=update-cooperate-attorneys.dto.js.map
