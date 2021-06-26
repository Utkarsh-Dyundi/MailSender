const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');




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
        to: req.body.to,
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
});

module.exports = router;
