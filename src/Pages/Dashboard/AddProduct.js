import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        if (data.minQuantity > data.available) {
            toast.error('Minimum order cannot be greater then available product');
            return;
        }
        fetch('https://immense-reaches-86349.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${data.name} is added`)
                    reset();
                }
            })
    };

    return (
        <div className='w-1/2 mx-auto border-2 mt-2'>
            <h2 className='text-2xl font-bold text-orange-800 text-center my-2'>Add a New Product</h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type='text' placeholder="Enter your Product's Picture Link" required className="input text-xl input-bordered w-full max-w-xs" {...register("img")} />

                <input placeholder='Product Name' required className="input text-xl input-bordered w-full max-w-xs" {...register("name")} />

                <input placeholder='Product Description' required className="input text-xl input-bordered w-full max-w-xs" {...register("description")} />

                <input placeholder='Product Price per piece' required type="number" className="input text-xl input-bordered w-full max-w-xs" {...register("price")} />

                <input placeholder='Available' required type="number" className="input text-xl input-bordered w-full max-w-xs" {...register("available")} />

                <input placeholder='Minimum Order' required type="number" className="input text-xl input-bordered w-full max-w-xs" {...register("minQuantity")} />

                <input type="submit" value='Add Product' className='btn mb-1' />
            </form>
        </div>
    );
};

export default AddProduct;