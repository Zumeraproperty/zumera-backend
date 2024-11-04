import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { ConfigModule } from '@nestjs/config';
import { SalesExecutiveModule } from './career/sales-executive/sales-executive.module';
import { ProjectManagerExecutiveModule } from './career/project-manager-executive/project-manager-executive.module';
import { ProcurementsModule } from './career/procurements/procurements.module';
import { OperationsModule } from './career/operations/operations.module';
import { HrsModule } from './career/hrs/hrs.module';
import { CooperateAttorneysModule } from './career/cooperate-attorneys/cooperate-attorneys.module';
import { CivilEngineeringsModule } from './career/civil-engineerings/civil-engineerings.module';
import { ArchitectureAndDesignsModule } from './career/architecture-and-designs/architecture-and-designs.module';
import { AccountingAndFinancesModule } from './career/accounting-and-finances/accounting-and-finances.module';
import { InvestorModule } from './investor/investor.module';
import { EmailService } from './email/email.service';
import { CareerModule } from './career/career.module';
import { BlogModule } from './blog/blog.module';
import { JobApplicationModule } from './job-application/job-application.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      'mongodb+srv://zumera_admin:admin12345@cluster0.jfqncxu.mongodb.net/user-database?retryWrites=true&w=majority',
    ),
    AuthModule,
    UsersModule,
    SubscribersModule,
    SalesExecutiveModule,
    ProjectManagerExecutiveModule,
    ProcurementsModule,
    OperationsModule,
    HrsModule,
    CooperateAttorneysModule,
    CivilEngineeringsModule,
    ArchitectureAndDesignsModule,
    AccountingAndFinancesModule,
    InvestorModule,
    CareerModule,
    BlogModule,
    JobApplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmailService],
  exports: [EmailService],
})
export class AppModule {}
