import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Applied } from './schemas/applied.schema';
import { CreateApplicationDto } from './dto/create-application.dto';
const ImageKit = require('imagekit');

@Injectable()
export class JobApplicationService {
  private imagekit: any;

  constructor(@InjectModel(Applied.name) private appliedModel: Model<Applied>) {
    this.imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || '',
    });
  }

  async create(
    file: Express.Multer.File,
    createApplicationDto: CreateApplicationDto,
  ) {
    try {
      const result = await this.imagekit.upload({
        file: file.buffer.toString('base64'),
        fileName: file.originalname,
        folder: 'applicants',
      });

      const application = new this.appliedModel({
        ...createApplicationDto,
        resume: result.url,
      });

      return await application.save();
    } catch (error) {
      throw new HttpException(
        'Failed to upload file or save application',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return this.appliedModel.find().exec();
  }

  async findOne(id: string) {
    const application = await this.appliedModel.findById(id).exec();
    if (!application) {
      throw new HttpException('Application not found', HttpStatus.NOT_FOUND);
    }
    return application;
  }

  async remove(id: string) {
    const application = await this.appliedModel.findById(id);
    if (!application) {
      throw new HttpException('Application not found', HttpStatus.NOT_FOUND);
    }

    const publicId = application.resume.substring(
      application.resume.lastIndexOf('/applicants/') + 1,
      application.resume.lastIndexOf('.'),
    );

    try {
      await this.imagekit.deleteFile(publicId);
    } catch (error) {
      console.error('Failed to delete file from ImageKit:', error);
    }

    return this.appliedModel.findByIdAndDelete(id).exec();
  }
}
