import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import {
  AccountingAndFinances,
  AccountingAndFinancesSchema,
} from './accounting-and-finances/schemas/accounting-and-finances.schema';
import {
  ArchitectureAndDesigns,
  ArchitectureAndDesignsSchema,
} from './architecture-and-designs/schemas/architecture-and-designs.schema';
import {
  CivilEngineerings,
  CivilEngineeringsSchema,
} from './civil-engineerings/schemas/civil-engineerings.schema';
import {
  CooperateAttorneys,
  CooperateAttorneysSchema,
} from './cooperate-attorneys/schemas/cooperate-attorneys.schema';
import { Hrs, HrsSchema } from './hrs/schemas/hrs.schema';
import {
  Operations,
  OperationsSchema,
} from './operations/schemas/operations.schema';
import {
  Procurements,
  ProcurementsSchema,
} from './procurements/schemas/procurements.schema';
import {
  ProjectManagerExecutive,
  ProjectManagerExecutiveSchema,
} from './project-manager-executive/schemas/project-manager-executive.schema';
import {
  SalesExecutive,
  SalesExecutiveSchema,
} from './sales-executive/schemas/sales-executive.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountingAndFinances.name, schema: AccountingAndFinancesSchema },
      {
        name: ArchitectureAndDesigns.name,
        schema: ArchitectureAndDesignsSchema,
      },
      { name: CivilEngineerings.name, schema: CivilEngineeringsSchema },
      { name: CooperateAttorneys.name, schema: CooperateAttorneysSchema },
      { name: Hrs.name, schema: HrsSchema },
      { name: Operations.name, schema: OperationsSchema },
      { name: Procurements.name, schema: ProcurementsSchema },
      {
        name: ProjectManagerExecutive.name,
        schema: ProjectManagerExecutiveSchema,
      },
      { name: SalesExecutive.name, schema: SalesExecutiveSchema },
    ]),
  ],
  controllers: [CareerController],
  providers: [CareerService],
})
export class CareerModule {}
