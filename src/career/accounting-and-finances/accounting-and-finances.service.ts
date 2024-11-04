import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AccountingAndFinances,
  AccountingAndFinancesDocument,
} from './schemas/accounting-and-finances.schema';
import { CreateAccountingAndFinancesDto } from './dto/create-accounting-and-finances.dto';

@Injectable()
export class AccountingAndFinancesService {
  constructor(
    @InjectModel(AccountingAndFinances.name)
    private accountingAndFinancesModel: Model<AccountingAndFinancesDocument>,
  ) {}

  async create(
    createAccountingAndFinancesDto: CreateAccountingAndFinancesDto,
  ): Promise<AccountingAndFinances> {
    const createdAccountingAndFinances = new this.accountingAndFinancesModel(
      createAccountingAndFinancesDto,
    );
    return createdAccountingAndFinances.save();
  }

  async findAll(): Promise<AccountingAndFinances[]> {
    return this.accountingAndFinancesModel.find().exec();
  }

  async update(
    id: string,
    updateData: CreateAccountingAndFinancesDto,
  ): Promise<AccountingAndFinances> {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new BadRequestException('All fields must be provided for update');
    }

    const updatedAccountingAndFinances = await this.accountingAndFinancesModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedAccountingAndFinances) {
      throw new NotFoundException(
        `Accounting and Finances with ID "${id}" not found`,
      );
    }

    return updatedAccountingAndFinances;
  }

  private isUpdateDataComplete(data: CreateAccountingAndFinancesDto): boolean {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }

  async remove(id: string): Promise<AccountingAndFinances> {
    const deletedAccountingAndFinances = await this.accountingAndFinancesModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedAccountingAndFinances) {
      throw new NotFoundException(
        `Accounting And Finances with ID "${id}" not found`,
      );
    }
    return deletedAccountingAndFinances;
  }
}
