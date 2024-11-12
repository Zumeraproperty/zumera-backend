import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Procurements,
  ProcurementsDocument,
} from './schemas/procurements.schema';
import { CreateProcurementsDto } from './dto/create-procurements.dto';

@Injectable()
export class ProcurementsService {
  constructor(
    @InjectModel(Procurements.name)
    private procurementsModel: Model<ProcurementsDocument>,
  ) {}

  async create(
    createProcurementsDto: CreateProcurementsDto,
  ): Promise<{ message: string; title: string }> {
    const createdProcurements = new this.procurementsModel(
      createProcurementsDto,
    );
    await createdProcurements.save();
    return {
      message: `${createProcurementsDto.title} job created successfully`,
      title: createProcurementsDto.title,
    };
  }

  async findAll(): Promise<Procurements[]> {
    return this.procurementsModel.find().exec();
  }

  async update(
    id: string,
    updateData: CreateProcurementsDto,
  ): Promise<Procurements> {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new BadRequestException('All fields must be provided for update');
    }

    const updatedProcurements = await this.procurementsModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedProcurements) {
      throw new NotFoundException(`Procurements with ID "${id}" not found`);
    }

    return updatedProcurements;
  }

  private isUpdateDataComplete(data: CreateProcurementsDto): boolean {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }

  async remove(id: string): Promise<Procurements> {
    const deletedProcurements = await this.procurementsModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedProcurements) {
      throw new NotFoundException(
        `Project Manager Executive with ID "${id}" not found`,
      );
    }
    return deletedProcurements;
  }
}
