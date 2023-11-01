import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import origaMarket from '../../Assets/image 6.png';
import close from '../../Assets/close-fill.png';
import './otpPage.css';

const OtpPage = () => {
    const [otpValues, setOtpValues] = useState(['', '', '', '']);
    const otpInputRefs = [useRef(), useRef(), useRef(), useRef()];
    const [errorMessage, setErrorMessage] = useState('');
    const [timer, setTimer] = useState(90); // 01:30 in seconds
    const [isRunning, setIsRunning] = useState(true);
    const location = useLocation(); // Use useLocation to access URL parameters
    const phoneNumber = new URLSearchParams(location.search).get("phoneNumber");

    const handleOtpInputChange = (e, index) => {
        const value = e.target.value;
        otpValues[index] = value;
        setOtpValues([...otpValues]);


        if (index < otpInputRefs.length - 1 && value !== '') {
            otpInputRefs[index + 1].current.focus();
        }
    };

    const handleSubmit = () => {
        const enteredOTP = otpValues.join('');

        if (enteredOTP === '1234') {

            window.location.href = '/success';
        } else {

            setErrorMessage('Please enter the valid OTP sent to your phone number');
        }
    };

    const timerRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 0) {

                        clearInterval(timerRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }
        return () => {
            clearInterval(timerRef.current);
        };
    }, [isRunning]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className='login-form'>
            <div className='left-part'>
                <div className='box'>
                    <img src={origaMarket} alt="Origa Market" />
                </div>
            </div>
            <div className='right-part'>
                <img src={close} alt="close-tag" />
                <div className='content'>
                    <h4>Verify with OTP</h4>
                    <p><span className='number'>Enter the OTP Sent to +91 {phoneNumber}</span><span className='edit'>Edit</span></p>
                    <p><span className='resend'>Resend OTP in</span> <span className='time'>{formatTime(timer)}</span></p>
                    <div className='frame'>
                        <div className='otp-boxes'>
                            {otpValues.map((value, index) => (
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => handleOtpInputChange(e, index)}
                                    ref={otpInputRefs[index]}
                                    key={index}
                                />
                            ))}
                        </div>
                        {isRunning ? <></> : <p className='resend-otp'>OTP is resend successfully</p>}
                        <p className="error-message">{errorMessage}</p>
                        <button onClick={handleSubmit}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;
