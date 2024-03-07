const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountingAndFinanceSchema = new Schema({
    title: {
        type: String,
        // required: true
    },

    description: {
        type: String,
        // required: true
    },

    role:{
        type: String,
        // required: true
    },

    requirements: {
        type: String,
        // required: true
    },

    benefits: {
        type: String,
        // required: true
    }
},{timestamps: true});


const AccountingAndFinance = mongoose.model('AccountingAndFinance', accountingAndFinanceSchema)
module.exports = AccountingAndFinance;