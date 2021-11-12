import React from 'react';

const Review = ({ review }) => {
    return (
        <>
            <div classNameName="col-lg-4 col-md-6 col-12">
                <div className="card rounded-3 shadow bg-light border-3 border-primary">
                    <div className="card-header fs-4 text-primary">
                        <i className="fab fa-slack-hash"></i> {review.name}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p><i className="fas fa-quote-left text-primary opacity-75"></i>  {review.review}  <i className="fas fa-quote-right text-primary opacity-75"></i></p>
                            <footer className="blockquote-footer mt-4">From <cite title="Source Title">{review.email}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;