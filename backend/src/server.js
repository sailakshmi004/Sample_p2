

// import express from 'express';
// import cors from 'cors';
// import session from 'express-session';
// import nodemailer from 'nodemailer';
// import { connectToDB, db } from './db.js';

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));

// app.use(session({
//     secret: 'ast-team',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }
// }));

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// app.get('/', async (req, res) => {
//     res.send('working');
// });

// app.post('/signup/:name/:mail/', async (req, res) => {
//     const user = await db.collection('NewProject').findOne({ Mail: req.params.mail });
//     if (user?.Mail) {
//         res.json({ register: "already exist", data: user });
//     } else {
//         await db.collection('NewProject').insertOne({ Name: req.params.name, Mail: req.params.mail })
//             .then((details) => {
//                 res.json({ message: "success", data: details });
//             })
//             .catch((e) => console.log(e));
//     }
// });

// app.post('/get-otp', async (req, res) => {
//     const { email } = req.body;

//     try {
//         const user = await db.collection('NewProject').findOne({ Mail: email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const otp = Math.floor(100000 + Math.random() * 900000);

//         await db.collection('NewProject').updateOne({ _id: user._id }, { $set: { OTP: otp } });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: 'Your OTP for Login',
//             text: `Your OTP for login is: ${otp}`,
//         };

//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ message: 'OTP sent successfully' });
//     } catch (error) {
//         console.error('Error sending OTP:', error);
//         res.status(500).json({ error: 'Error sending OTP' });
//     }
// });

// app.post('/verify-otp', async (req, res) => {
//     const { email, otp } = req.body;

//     try {
//         const user = await db.collection('NewProject').findOne({ Mail: email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         if (user.OTP !== parseInt(otp)) {
//             return res.status(400).json({ message: 'Invalid OTP' });
//         }

//         await db.collection('NewProject').updateOne({ _id: user._id }, { $unset: { OTP: '' } });

//         res.status(200).json({ message: 'Logged in Successfully' });
//     } catch (error) {
//         console.error('Error verifying OTP:', error);
//         res.status(500).json({ error: 'Error verifying OTP' });
//     }
// });

// connectToDB(() => {
//     app.listen(9899, () => {
//         console.log('Server running at port 9899');
//     });
// });
