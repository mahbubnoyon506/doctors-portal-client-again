import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Components/Loader';
import UserTable from './UserTable';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h3>Users page {users.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserTable key={user._id} user={user} refetch={refetch} index={index}></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;