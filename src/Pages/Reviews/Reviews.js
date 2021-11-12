import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="text-primary text-center fs-3">Testimonials</p>
                <p className="text-muted text-center">What our customers say about us</p>
                <i className="fas fa-quote-left text-primary opacity-50 fs-1"></i>
                <div className="row row-cols-1 row-cols-md-3 g-5 mt-3">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <i className="fas fa-quote-right text-primary opacity-50 fs-1 mt-5 float-end"></i>
            </div>
        </>
    );
};

export default Reviews;