import React from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const history = useHistory()
    const toys = () => {
        history.push('/toys')
    }
    return (
        <>
            <div className="container-fluid banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">

                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="p-5 bg-white mt-5 border-0 rounded-3 shadow-lg">
                                <p className="fs-1">Pick the Best Toy for your Kid</p>
                                <p className="text-muted">Make play time a blast with our finest toys</p>
                                <button onClick={toys} type="button" className="btn btn-primary bg-gradient btn-lg">Explore <i className="fas fa-chevron-circle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;