import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Investor } from './schemas/investor.shema';
import { CreateInvestorDto } from './dto/create-investor.dto';
import { EmailService } from '../email/email.service';

@Injectable()
export class InvestorService {
  constructor(
    @InjectModel(Investor.name)
    private investorModel: Model<Investor>,
    private emailService: EmailService,
  ) {}

  async create(createInvestorDto: CreateInvestorDto): Promise<Investor> {
    const createdInvestor = new this.investorModel(createInvestorDto);
    await this.emailService.sendInvestorEmail(
      createInvestorDto.name,
      createInvestorDto.email,
    );
    return createdInvestor.save();
  }

  async findAll(): Promise<Investor[]> {
    return this.investorModel.find().exec();
  }

  async findOne(id: string): Promise<Investor> {
    return this.investorModel.findById(id).exec();
  }

  async remove(id: string): Promise<Investor> {
    return this.investorModel.findByIdAndDelete(id).exec();
  }
}
