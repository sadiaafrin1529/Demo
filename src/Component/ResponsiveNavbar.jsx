import React, { useState } from 'react';
import Navbar from './Navbar';
import "../Component/Navbar.css";
import { Link } from 'react-router-dom';
const ResponsiveNavbar = () => {
    const [activebar, setActivebar] = useState(false)
    return (
        <div style={{position:"relative"}}>
            <Navbar activebar={activebar}
           setActivebar={setActivebar} />
            <div className={activebar ? 'sidebar activeMenuBar' : "sidebar"}>
                <div className='sidebar-menu'>
                    <ul>
                        <li><Link className='sidebar-link'>Home</Link></li>
                        <li><Link className='sidebar-link'>About</Link></li>
                        <li><Link to="/dashboard" className='sidebar-link'>Dashboard</Link></li>
                        <li><Link className='sidebar-link'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNavbar;