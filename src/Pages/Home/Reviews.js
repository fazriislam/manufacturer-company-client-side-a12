import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 3)))
    }, []);

    return (
        <div className='w-full lg:w-11/12 mt-5 mx-auto bg-red-900 text-white'>
             <h2 className='text-3xl font-bold text-center my-5'>Reviews</h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                reviews.map(review => <>
                    <div class="bg-black grid grid-cols-1 border-2 rounded">
                        <div class="card-body">
                            <h2 class="card-title">{review.name}</h2>
                            <p><small>Email: {review.email}/piece</small></p>
                            <p>{review.about}</p>
                        </div>
                    </div>
                </>)
            }
            </div>
        </div>
    );
};

export default Reviews;