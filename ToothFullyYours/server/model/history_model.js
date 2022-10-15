
const mongoose = require('mongoose');

var HistorySchema = new mongoose.Schema({
    p_patientID: {type: String, required: true},
    p_name:{ type: String, required: true},
    p_email:{type: String, required: true},
    p_phoneNum:{type: Number, required: true},
    p_ap_date: {type: String, required:true },
    p_ap_time: {type: String, required:true },
    p_procedure: {type: String, required: true},
    // p_amount: {type: Number, required: false}

})

const Historydb = mongoose.model('Historydb', HistorySchema);

module.exports = Historydb
