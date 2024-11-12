import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CooperateAttorneys,
  CooperateAttorneysDocument,
} from './schemas/cooperate-attorneys.schema';
import { CreateCooperateAttorneysDto } from './dto/create-cooperate-attorneys.dto';

@Injectable()
export class CooperateAttorneysService {
  constructor(
    @InjectModel(CooperateAttorneys.name)
    private cooperateAttorneysModel: Model<CooperateAttorneysDocument>,
  ) {}

  async create(
    createCooperateAttorneysDto: CreateCooperateAttorneysDto,
  ): Promise<{ message: string; title: string }> {
    const createdCooperateAttorneys = new this.cooperateAttorneysModel(
      createCooperateAttorneysDto,
    );
    await createdCooperateAttorneys.save();
    return {
      message: `${createCooperateAttorneysDto.title} job created successfully`,
      title: createCooperateAttorneysDto.title,
    };
  }

  async findAll(): Promise<CooperateAttorneys[]> {
    return this.cooperateAttorneysModel.find().exec();
  }

  async update(
    id: string,
    updateData: CreateCooperateAttorneysDto,
  ): Promise<CooperateAttorneys> {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new BadRequestException('All fields must be provided for update');
    }

    const updatedCooperateAttorneys = await this.cooperateAttorneysModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedCooperateAttorneys) {
      throw new NotFoundException(
        `Cooperate Attorneys with ID "${id}" not found`,
      );
    }

    return updatedCooperateAttorneys;
  }

  private isUpdateDataComplete(data: CreateCooperateAttorneysDto): boolean {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }

  async remove(id: string): Promise<CooperateAttorneys> {
    const deletedCooperateAttorneys = await this.cooperateAttorneysModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedCooperateAttorneys) {
      throw new NotFoundException(
        `Cooperate Attorneys with ID "${id}" not found`,
      );
    }
    return deletedCooperateAttorneys;
  }
}
