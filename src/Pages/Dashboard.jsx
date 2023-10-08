import React, { useState } from 'react';
import girl from '../assets/image/girl.png'
import '../Pages/Dashboard.css'
import DashboardMenu from './DashboardMenu';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
    const [activeMenu,setActiveMenu] = useState(true)
    return (
       <div>
         <div className='dashboard-navbar-container'>
            <div className='dashboard-container'>
                <h2 style={{color:"white"}}>Dashboard</h2>
                <div style={{display:"flex",gap:"20px"}}>
                 <img style={{width:"80px",height:"80px",borderRadius:"50%"}} src={girl} alt="" />
                 <i onClick={()=>setActiveMenu(!activeMenu)} style={{alignItems:"center",color:"white",marginTop:"30px"}} class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
        <div style={{position:"relative",display:"flex"}}>
            {activeMenu && <DashboardMenu/>}
            <div className='middle-container'>
                
               <Outlet></Outlet>
            </div>
        </div>
       </div>
    );
};

export default Dashboard;