import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>User email</th>
                            <th>Admin Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => < tr class="hover">
                                <th>{index + 1}</th>
                                <td>{user.name ? user.name : 'N/A'}</td>
                                <td>{user.email}</td>
                                {user.role==='admin' ? 
                                "Admin"
                                :
                                <button>Make Admin</button>
                                }
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Users;