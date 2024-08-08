// // AdminPanel.js
// import React, { useState } from 'react';
// import AdminLog from './AdminLog';
// import District from './Districts';
// import MandalList from './Mandals';
// import VillageList from './Villages';
// import { createTransport } from 'nodemailer';

// const AdminPanel = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [selectedDistrict, setSelectedDistrict] = useState('');
//     const [selectedMandal, setSelectedMandal] = useState('');
//     const [selectedVillage, setSelectedVillage] = useState('');

//     const handleLogin = async (mail, password) => {
//         // You should securely handle SMTP configurations in a real-world scenario
//         const transporter = createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'your_email@gmail.com', // Your Gmail email address
//                 pass: 'your_email_password', // Your Gmail email password
//             },
//         });

//         // Send a sample email for verification
//         const mailOptions = {
//             from: 'your_email@gmail.com',
//             to: mail,
//             subject: 'OTP Verification',
//             text: 'Your OTP for verification is: 123456', // This should be a dynamically generated OTP
//         };

//         try {
//             await transporter.sendMail(mailOptions);
//             setIsLoggedIn(true);
//         } catch (error) {
//             console.error('Error sending email:', error);
//             alert('Failed to send OTP. Please try again.');
//         }
//     };

//     const renderView = () => {
//         if (!isLoggedIn) {
//             return <AdminLog onLogin={handleLogin} />;
//         }

//         switch (view) {
//             case 'districts':
//                 return <District districts={generateDistricts()} onDistrictSelect={handleDistrictSelect} />;
//             case 'mandals':
//                 return <MandalList selectedDistrict={selectedDistrict} onMandalSelect={handleMandalSelect} />;
//             case 'villages':
//                 return <VillageList selectedMandal={selectedMandal} onVillageSelect={handleVillageSelect} />;
//             default:
//                 return <div>Invalid view</div>;
//         }
//     };

//     return (
//         <div>
//             <header>
//                 <h1 style={{ background: "#a84343", color: "#fff", textAlign: "center", padding: "10px" }}>Admin Panel</h1>
//             </header>
//             <div className="container" style={{ minHeight: "90vh", margin: "40px auto", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 {renderView()}
//             </div>
//         </div>
//     );
// };

// export default AdminPanel;
