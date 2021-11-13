import React from 'react';
import { NavLink } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Product = ({ product }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <Zoom>
                    <div className="card border-0 rounded-3 shadow-sm">
                        <img src={product.image} className="card-img-top" alt="toy" />
                        <div className="card-body">
                            <p className="card-title fs-4 text-primary">{product.name}</p>
                            <p className="card-text text-muted">{product.description}</p>
                            <p className="card-title fs-4">Price: $ {product.price}</p>
                            <NavLink to={`/toys/${product._id}`}>
                                <button type="button" className="btn btn-outline-primary mt-4">Buy Now</button>
                            </NavLink>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    );
};

export default Product;