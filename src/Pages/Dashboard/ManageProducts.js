import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDeleteModal from './ProductDeleteModal';

const ManageProducts = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const { name, img, description, minQuantity, available, price } = product;

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);



    return (
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl my-3 mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>About this {name}</p>
                <p>{description}</p>
                <p><small>Price: ${price}/piece</small></p>
                <p><small>Available: {available}</small></p>
                <p><small>Minimum Order: {minQuantity}</small></p>
                <div className="card-actions justify-center">
                    <label for="product-modal" class="btn modal-button bg-red-900">Delete</label>
                </div>
            </div>
            {product && <ProductDeleteModal 
            product={product}
            setProduct={setProduct}
            />}
        </div>
    );
};

export default ManageProducts;