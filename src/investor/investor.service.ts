import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Investor } from './schemas/investor.shema';
import { CreateInvestorDto } from './dto/create-investor.dto';
import { EmailService } from '../email/email.service';

@Injectable()
export class InvestorService {
  private ITEMS_PER_PAGE = 15;
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

  async findAll(
    page: number = 1,
  ): Promise<{ data: Investor[]; total: number; pages: number }> {
    const skip = (page - 1) * this.ITEMS_PER_PAGE;

    const [subscribers, total] = await Promise.all([
      this.investorModel
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(this.ITEMS_PER_PAGE)
        .exec(),
      this.investorModel.countDocuments(),
    ]);

    return {
      data: subscribers,
      total,
      pages: Math.ceil(total / this.ITEMS_PER_PAGE),
    };
  }

  async findOne(id: string): Promise<Investor> {
    return this.investorModel.findById(id).exec();
  }

  async remove(id: string): Promise<Investor> {
    return this.investorModel.findByIdAndDelete(id).exec();
  }
}
