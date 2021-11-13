import React, { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {
    const history = useHistory();
    const [productInfo, setProductInfo] = useState({})
    const { user } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        const url = `https://calm-fjord-73469.herokuapp.com/products/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProductInfo(data))
    }, []);

    const nameRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();
    const priceRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const userPhonRef = useRef();
    const statusRef = useRef();

    const handleForm = (e) => {
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const userPhone = userPhonRef.current.value;
        const status = statusRef.current.value;

        const myOrders = { name, description, image, price, userName, email, userPhone, status };

        fetch('https://calm-fjord-73469.herokuapp.com/myorders', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(myOrders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added');
                    history.push('/pay')
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="card mb-3 border-0 rounded-3 shadow">
                    <form onSubmit={handleForm} >
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 p-5">
                                <img src={productInfo?.image} className="img-fluid rounded-start w-100" alt="..." />
                            </div>
                            <div className="col-lg-8 col-md-6 col-12 p-5">
                                <p className="fw-bold text-primary mb-4 fs-3">{productInfo?.name}</p>
                                <p>{productInfo?.description}</p>
                                <p className="my-3 fs-3">Price: $ <span className="text-primary">{productInfo?.price}</span></p>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="inputName" className="form-label">Name</label>
                                        <input ref={userNameRef} type="text" value={user?.displayName} className="form-control" id="inputName" placeholder="Enter Your Name" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input ref={emailRef} type="email" value={user?.email} className="form-control" id="inputEmail4" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputDestination" className="form-label">Destination</label>
                                        <input ref={nameRef} type="text" value={productInfo?.name} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputDescription" className="form-label">Description</label>
                                        <input ref={descriptionRef} type="text" value={productInfo?.description} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputPrice" className="form-label">Price</label>
                                        <input ref={priceRef} type="text" value={productInfo?.price} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12 d-none">
                                        <label htmlFor="inputImage" className="form-label">Image</label>
                                        <input ref={imageRef} type="text" value={productInfo?.image} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputPhoneNo" className="form-label">Phone Number</label>
                                        <input ref={userPhonRef} type="text" className="form-control" id="inputPhoneNo" placeholder="Enter Your Phone Number" autoComplete="off" />
                                    </div>
                                    <div className="col-12 col-md-6 d-none">
                                        <label htmlFor="inputStatus" className="form-label text-white">Status</label>
                                        <input ref={statusRef} value="Pending" type="text" className="form-control" id="inputStatus" autoComplete="off" />
                                    </div>
                                    <div className="col-12">
                                        <input type="submit" className="btn btn-primary bg-gradient" value="Purchase" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Purchase;