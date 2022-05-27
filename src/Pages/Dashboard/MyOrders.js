import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => < tr class="hover">
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>Purple</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;