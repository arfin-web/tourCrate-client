import React, { useState } from 'react';

const Makeadmin = () => {
    const [email, setEmail] = useState('')
    const handleBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleRole = (e) => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin Added');
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <div className="container p-5">
                <p className="fs-3">Make Admin</p>
                <form onSubmit={handleRole}>
                    <input onBlur={handleBlur} className="form-control mb-3" type="email" placeholder="enter email" />
                    <input type="submit" className="btn btn-primary bg-gradient" value="Make Admin" />
                </form>
            </div>
        </>
    );
};

export default Makeadmin;