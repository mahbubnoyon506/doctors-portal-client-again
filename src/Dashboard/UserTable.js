import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({ user, index, refetch }) => {
    const { email } = user;
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
               if(res.status === 403){
                   toast.error("You don't have access to make an admin")
               } 
              return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Added as admin');
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                {
                    user.role ? <p class="text-secondary">Admin</p> : <button onClick={handleMakeAdmin} class="btn btn-xs btn-outline">Make Admin</button>
                }
            </td>
            <td><button class="btn btn-xs btn-outline">Remove</button></td>
        </tr>
    );
};

export default UserTable;