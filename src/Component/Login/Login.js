import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-div mx-auto">
                            <h1>Log In</h1>
                            <div className="email-div">
                                <p>Email</p>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="password-div">
                                <p>Password</p>
                                <input type="password" name="" id="" />
                            </div>
                            <div className="login-button">
                                <button>Login</button>
                                <p>New to Ema-John ? <a href="#">Create New Account</a> </p>
                            </div>
                            <span>Or</span>
                            <div className="google-div">
                                Continue With Google
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;