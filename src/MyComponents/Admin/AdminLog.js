// AdminLog.js
import React, { useState } from 'react';
import loginSamp from './admin.jpg';
import './Admin.css';
// import UserChoice from './UserChoice';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AdminLog = ({ onLogin }) => {
    const [mail, setMail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpValidated, setIsOtpValidated] = useState(false);


    const handleMailChange = (e) => {
        setMail(e.target.value);
        console.log(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleGenerateOtp = async () => {
        if (mail !== 'mothe.eshwar.em@gmail.com') {
            alert('Please enter Valid email address.');
            return;
        }

        // In a real-world scenario, this is where you'd send an OTP to the provided email address
        // For simplicity, we'll use a server endpoint to send the email
        const generatedOtp = Math.floor(100000 + Math.random() * 900000);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: mail,
                subject: 'OTP Verification',
                text: `Your OTP for verification is: ${generatedOtp}`, // This should be a dynamically generated OTP
            }),
        };

        try {
            const response = await fetch('http://localhost:3001/send-email', requestOptions);
            // const result = await response.json();

            if (response.status === 200) {
                setIsOtpSent(true);
                alert(`An OTP has been sent to ${mail}.`);
            } else {
                alert('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send OTP. Please try again.');
        }
    };
    const navigate = useNavigate();
    const handleLoginClick = () => {
        if (!isOtpSent) {
            alert('Please generate and enter the OTP first.');
            return;
        }

        // Validate the entered OTP
        if (otp === '') {
            alert('Please enter the OTP.');
            return;
        }

        // Validate the entered password
        if (password === 'Eshwar@123' && mail === 'mothe.eshwar.em@gmail.com') {
            // Call the provided onLogin function on successful login
            // onLogin(mail, password);
            navigate('/joinings')
        } else {
            alert('Please Enter Admin Credentials only');
        }
    };


    return (
        <div className='adminlog'>



            <article className='Login'>
                <img src={loginSamp} alt='LoginImage' />
                <h3>Welcome Back</h3>
                <h2>Admin</h2>
                <form className='form'>

                    <input type='email' value={mail} onChange={handleMailChange} id="mail" placeholder='Enter your registered Email' />

                    <input type='password' value={password} onChange={handlePasswordChange} className="form-control" id="password" placeholder='Enter your Password' />

                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} id="otp" placeholder="Enter OTP" />
                    <button
                        type="button"
                        className="btn btn-sm btn-info"
                        onClick={handleGenerateOtp}
                    // style={{ marginLeft: '10px' }}   
                    >
                        Generate OTP
                    </button>

                    <button type='submit' onClick={handleLoginClick}>Login</button>
                    <a href='/'>Forgot Password..?</a>
                </form>
            </article>

        </div>
    )
}
export default AdminLog;


// import React, { useState, useEffect } from 'react';
// import loginSamp from './admin.jpg';
// import './Admin.css';
// import { useNavigate } from 'react-router-dom';

// const AdminLog = () => {
//     const [mail, setMail] = useState('');
//     const [otp, setOtp] = useState('');
//     const [password, setPassword] = useState('');
//     // const [isOtpSent, setIsOtpSent] = useState(false);
//     const navigate = useNavigate();
//     let regex = new RegExp('[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}');
//     let otp_check = '';

//     // useEffect(() => {
//     //     // Set a timeout to expire the OTP after 5 minutes (adjust as needed)
//     //     const otpTimeout = setTimeout(() => {
//     //         setIsOtpValidated(false);
//     //     }, 5 * 60 * 1000); // 5 minutes

//     //     // Clear the timeout when the component unmounts
//     //     return () => clearTimeout(otpTimeout);
//     // }, [isOtpValidated]);

//     const handleMailChange = (e) => {
//         setMail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleGenerateOtp = () => {
//         if (mail !== 'mothe.eshwar.em@gmail.com') {
//             alert('Please enter a valid email address.');
//             return;
//         }
//         else {
//             if (regex.test(mail)) {
//                 fetch('http://localhost:3001/sendotp', {
//                     method: "POST",
//                     body: JSON.stringify({
//                         "email": `${mail}`
//                     }),
//                     headers: { 'Content-Type': 'application/json' }
//                 })
//                     .then(
//                         (res) => {
//                             if (res.status == 200) {
//                                 // verfEle.style.display = 'block';
//                                 alert("Mail Sent to ")
//                                 // e.value = ''
//                             }
//                             else {
//                                 // errorEle.style.display = 'block';
//                                 // errorEle.innerHTML = "Email not exist";
//                                 // successEle.style.display = 'none';
//                                 alert("Check your email address")

//                             }
//                         }
//                     )

//             }
//             else {
//                 // errorEle.style.display = 'block';
//                 // errorEle.innerHTML = "Invalid Email";
//                 // successEle.style.display = 'none';
//                 alert("Please enter a valid email address")

//             }

//         }
//     }

//     // In a real-world scenario, this is where you'd send an OTP to the provided email address
//     // For simplicity, we'll use a server endpoint to send the email
//     // const generatedOtp = Math.floor(100000 + Math.random() * 900000);

//     // setGeneratedOtp(generatedOtp); // Store the generated OTP in the state

//     //     const requestOptions = {
//     //         method: 'POST',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         body: JSON.stringify({
//     //             to: mail,
//     //             subject: 'OTP Verification',
//     //             text: `Your OTP for verification is: ${generatedOtp}`, // This should be a dynamically generated OTP
//     //         }),
//     //     };

//     //     try {
//     //         const response = await fetch('http://localhost:3001/send-email', requestOptions);

//     //         if (response.status === 200) {
//     //             setIsOtpSent(true);
//     //             alert(`An OTP has been sent to ${mail}.`);
//     //         } else {
//     //             alert('Failed to send OTP. Please try again.');
//     //         }
//     //     } catch (error) {
//     //         console.error('Error:', error);
//     //         alert('Failed to send OTP. Please try again.');
//     //     }
//     // };

//     const handleLoginClick = () => {
//         // if (!isOtpSent) {
//         //     alert('Please generate and enter the OTP first.');
//         //     return;
//         // }

//         // // Validate the entered OTP only once
//         // if (otp !== generatedOtp) {
//         //     alert('Invalid or expired OTP.');
//         //     return;
//         // }

//         // Validate the entered password
//         //     if (password === 'Eshwar@123' && mail === 'mothe.eshwar.em@gmail.com') {
//         //         navigate('/joinings');
//         //     } else {
//         //         alert('Please enter valid admin credentials.');
//         //     }
//         // };

//         fetch('http://localhost:3001/verify',
//             {
//                 method: "POST",
//                 body: JSON.stringify({
//                     "email": `${mail}`,
//                     "otp": `${otp_check}`
//                 }),
//                 headers: { 'Content-Type': 'application/json' }


//             }
//         )
//             .then(
//                 (res) => {
//                     console.log(res)
//                     if (res.status == 200) {
//                         // verfEle.style.display = 'none';
//                         // successEle.style.display = 'block';
//                         // errorEle.style.display = 'none';
//                         alert('success');

//                     }
//                     else {
//                         // errorEle.style.display = 'block';
//                         // errorEle.innerHTML = "Invalid OTP";
//                         // successEle.style.display = 'none';
//                         alert('error');
//                     }
//                 }
//             )

//     };

//     return (
//         <div className='adminlog'>
//             <article className='Login'>
//                 <img src={loginSamp} alt='LoginImage' />
//                 <h3>Welcome Back</h3>
//                 <h2>Admin</h2>
//                 <form className='form'>
//                     <input type='email' value={mail} onChange={handleMailChange} id="mail" placeholder='Enter your registered Email' />
//                     <input type='password' value={password} onChange={handlePasswordChange} className="form-control" id="password" placeholder='Enter your Password' />
//                     <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} id="otp" placeholder="Enter OTP" />
//                     <button
//                         type="button"
//                         className="btn btn-sm btn-info"
//                         onClick={handleGenerateOtp}
//                     >
//                         Generate OTP
//                     </button>
//                     <button type='button' onClick={handleLoginClick}>Login</button>
//                     <a href='/'>Forgot Password..?</a>
//                 </form>
//             </article>
//         </div>
//     );
// };

// export default AdminLog;
