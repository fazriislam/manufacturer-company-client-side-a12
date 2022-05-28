import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://immense-reaches-86349.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleOrderBtn = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className='w-full lg:w-11/12 mt-5 mx-auto'>
            <h2 className='text-3xl text-yellow-800 font-bold text-center my-5'>Our Products</h2>
            <div className='w-full mx-auto grid grid-cols-1 lg:grid-cols-3 lg:bg-secondary gap-3'>
                {
                    products.map(product => <Product
                        key={products._id}
                        product={product}
                        handleOrderBtn={handleOrderBtn}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;