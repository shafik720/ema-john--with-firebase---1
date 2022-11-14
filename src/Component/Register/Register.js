import React from 'react';
import './Register.css';
import googleLogo from "../../utilities/google.svg"
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const Register = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form action="">
                        <div className="login-div mx-auto">
                            <h2>Register</h2>
                            <div className="email-div">
                                <p>Email</p>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="password-div">
                                <p>Password</p>
                                <input type="password" name="" id="" />
                            </div>
                            <div className="password-div">
                                <p>Confirm Password</p>
                                <input type="password" name="" id="" />
                            </div>
                            <div className="login-button">
                                <button>Sign Up</button>
                                <p>Already Registered ? <Link to="/login" element={<Login></Login>}>Log In</Link> </p>
                            </div>
                            <span><h5>Or</h5></span>
                            <div draggable className="google-div">
                                <img src={googleLogo} alt="" />
                                Continue With Google
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;