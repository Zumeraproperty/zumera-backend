import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CivilEngineerings,
  CivilEngineeringsDocument,
} from './schemas/civil-engineerings.schema';
import { CreateCivilEngineeringsDto } from './dto/create-civil-engineerings.dto';

@Injectable()
export class CivilEngineeringsService {
  constructor(
    @InjectModel(CivilEngineerings.name)
    private civilEngineeringsModel: Model<CivilEngineeringsDocument>,
  ) {}

  async create(
    createCivilEngineeringsDto: CreateCivilEngineeringsDto,
  ): Promise<CivilEngineerings> {
    const createdCivilEngineerings = new this.civilEngineeringsModel(
      createCivilEngineeringsDto,
    );
    return createdCivilEngineerings.save();
  }

  async findAll(): Promise<CivilEngineerings[]> {
    return this.civilEngineeringsModel.find().exec();
  }

  async update(
    id: string,
    updateData: CreateCivilEngineeringsDto,
  ): Promise<CivilEngineerings> {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new BadRequestException('All fields must be provided for update');
    }

    const updatedCivilEngineerings = await this.civilEngineeringsModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedCivilEngineerings) {
      throw new NotFoundException(
        `Civil Engineerings with ID "${id}" not found`,
      );
    }

    return updatedCivilEngineerings;
  }

  private isUpdateDataComplete(data: CreateCivilEngineeringsDto): boolean {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }

  async remove(id: string): Promise<CivilEngineerings> {
    const deletedCivilEngineerings = await this.civilEngineeringsModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedCivilEngineerings) {
      throw new NotFoundException(
        `Civil Engineerings with ID "${id}" not found`,
      );
    }
    return deletedCivilEngineerings;
  }
}
