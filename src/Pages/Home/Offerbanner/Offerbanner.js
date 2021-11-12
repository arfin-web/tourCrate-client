import React from 'react';

const Offerbanner = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row g-3">
                    <div className="col-lg-3 col-md-4 col-12">
                        <div className="bg-primary bg-gradient p-5 border-0 rounded-3 shadow-lg">
                            <i className="fas fa-grin-stars fs-1 text-white"></i>
                            <p className="fs-3 text-white">Toy upto 20% off</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-12">
                        <div className="bg-warning bg-gradient p-5 border-0 rounded-3 shadow-lg">
                            <i className="fas fa-smile-wink fs-1 text-white"></i>
                            <p className="fs-3 text-white">Baby Toys upto 10% off</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <div className="bg-info bg-gradient p-5 border-0 rounded-3 shadow-lg">
                            <i className="fas fa-grin-hearts fs-1 text-white"></i>
                            <p className="fs-3 text-white">New Arrival 30% off</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offerbanner;