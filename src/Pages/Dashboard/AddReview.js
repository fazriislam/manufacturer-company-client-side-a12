import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const { displayName, email, photoURL } = user;

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const review = {
            name: displayName,
            email: email,
            about: data.comment,
            rating: data.rating,
            photo: photoURL,
        }

        if (data.rating < 1) {
            return toast.error('Rating cannot be smaller than 1')
        }

        if (data.rating > 5) {
            return toast.error('Rating cannot be greater than 1')
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast('Thanks for your review');
            });
    };
    return (
        <div className='w-full flex justify-center'>
            <div className='w-1/2 border-4 rounded text-center'>
                <h2 className='text-2xl text-teal-700 font-bold my-3'>Give a Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input input-bordered w-full max-w-xs" placeholder='Write your comment' {...register("comment")} /> <br />
                    <input type="number" className="input input-bordered w-full max-w-xs mt-1" placeholder='Give a rating' {...register("rating")} /> <br />

                    <input className='btn w-full max-w-xs my-1' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;