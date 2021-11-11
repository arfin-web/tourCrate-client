import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-primary text-center">All Orders</p>
                {
                    orders.map(order => <div className="card mb-5 border-0 rounded-3 shadow">
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

export default Orders;