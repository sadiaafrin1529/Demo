import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
    return (
        <div className='dashboard-menu'>
            <ul>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/dashboard/users">All Information</Link></li>
                <li><Link className='link' to="/">UserAdded</Link></li>
                <li><Link className='link' to="/">Home</Link></li>
            </ul>
        </div>
    );
};

export default DashboardMenu;