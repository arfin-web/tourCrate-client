import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Myorders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/myorders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-primary text-center">My Orders</p>
                {
                    myOrders.map(order => <div className="card mb-5 border-0 rounded-3 shadow">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={order.image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title fs-3">{order.name}</p>
                                    <p className="card-text fs-4">Price: {order.price}</p>
                                    <button className="btn btn-primary bg-gradient">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Myorders;