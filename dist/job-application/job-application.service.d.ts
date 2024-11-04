import { Model } from 'mongoose';
import { Applied } from './schemas/applied.schema';
import { CreateApplicationDto } from './dto/create-application.dto';
export declare class JobApplicationService {
    private appliedModel;
    private imagekit;
    constructor(appliedModel: Model<Applied>);
    create(file: Express.Multer.File, createApplicationDto: CreateApplicationDto): Promise<import("mongoose").Document<unknown, {}, Applied> & Applied & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Applied> & Applied & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Applied> & Applied & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Applied> & Applied & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
