const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    itemname :  {
        type: String,
        required: true
    },
    room : {
        type: String,
        required: true,
    },
    model : {
        type: String,
    },
    serialnumber : {
        type: String,
        required: true,
        unique: true
    },
    place : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    quantity : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    }

})

const Itemdb = mongoose.model('itemdb', schema);

module.exports = Itemdb;