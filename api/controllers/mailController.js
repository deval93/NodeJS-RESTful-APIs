'use strict';

const nodeMailer = require('nodemailer');

exports.sendMail = function(req,res){
  const transporter = nodeMailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,  //true for 465 port, false for other ports
    auth: {
      user: 'email@example.com',
      pass: 'password'
    }
  });

  const mailOptions = {
    from: '"Your Name" <youremail@example.com>', // sender address
    to: 'abc@example.com, xyz@example.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(info);
    }
  });
}
