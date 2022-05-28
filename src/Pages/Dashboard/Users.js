import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

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
                                refetch={refetch}
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