import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import AppointmentTable from './AppointmentTable';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Myappointment = () => {
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if(res.status === 401 || res.status === 403){
                       signOut(auth)
                       localStorage.removeItem('accessToken')
                       navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                })
        }
    }, [user, navigate])
    return (
        <div>
            <h2>This is my appointment page {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Shedule</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => <AppointmentTable key={appointment._id} appointment={appointment} index={index}></AppointmentTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myappointment;