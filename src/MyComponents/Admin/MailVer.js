// const express = require('express');
// // const cors = require('cors');
// const nodemailer = require('nodemailer');





// app.use(cors());

// app.use(express.json()); // Parse JSON requests

// var app = express();
// var bodyParser = require('body-parser');
// const cors = require('cors');
// app.use(cors('*'));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// var nm = require('nodemailer');
// let savedOTPS = {};

// var transporter = nm.createTransport(
//     {
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'collaborativelearning.cl@gmail.com',
//             pass: 'wjduiaoofgueozbf'
//         }
//     }
// );
// app.post('/sendotp', (req, res) => {
//     let mail = req.body.mail;
//     let digits = '0123456789';
//     let limit = 6;
//     let otp = ''
//     for (let i = 0; i < limit; i++) {
//         otp += digits[Math.floor(100000 + Math.random() * 900000)];

//     }
//     var options = {
//         from: 'yourmail@gmail.com',
//         to: `${mail}`,
//         subject: "Testing node emails",
//         html: `<p>Enter the otp: ${otp} to verify your mail address</p>`

//     };
//     transporter.sendMail(
//         options, function (error, info) {
//             if (error) {
//                 console.log(error);
//                 res.status(500).send("couldn't send")
//             }
//             else {
//                 savedOTPS[mail] = otp;
//                 setTimeout(
//                     () => {
//                         delete savedOTPS.mail
//                     }, 60000
//                 )
//                 res.send("sent otp")
//             }

//         }
//     )
// })

// app.post('/verify', (req, res) => {
//     let otprecived = req.body.otp;
//     let mail = req.body.mail;
//     if (savedOTPS[mail] === otprecived) {
//         res.send("Verfied");
//     }
//     else {
//         res.status(500).send("Invalid OTP")
//     }
// })

// app.listen(4001, () => {
//     console.log("started @ 4001")
// })