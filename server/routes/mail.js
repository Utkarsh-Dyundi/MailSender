const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const { MailData } = require('../models/MailData')



router.post('/sendEmail', (req, res)=>{
    // console.log(req.body);
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
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      const mail = new MailData(req.body)
      mail.save((err, mail) => {
          if (err) return res.json({ success: false, err })

          // var transporter = nodemailer.createTransport({
          //   service: 'gmail',
          //   auth: {
          //     user: "sa6236283@gmail.com",
          //     pass: "sachin@17"
          //   }
          // });
          
          // var mailOptions = {
          //   from: "sa6236283@gmail.com",
          //   to: req.body.rec_email,
          //   cc:req.body.cc,
          //   subject: req.body.subject,
          //   html: req.body.body
          // };
          
          // transporter.sendMail(mailOptions, function(error, info){
          //   if (error) {
          //     console.log(error);
          //   } else {
          //     console.log('Email sent: ' + info.response);
          //   }
          // });
  
          MailData.find({ '_id': mail._id })
              .populate('userid',(err, mail)=>{
                 console.log("mail.userid")
                 if(err){
                   console.log(err);
                 }
              })
              .exec((err, result) => {
                console.log("mail.userid")
                  if (err) return res.json({ success: false, err })
                  return res.status(200).json({ success: true, result })
              })
      })

});
router.post("/getMails", (req, res) => {

  MailData.find()
      .populate('userid')
      .exec((err, mails) => {
          if(err) return res.status(400).send(err);
          res.status(200).json({ success: true, mails })
      })

});

module.exports = router;
