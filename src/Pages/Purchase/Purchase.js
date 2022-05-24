import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { name, img, description, available, minQuantity, price } = product;

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);

    return (
        <div>
            <h2 className='text-center text-4xl text-orange-900 font-bold my-3'>Get the best product</h2>
            <div className='flex w-11/12 mx-auto'>

                <div className='w-1/2 border'>
                    <div class="card w-full lg:w-96 bg-base-100 shadow-xl my-3 mx-auto">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{name}</h2>
                            <p>About this {name}</p>
                            <p>{description}</p>
                            <p><small>Price: ${price}/piece</small></p>
                            <p><small>Available: {available}</small></p>
                            <p><small>Minimum Order: {minQuantity}</small></p>
                            {/* <div class="card-actions justify-end">
                            <button class="btn btn-primary">Order Now</button>
                        </div> */}
                        </div>
                    </div>
                </div>

                <div className='w-1/2 border'>
                    <h2 className=' ml-10'>User Details</h2>
                </div>

            </div>
        </div>
    );
};

export default Purchase;