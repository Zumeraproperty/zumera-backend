import { HrsService } from './hrs.service';
import { CreateHrsDto } from './dto/create-hrs.dto';
export declare class HrsController {
    private readonly hrsService;
    constructor(hrsService: HrsService);
    create(createHrsDto: CreateHrsDto): Promise<import("./schemas/hrs.schema").Hrs>;
    findAll(): Promise<import("./schemas/hrs.schema").Hrs[]>;
    update(id: string, updateData: CreateHrsDto): Promise<import("./schemas/hrs.schema").Hrs>;
    remove(id: string): Promise<import("./schemas/hrs.schema").Hrs>;
}
