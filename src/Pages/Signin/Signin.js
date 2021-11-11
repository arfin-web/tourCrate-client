import React from 'react';
import './Signin.css';
import useAuth from '../../Hooks/useAuth';

const Signin = () => {
    const { handleLogin, signInWithGoogle, setEmail, setPassword, error } = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>
            <div className="container-fluid signin-container">
                <div className="mx-auto mt-5 bg-white p-5 rounded-3 shadow-lg">
                    <p className="fs-3">Sign In</p>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input onBlur={handleEmail} type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <input onBlur={handlePassword} type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter your password" />
                        </div>
                        <div className="mb-3">
                            <p className="text-danger">{error}</p>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="btn btn-primary bg-gradient" value="Sign In" />
                        </div>
                    </form>
                    <div className="mb-3">
                        <button onClick={signInWithGoogle} className="btn btn-primary bg-gradient">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;