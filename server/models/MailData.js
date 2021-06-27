const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailSchema = mongoose.Schema({
    userid:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    sen_email:{
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
    sec:{
        type: String,
    }

}, { timestamps: true })


const MailData = mongoose.model('MailData', mailSchema);

module.exports = { MailData }