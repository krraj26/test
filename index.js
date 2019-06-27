var aws = require("aws-sdk");
var nodemailer = require("nodemailer");


exports.handler = function (event, context, callback) {

    var mailOptions = {
        from: "test3clogic09@gmail.com",
        subject: "This is an email sent from a Lambda function!",
        html: `<p>You got a contact message from: <b>${event.emailAddress}</b></p>`,
        to: "rajkumar@3clogic.com",
       
    };

var transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
  auth: {
    user: 'test3clogic09@gmail.com',
    pass: '123456abc@'
  }, tls: {
    rejectUnauthorized: false
  }
    });

    
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("Error sending email");
            callback(err);
        } else {
            console.log("Email sent successfully");
            callback();
        }
    });
};
