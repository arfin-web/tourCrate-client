import React from 'react';
import './Notfound.css';
import { useHistory } from 'react-router-dom';

const Notfound = () => {
    const history = useHistory()
    const handleNotFound = () => {
        history.push('/home')
    }
    return (
        <>
            <div className="container-fluid notfound-container mb-5">
                <button onClick={handleNotFound} className="btn bg-white btn-lg">Go Back Home</button>
            </div>
        </>
    );
};

export default Notfound;