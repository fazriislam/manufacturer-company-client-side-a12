import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Product = ({ product, handleOrderBtn }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();
    const { _id, name, img, description, minQuantity, available, price } = product;

    if (!user || !admin) {
        return <Loading />
    }

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
                    <button onClick={() => handleOrderBtn(_id)} className="btn btn-primary">Order Now</button>
                    {admin && <button onClick={() => navigate(`/dashboard/manageProducts/${_id}`)} className="btn">Manage Product</button>}
                </div>
            </div>
        </div>
    );
};

export default Product;
