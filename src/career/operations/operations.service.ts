import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operations, OperationsDocument } from './schemas/operations.schema';
import { CreateOperationsDto } from './dto/create-operations.dto';

@Injectable()
export class OperationsService {
  constructor(
    @InjectModel(Operations.name)
    private operationsModel: Model<OperationsDocument>,
  ) {}

  async create(createOperationsDto: CreateOperationsDto): Promise<Operations> {
    const createdOperations = new this.operationsModel(createOperationsDto);
    return createdOperations.save();
  }

  async findAll(): Promise<Operations[]> {
    return this.operationsModel.find().exec();
  }

  async findOne(id: string): Promise<Operations> {
    const operation = await this.operationsModel.findById(id).exec();
    if (!operation) {
      throw new NotFoundException(`Operation with ID "${id}" not found`);
    }
    return operation;
  }

  async update(
    id: string,
    updateData: Partial<CreateOperationsDto>,
  ): Promise<Operations> {
    if (!this.isUpdateDataValid(updateData)) {
      throw new BadRequestException('Invalid update data provided');
    }

    const updatedOperations = await this.operationsModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedOperations) {
      throw new NotFoundException(`Operations with ID "${id}" not found`);
    }

    return updatedOperations;
  }

  private isUpdateDataValid(data: Partial<CreateOperationsDto>): boolean {
    return (
      Object.keys(data).length > 0 &&
      Object.values(data).every((value) => value !== undefined)
    );
  }

  async remove(id: string): Promise<Operations> {
    const deletedOperations = await this.operationsModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedOperations) {
      throw new NotFoundException(`Operations with ID "${id}" not found`);
    }
    return deletedOperations;
  }
}
