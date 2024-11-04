import { Model } from 'mongoose';
import { Investor } from './schemas/investor.shema';
import { CreateInvestorDto } from './dto/create-investor.dto';
import { EmailService } from '../email/email.service';
export declare class InvestorService {
    private investorModel;
    private emailService;
    constructor(investorModel: Model<Investor>, emailService: EmailService);
    create(createInvestorDto: CreateInvestorDto): Promise<Investor>;
    findAll(): Promise<Investor[]>;
    findOne(id: string): Promise<Investor>;
    remove(id: string): Promise<Investor>;
}
