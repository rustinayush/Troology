import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import origaMarket from '../../Assets/image 6.png';
import close from '../../Assets/close-fill.png';
import './login.css'
const Login = () => {
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {

        const phoneNumber = inputValue.replace(/\s/g, '');


        if (phoneNumber.length !== 10) {
            alert('Number is invalid');
            return;
        } else {

            window.location.href = `/otp?phoneNumber=${inputValue
                }`;
        }
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
                    <h4>Welcome to Origa Market</h4>
                    <p>Login or sign-up to access our range of machine products</p>
                    <div className='frame'>
                        <h4>Log in or Sign-up</h4>
                        <div className='Contact'>
                            <p>Phone Number</p>
                            <input placeholder='Enter your Phone Number' onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="number" />
                        </div>
                        <div className='otp' onClick={handleClick}>

                            {inputValue.length === 10 ? (
                                <Link to="/otp">
                                    <p>Send OTP</p>
                                </Link>
                            ) : (
                                <p>Send OTP</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
