//Check

const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    e_name:{ type: String, required: true},
    e_birthdate:{type: String, required: true},
    e_age:{type: Number, required: true},
    e_gender:{type: String, required: true},  
    e_nationality:{type: String, required: true},    
    e_address:{type: String, required: true},
    e_phoneNum:{type: Number, required: true},
    e_email:{type: String, required: true},
    e_emg_contactPerson1:{type: String, required: true},
    e_emg_contactPerson1_phoneNum:{type: String, required: true},
    e_emg_contactPerson1_relationship:{type: String, required: true},
    e_emg_contactPerson2:{type: String, required: true},
    e_emg_contactPerson2_phoneNum:{type: String, required: true},
    e_emg_contactPerson2_relationship:{type: String, required: true},
    e_ID:{type: String, unique: true},
    e_position:{type: String, required: true},
    e_startDate:{type: String, required: true},
    e_regtime:{type: Number, required: true},
    e_overtime:{type: Number, required: true},
    e_bonus:{type: String, required: true},
    e_philhealth:{type: String, required: true},
    e_SSS:{type: String, required: true},
    e_pagibig:{type: String, required: true},
    e_insurance:{type: String, required: true},
    e_totsalary:{type: String, required: true},
    e_totdeduction:{type: String, required: true},
    e_totamount:{type: String, required: true},
    e_dategiven:{type: String, required: true},
    
})

const Employeedb = mongoose.model('Employeedb', employeeSchema);

module.exports = Employeedb
