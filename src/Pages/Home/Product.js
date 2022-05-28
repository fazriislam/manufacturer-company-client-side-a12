import React from 'react';

const Product = ({ product, handleOrderBtn }) => {
    const { _id, name, img, description, minQuantity, available, price } = product;
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
                <div className="card-actions justify-end">
                    <button onClick={() => handleOrderBtn(_id)} className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
