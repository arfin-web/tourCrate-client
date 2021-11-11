import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut, admin } = useAuth();
    console.log(user);
    const history = useHistory()
    const signIn = () => {
        history.push('/signin')
    }
    const signUp = () => {
        history.push('/signup')
    }

    return (
        <>
            <div className="container-fluid bg-dark text-muted">
                <div className="container py-1">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                            <p><i className="fas fa-phone-alt"></i> +880174584</p>
                        </div>
                        <div className="col-lg-6 col-md-4 col-6">
                            <p><i className="fas fa-envelope-open"></i> arfin@gmail.com</p>
                        </div>
                        {
                            user ? <div className="col-lg-4 col-md-4 col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    Dashboard
                                </button>

                                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header">
                                        <p className="offcanvas-title fs-2" id="offcanvasExampleLabel">Dashboard</p>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="card">
                                        <img src={user?.photoURL} className="card-img-top img-fluid img-thumbnail w-50" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fs-3 text-dark">{user?.displayName}</p>
                                            <p className="card-text">{user?.email}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            {
                                                admin && <>
                                                    <li className="list-group-item">
                                                        <NavLink className="nav-link" to="/makeadmin">Make Admin</NavLink>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <NavLink className="nav-link" to="/addproduct">Add Product</NavLink>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <NavLink className="nav-link" to="/orders">All Orders</NavLink>
                                                    </li>
                                                </>
                                            }
                                            <li className="list-group-item">
                                                <NavLink className="nav-link" to="/myorders">My Orders</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button onClick={logOut} type="button" className="btn bg-white text-dark btn-sm fw-bold">Sign Out</button>
                            </div>
                                : <div className="col-lg-4 col-md-4 col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button onClick={signIn} type="button" className="btn bg-white text-dark btn-sm fw-bold">Sign In</button>
                                    <button onClick={signUp} type="button" className="btn bg-white text-dark btn-sm fw-bold">Sign Up</button>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home"><h2 className="fw-bold text-primary logo"><i className="fas fa-traffic-light"></i>Kid's Gallary</h2></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/toys">Toys</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;