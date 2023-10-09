import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import ResponsiveNavbar from './ResponsiveNavbar';

const Main = () => {
    return (
        <div>
         <ResponsiveNavbar/>
           <Outlet/>
        </div>
    );
};

export default Main;