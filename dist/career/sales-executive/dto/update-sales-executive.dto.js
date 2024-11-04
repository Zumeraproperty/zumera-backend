"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalesExecutiveDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sales_executive_dto_1 = require("./create-sales-executive.dto");
class UpdateSalesExecutiveDto extends (0, mapped_types_1.PartialType)(create_sales_executive_dto_1.CreateSalesExecutiveDto) {
}
exports.UpdateSalesExecutiveDto = UpdateSalesExecutiveDto;
//# sourceMappingURL=update-sales-executive.dto.js.map