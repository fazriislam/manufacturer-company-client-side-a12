import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0T1mEqEvkgdCQknwttHXEpfIWkzSrqhkZjpJr8n3FqGC4TDtnDnsApO0fZWY4Y1qrLNyx1AuxNO6qzM9Ax1sBs00oDN2a3FK');

const Payment = () => {
    const { id } = useParams();

    const url = `https://immense-reaches-86349.herokuapp.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-gray-300 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className="text-2xl font-bold">{order?.name}</p>
                    <h2 class="card-title">Please Make Payment for <br />{order.productName}</h2>
                    <p>Product Quantity: {order.quantity}</p>
                    <p>Price: ${order.price}<small>/per piece</small></p>
                    <p>Total Amount: ${parseInt(order.price) * parseInt(order.quantity)}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-400 mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;