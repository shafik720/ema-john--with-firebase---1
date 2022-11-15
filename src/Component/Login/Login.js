import React from 'react';
import './Login.css';
import googleLogo from "../../utilities/google.svg"
import { Link, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    function handleSubmit(e){
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    let navigate = useNavigate();
    if(user){
        navigate('/');
    }
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="login-div mx-auto">
                                <h2>Log In</h2>
                                <div className="email-div">
                                    <p>Email</p>
                                    <input onBlur={handleEmail} type="email" name="" id=""  />
                                </div>
                                <div className="password-div">
                                    <p>Password</p>
                                    <input onBlur={handlePassword} type="password" name="" id=""  />
                                </div>
                                <div className="login-button">
                                    <h4 style={{color:'red'}}> {error && `${error.message}`} </h4>
                                    <button>Login</button>
                                    <p>New to Ema-John ? <Link to="/register" element={<Register></Register>}>Create New Account</Link> </p>
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

export default Login;