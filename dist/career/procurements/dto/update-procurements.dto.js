"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProcurementsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_procurements_dto_1 = require("./create-procurements.dto");
class UpdateProcurementsDto extends (0, mapped_types_1.PartialType)(create_procurements_dto_1.CreateProcurementsDto) {
}
exports.UpdateProcurementsDto = UpdateProcurementsDto;
//# sourceMappingURL=update-procurements.dto.js.map