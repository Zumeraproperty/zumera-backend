"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const subscribers_module_1 = require("./subscribers/subscribers.module");
const config_1 = require("@nestjs/config");
const sales_executive_module_1 = require("./career/sales-executive/sales-executive.module");
const project_manager_executive_module_1 = require("./career/project-manager-executive/project-manager-executive.module");
const procurements_module_1 = require("./career/procurements/procurements.module");
const operations_module_1 = require("./career/operations/operations.module");
const hrs_module_1 = require("./career/hrs/hrs.module");
const cooperate_attorneys_module_1 = require("./career/cooperate-attorneys/cooperate-attorneys.module");
const civil_engineerings_module_1 = require("./career/civil-engineerings/civil-engineerings.module");
const architecture_and_designs_module_1 = require("./career/architecture-and-designs/architecture-and-designs.module");
const accounting_and_finances_module_1 = require("./career/accounting-and-finances/accounting-and-finances.module");
const investor_module_1 = require("./investor/investor.module");
const email_service_1 = require("./email/email.service");
const career_module_1 = require("./career/career.module");
const blog_module_1 = require("./blog/blog.module");
const job_application_module_1 = require("./job-application/job-application.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://zumera_admin:admin12345@cluster0.jfqncxu.mongodb.net/user-database?retryWrites=true&w=majority'),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            subscribers_module_1.SubscribersModule,
            sales_executive_module_1.SalesExecutiveModule,
            project_manager_executive_module_1.ProjectManagerExecutiveModule,
            procurements_module_1.ProcurementsModule,
            operations_module_1.OperationsModule,
            hrs_module_1.HrsModule,
            cooperate_attorneys_module_1.CooperateAttorneysModule,
            civil_engineerings_module_1.CivilEngineeringsModule,
            architecture_and_designs_module_1.ArchitectureAndDesignsModule,
            accounting_and_finances_module_1.AccountingAndFinancesModule,
            investor_module_1.InvestorModule,
            career_module_1.CareerModule,
            blog_module_1.BlogModule,
            job_application_module_1.JobApplicationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, email_service_1.EmailService],
        exports: [email_service_1.EmailService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map