import React from 'react';
import './Contact.css';

const Contact = () => {
    const contactimg = 'https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=20&m=1271752802&s=170667a&w=0&h=sMEPVY49FAy2UHkhyQLWDHlAhYsR2F2NDkNlSEteO3s=';
    return (
        <>
            <div className="container-fluid contact-container p-5">
                <div className="card mb-3 border-0 rounded-3 shadow">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="fs-3">Sign In</p>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea"></textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="button" className="btn btn-primary bg-gradient">Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={contactimg} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;