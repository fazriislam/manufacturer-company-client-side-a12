import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://immense-reaches-86349.herokuapp.com/orders?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    const handleDelete = id =>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order is canceled`)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Total Amount</th>
                            <th>Product Id</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <>
                                < tr className="hover">
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>${parseInt(order.quantity) * parseInt(order.price)}</td>
                                    <td>{order._id}</td>

                                    <td className='flex justify-center items-center'>
                                        {(order._id && !order.paid) && <>
                                            <Link to={`/dashboard/payment/${order._id}`} className='btn btn-sm'>Pay</Link>
                                            <button onClick={()=>handleDelete(order._id)} className='btn btn-sm ml-1 bg-red-800'>Delete</button>
                                        </>}
                                        {(order.price && order.paid) && <div>
                                            <p><span className='text-green-900 font-bold'>Paid</span></p>
                                            <p>Transaction id: <span className='font-semibold'>{order.transactionId}</span></p>
                                        </div>}
                                    </td>
                                </tr></>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;