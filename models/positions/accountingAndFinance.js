const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountingAndFinanceSchema = new Schema({
    title: String,

    description: String,

    role: String,

    requirements: String,

    benefits: String,
},{timestamps: true});


const AccountingAndFinance = mongoose.model('AccountingAndFinance', accountingAndFinanceSchema)
module.exports = AccountingAndFinance;