import React from 'react';
import './Signup.css';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const { handleRegistration, setName, setEmail, setPassword, error } = useAuth();

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>
            <div className="container-fluid signup-container">
                <div className="mx-auto mt-5 bg-white p-5 rounded-3 shadow-lg">
                    <p className="fs-3">Sign Up</p>
                    <form onSubmit={handleRegistration}>
                        <div className="mb-3">
                            <input onBlur={handleName} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <input onBlur={handleEmail} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <input onBlur={handlePassword} type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter your password" />
                        </div>
                        <div className="mb-3">
                            <p className="text-danger">{error}</p>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="btn btn-primary bg-gradient" value="sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;