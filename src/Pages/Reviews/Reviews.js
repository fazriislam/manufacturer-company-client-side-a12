import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);
    return (
        <div className='w-full lg:w-11/12 mt-5 pb-3 mx-auto bg-red-900 text-white'>
            <h2 className='text-3xl font-bold text-center my-5'>Reviews</h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    reviews.map(review => <>
                        <div className="bg-black grid grid-cols-1 border-2 rounded">
                            {
                                review.photo && <div className="avatar">
                                    <div className="w-16 ml-6 mt-2 rounded-full">
                                        <img src={review.photo} />
                                    </div>
                                </div>
                            }

                            <div className="card-body">
                                <h2 className="card-title">{review.name}</h2>
                                <p><small>Email: {review.email}</small></p>
                                <p>{review.about}</p>
                                <p><small>Rating: {review.rating}</small></p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div >
    );
};

export default Reviews;