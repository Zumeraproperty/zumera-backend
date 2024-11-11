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
    const ITEMS_PER_PAGE = 15;
    const currentPage = parseInt(String(page));
    const skipDocs = (currentPage - 1) * ITEMS_PER_PAGE;
  
    // Get total count first
    const total = await this.investorModel.countDocuments();
  
    // Then get paginated data
    const data = await this.investorModel
      .find()
      .sort({ createdAt: -1 })
      .skip(skipDocs)
      .limit(ITEMS_PER_PAGE)
      .exec();
  
    // Log pagination values for verification
    console.log({
      currentPage,
      skipDocs,
      resultsCount: data.length,
      total,
      shouldReturn: currentPage === 2 ? total - ITEMS_PER_PAGE : ITEMS_PER_PAGE
    });
  
    return {
      data,
      total,
      pages: Math.ceil(total / ITEMS_PER_PAGE)
    };
  }
  

  async findOne(id: string): Promise<Investor> {
    return this.investorModel.findById(id).exec();
  }

  async remove(id: string): Promise<Investor> {
    return this.investorModel.findByIdAndDelete(id).exec();
  }
}
