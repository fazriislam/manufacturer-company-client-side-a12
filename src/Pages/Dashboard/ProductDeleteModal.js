import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({product,setProduct}) => {
    const {_id,name} = product;

    const handleDelete = id =>{
        const url = `http://localhost:5000/product/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setProduct('');
                    toast.success(`${name} is deleted`)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="product-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="product-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Do you want to delete {product.name}</h3>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn bg-red-900"><button onClick={()=>handleDelete(_id)}>Delete</button></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDeleteModal;