const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const { MailData } = require('../models/MailData')
// const cron = require('node-cron');
const { auth } = require("../middleware/auth");
const cron = require('node-cron');

router.post('/sendEmail', (req, res)=>{
    console.log(req.body);


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "sa6236283@gmail.com",
          pass: "sachin@17"
        }
      });
      
    var mailOptions = {
        from: "sa6236283@gmail.com",
        to: req.body.rec_email,
        cc:req.body.cc,
        subject: req.body.subject,
        html: req.body.body
      };
    if(req.body.sec=="Daily"){
    cron.schedule('0 12 * * *', () => {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
  }
  else  if(req.body.sec=="Weekly"){
    // console.log("Yes");
    cron.schedule('0 12 15 * * *', () => {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
  }
  else  if(req.body.sec=="Monthly"){
    cron.schedule('0 12 15 1 * *', () => {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
  }
  else  if(req.body.sec=="Recurrsively"){
    cron.schedule('28 * * * * *', () => {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
  }
  else{
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

      const mail = new MailData(req.body)
      mail.save((err, mail) => {
          if (err) return res.json({ success: false, err })
  
          MailData.find({ '_id': mail._id })
              .populate('userid',(err, mail)=>{
                 console.log("mail.userid")
                 if(err){
                   console.log(err);
                 }
              })
              .exec((err, result) => {

                  if (err) return res.json({ success: false, err })
                  return res.status(200).json({ success: true, result })
              })
      })

});
router.post("/getMails", auth ,(req, res) => {
  MailData.find({'sen_email': req.user.email})
      .exec((err, mails) => {
          if(err) return res.status(400).send(err);
          res.status(200).json({ success: true, mails })
      })

});

module.exports = router;
