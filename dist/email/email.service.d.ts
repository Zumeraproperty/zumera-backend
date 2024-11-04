import { ConfigService } from '@nestjs/config';
export declare class EmailService {
    private configService;
    private readonly logger;
    constructor(configService: ConfigService);
    private createTransporter;
    sendSubscriberEmail(name: string, email: string): Promise<void>;
    sendInvestorEmail(name: string, email: string): Promise<void>;
}
