import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Featurebanner = () => {
    return (
        <>
            <div className="container-fluid bg-primary mb-5 p-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-12">
                        <Zoom>
                            <div className="card p-5 rounded-3 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-shipping-fast fs-1 text-primary"></i>
                                    <p className="card-title fs-3">FREE WORLDWIDE SHIPPING</p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Zoom>
                            <div className="card p-5 rounded-3 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-gift fs-1 text-primary"></i>
                                    <p className="card-title fs-3">100% SATISFACTION</p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Zoom>
                            <div className="card p-5 rounded-3 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-headset fs-1 text-primary"></i>
                                    <p className="card-title fs-3">24/7 CUSTOMER SERVICE</p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featurebanner;