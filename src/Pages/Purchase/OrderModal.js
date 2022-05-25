import React from 'react';

const OrderModal = ({ product, user }) => {
    const { displayName, email } = user;
    const { name, minQuantity, available } = product;
    let err;

    const handleOrder = e => {
        e.preventDefault();
        if (e.target.quantity.value < minQuantity) {
            return err = <><p className='text-red-700'>Minimum Order Quantity {minQuantity}</p></>
        }
        if (e.target.quantity.value > available) {
            return err = <><p className='text-red-700'>Maximum Order Quantity {available}</p></>
        }
        else {
            console.log(e.target.quantity.value, 'rtfedrfe');
        }
        
    }

    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Order {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                        <input type="text" name='name' value={displayName} disabled className="input text-xl input-bordered w-full max-w-xs" />

                        <input type="text" name='email' value={email} disabled className="input text-xl input-bordered w-full max-w-xs" />

                        <input type="text" name='address' placeholder='Enter your address' required className="input text-xl input-bordered w-full max-w-xs" />

                        <input type="tel" name='phone' placeholder='Enter your phone number' required className="input text-xl input-bordered w-full max-w-xs" />

                        <input type="number" name='quantity' required placeholder={`Enter order quantity of ${name}`} className="input text-base input-bordered w-full max-w-xs" />


                        {err}
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    {/* <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default OrderModal;