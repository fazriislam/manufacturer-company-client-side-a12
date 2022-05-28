import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://immense-reaches-86349.herokuapp.com/user', {
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
            <h2 className='text-2xl font-bold text-center'>Users</h2>
            <div className="overflow-x-auto w-11/12 mx-auto">
                <table className="table w-full">
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
                            users.map((user, index) => <User
                                user={user}
                                index={index}
                            />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;