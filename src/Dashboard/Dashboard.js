import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col pl-5">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-secondary'>Dashboard</h2>
                <Outlet />
               
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Appointments</Link></li>
                    <li><Link to="/dashboard/myreviews">My Reviews</Link></li>
                    { admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;