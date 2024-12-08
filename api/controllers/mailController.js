'use strict';

const nodeMailer = require('nodemailer');

exports.sendMail = async function (req, res) {
  try {
    const transporter = nodeMailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // true for 465, false for other ports
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

    const info = await transporter.sendMail(mailOptions);
    res.status(200).send(info);
  } catch (error) {
    res.status(400).send(error);
  }
};
