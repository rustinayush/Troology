import React from 'react';
import './success.css'
import Success from '../../Assets/charm_circle-tick.png'
const SuccessPage = () => {
    return (
        <div className='App'>
            <div className='success-login'>
                <div className='contents'>
                    <img src={Success} alt="success-logo" />
                    <h3>Successfully Logged</h3>
                    <p>You have successfully logged into your account!</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
