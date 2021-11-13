import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://calm-fjord-73469.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleStatus = (id) => {
        const proceed = window.confirm('Shipped this product ?')
        if (proceed) {
            const url = `https://calm-fjord-73469.herokuapp.com/allorders/${id}`;
            fetch(url, {
                method: "PUT",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('successfully Shipped')
                    };
                })
        }
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this product ?')
        if (proceed) {
            const url = `https://calm-fjord-73469.herokuapp.com/allorders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProduct = orders.filter(product => product._id !== id)
                        setOrders(remainingProduct);
                    };
                })
        }
    }
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
                                    <p className="card-text fs-4">Price: $ <span className="text-primary">{order.price}</span></p>
                                    <p className="card-text fs-6">Status:  <span className="text-success">{order.status}</span></p>
                                    <button onClick={() => handleStatus(order._id)} className="btn btn-outline-primary me-2">Shipped</button>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-primary bg-gradient">Delete</button>
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