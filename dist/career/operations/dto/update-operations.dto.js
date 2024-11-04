"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOperationsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_operations_dto_1 = require("./create-operations.dto");
class UpdateOperationsDto extends (0, mapped_types_1.PartialType)(create_operations_dto_1.CreateOperationsDto) {
}
exports.UpdateOperationsDto = UpdateOperationsDto;
//# sourceMappingURL=update-operations.dto.js.map