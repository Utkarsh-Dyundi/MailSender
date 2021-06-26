const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailSchema = mongoose.Schema({
    rec_name:{
        type: String,
    },
    rec_email:{
        type: String,
    },
    cc:{
        type: String,
    },
    subject:{
        type: String,
    },
    body:{
        type: String,
    },
    scheduler:{
        type: Number,
    }

}, { timestamps: true })


const MailData = mongoose.model('MailData', mailSchema);

module.exports = { MailData }