import React from 'react';
import './Register.css';
import googleLogo from "../../utilities/google.svg"
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useState } from 'react';

const Register = () => {
    let[email, setEmail] = useState('');
    let[password, setPassword] = useState('');
    let[confirmPassword, setConfirmPassword] = useState('');
    let[error, setError] = useState('');
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleConfirmPassword(e){
        setConfirmPassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Your Password Didn't match")
            return;
        }
        if(password.length<6){
            setError('Password too short, try again');
            return;
        }
        // const[]
    }
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form action="" onSubmit={handleSubmit}>
                        <div className="login-div mx-auto">
                            <h2>Register</h2>
                            <div className="email-div">
                                <p>Email</p>
                                <input onBlur={handleEmail} type="email" name="" id="" required/>
                            </div>
                            <div className="password-div">
                                <p>Password</p>
                                <input onBlur={handlePassword} type="password" name="" id="" required/>
                            </div>
                            <div className="password-div">
                                <p>Confirm Password</p>
                                <input onBlur={handleConfirmPassword} type="password" name="" id="" required/>
                            </div>
                            <h3 style={{color:'red'}}>{error}</h3>
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