import React from 'react';
import './Login.css';
import googleLogo from "../../utilities/google.svg"
import { Link } from 'react-router-dom';
import Register from '../Register/Register';


const Login = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-div mx-auto">
                            <h2>Log In</h2>
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
                                <p>New to Ema-John ? <Link to="/register" element={<Register></Register>}>Create New Account</Link> </p>
                            </div>
                            <span><h5>Or</h5></span>
                            <div draggable className="google-div">
                                <img src={googleLogo} alt="" />
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