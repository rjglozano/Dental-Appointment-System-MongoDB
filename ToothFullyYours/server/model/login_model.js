//Check

const mongoose = require('mongoose');

var NewUserSchema = new mongoose.Schema({
    p_name:{ type: String, required: true},
    p_username:{ type: String, required: true, unique: true},
    p_email:{type: String, required: true, unique: true},
    p_password:{type: String, required: true},
    p_phoneNum:{type: Number},  
    p_birthDate:{type: String},  
    p_age:{type: Number},  
    p_gender:{type: String},  
    p_nationality:{type: String},  
    p_homeAddress:{type: String},  
    p_ECFullname:{type: String},  
    p_ECNumber:{type: Number},  
    p_ECRelationship:{type: String},
    p_date:{type: Date, default: Date.now}
    
})

const NewUserdb = mongoose.model('NewUserdb', NewUserSchema);

module.exports =  NewUserdb
