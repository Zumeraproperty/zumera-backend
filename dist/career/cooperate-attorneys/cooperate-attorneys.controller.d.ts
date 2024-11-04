import { CooperateAttorneysService } from './cooperate-attorneys.service';
import { CreateCooperateAttorneysDto } from './dto/create-cooperate-attorneys.dto';
export declare class CooperateAttorneysController {
    private readonly cooperateAttorneysService;
    constructor(cooperateAttorneysService: CooperateAttorneysService);
    create(createCooperateAttorneysDto: CreateCooperateAttorneysDto): Promise<import("./schemas/cooperate-attorneys.schema").CooperateAttorneys>;
    findAll(): Promise<import("./schemas/cooperate-attorneys.schema").CooperateAttorneys[]>;
    update(id: string, updateData: CreateCooperateAttorneysDto): Promise<import("./schemas/cooperate-attorneys.schema").CooperateAttorneys>;
    remove(id: string): Promise<import("./schemas/cooperate-attorneys.schema").CooperateAttorneys>;
}
