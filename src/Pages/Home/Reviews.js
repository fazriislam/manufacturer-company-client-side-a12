import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 3)))
    }, []);

    return (
        <div className='w-full lg:w-11/12 mt-5 pb-3 mx-auto bg-red-900 text-white'>
            <h2 className='text-3xl font-bold text-center my-5'>Reviews</h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    reviews.map(review => <>
                        <div className="bg-black grid grid-cols-1 border-2 rounded">
                            <div className="card-body">
                                <h2 className="card-title">{review.name}</h2>
                                <p><small>Email: {review.email}/piece</small></p>
                                <p>{review.about}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
            <div className='text-right mr-20 mt-2'>
                <button onClick={() => navigate('/reviews')} className="bg-white text-black rounded px-2">All Reviews</button>
            </div>
        </div>
    );
};

export default Reviews;