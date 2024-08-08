// // server.js
// import express from 'express';

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const port = 3000;

// // Create a MySQL connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'eshwar',
//     database: 'customers',
// });

// // Connect to MySQL
// db.connect(err => {
//     if (err) {
//         console.error('MySQL connection error:', err);
//     } else {
//         console.log('Connected to MySQL database');
//     }
// });

// // Middleware to parse JSON
// app.use(bodyParser.json());

// // Route to handle form submissions
// app.post('/api/saveData', (req, res) => {
//     const { name, email } = req.body;

//     // Insert data into MySQL table
//     const sql = 'INSERT INTO your_table_name (name, email) VALUES (?, ?)';
//     db.query(sql, [name, email], (err, result) => {
//         if (err) {
//             console.error('MySQL query error:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         } else {
//             console.log('Data saved to MySQL');
//             res.json({ success: true });
//         }
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });



// server.js
// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3001;

// app.use(express.json());

// // Endpoint to send an email
// app.post('/AdminLog', async (req, res) => {
//     const { to, subject, text } = req.body;

//     // Create a nodemailer transporter using your email provider's SMTP settings
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'collaborativelearning.cl@gmail.com', // Your Gmail email address
//             pass: 'wjduiaoofgueozbf', // Your Gmail email password
//         },
//     });

//     // Define the email options
//     const mailOptions = {
//         from: 'collaborativelearning.cl@gmail.com',
//         to,
//         subject,
//         text,
//     };

//     try {
//         // Send the email
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ error: 'Failed to send email' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// server.js

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
// const { AdminCred } = require('./MyComponents/Admin/AdminCred');

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json()); // Parse JSON requests

// Example: Setup nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'collaborativelearning.cl@gmail.com', // Replace with your Gmail email address
        pass: 'wjduiaoofgueozbf', // Replace with your Gmail password
    },
});

// Example: Route for sending an email
app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    // Validate request body
    if (!to || !subject || !text) {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    // Example: Define email options
    const mailOptions = {
        from: 'collaborativelearning.cl@gmail.com', // Replace with your Gmail email address
        to,
        subject,
        text,
    };

    try {
        // Example: Send email using nodemailer
        await transporter.sendMail(mailOptions);
        setTimeout(
            () => {
                delete generatedOtp
            }
        )
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
