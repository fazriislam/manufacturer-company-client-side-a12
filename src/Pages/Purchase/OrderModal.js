import React from 'react';
import { toast } from 'react-toastify';

const OrderModal = ({ product, user }) => {
    const { displayName, email } = user;
    const { name, minQuantity, available, price } = product;

    const handleOrder = e => {
        e.preventDefault();
        const order = {
            name: displayName,
            email: email,
            address: e.target.address.value,
            phone: e.target.phone.value,
            productName: name,
            quantity: e.target.quantity.value,
            price: price,
        }
        if (e.target.quantity.value < minQuantity) {
            return toast.error(`Minimum Order Quantity ${minQuantity} piece`);
        }
        if (e.target.quantity.value > available) {
            return toast.error(`Maximum Order Quantity ${available} piece`);
        }
        else {
            fetch('https://immense-reaches-86349.herokuapp.com/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success(`Order confirm for ${name}`);
                    }
                    else {
                        toast.error(`Order confirmation failed for ${name}. Please try again`);
                    }

                })
        }

    }

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Order {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                        <input type="text" name='name' value={displayName} disabled className="input text-xl input-bordered w-full max-w-xs" />

                        <input type="text" name='email' value={email} disabled className="input text-xl input-bordered w-full max-w-xs" />

                        <input type="text" name='address' placeholder='Enter your address' required className="input text-xl input-bordered w-full max-w-xs" />

                        <input type="tel" name='phone' placeholder='Enter your phone number' required className="input text-xl input-bordered w-full max-w-xs" />

                        <input type="number" name='quantity' required placeholder={`Enter order quantity of ${name}`} className="input text-base input-bordered w-full max-w-xs" />



                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;