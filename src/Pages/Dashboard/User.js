import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    console.log(res);
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        < tr >
            <th>{index + 1}</th>
            <td>{user.name ? user.name : 'N/A'}</td>
            <td>{user.email}</td>
            <td>
                {user.role === 'admin' ?
                    "Admin"
                    :
                    <button onClick={makeAdmin} className='btn'>Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default User;