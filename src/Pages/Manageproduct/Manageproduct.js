import React, { useEffect, useState } from 'react';

const Manageproduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://calm-fjord-73469.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this product ?')
        if (proceed) {
            const url = `https://calm-fjord-73469.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProduct = products.filter(product => product._id !== id)
                        setProducts(remainingProduct);
                    };
                })
        }
    }

    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-primary text-center">Manage Product</p>
                <div className="row g-5">
                    {
                        products.map(product => <div className="col-lg-4 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-sm">
                                <img src={product.image} className="card-img-top" alt="toy" />
                                <div className="card-body">
                                    <p className="card-title fs-4 text-primary">{product.name}</p>
                                    <p className="card-text text-muted">{product.description}</p>
                                    <p className="card-title fs-4">Price: $ {product.price}</p>
                                    <button onClick={() => handleDelete(product._id)} type="button" className="btn btn-outline-primary mt-4">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Manageproduct
    ;