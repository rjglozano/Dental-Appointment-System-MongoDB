//const db = require('mongodb');
const mongoose = require('mongoose');

//const bodyparser = require('body-parser');


//CRUD Operation regarding FINANCE
var  financeSchema = new mongoose.Schema({
    currentMonth:{
        type: String
    },
    transactionID:{

        type:Number
    },

    patientRevenue:{
    
        type:Number
    },
    
    totalIncome:{
    
        type:Number
    },
    
    grossProfit:{
    
        type:Number
    },
    
    
    dentalSupplies:{
    
        type:Number
    },
    
    laboratoryfee:{
    
        type:Number
    },
    
    staffPayroll:{
    
        type:Number
    },
    
    Marketing:{
    
        type:Number
    },
    
    
    rent:{
    
        type:Number
    },
    
    
    generalAdmin:{
    
        type:Number
    },
    
    totalExpense:{
    
        type:Number
    },
    
    interestIncome:{
    
        type:Number
    },
    
    totalOtherIncome:{
    
        type:Number
    },
    
    otherExpenses:{
    
        type:Number
    },
    
    totalOtherExpenses:{
    
        type:Number
    },
    
    
    netIncome:{
    
        type:Number
    },
    
    
    });

    const Financedb = mongoose.model('Financedb', financeSchema);

    module.exports = Financedb
    