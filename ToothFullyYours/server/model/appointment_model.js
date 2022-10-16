//Check

const mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
    p_patientID: {type: String, required: true},
    p_name:{ type: String, required: true},
    p_email:{type: String, required: true},
    p_phoneNum:{type: Number, required: true},
    p_ap_date: {type: String, required:true },
    p_ap_time: {type: String, required:true },
    p_procedure: {type: String, required: true},

})

const Appointdb = mongoose.model('appointdb', AppointmentSchema);

module.exports = Appointdb
