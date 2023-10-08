import React, { useContext } from 'react';
import '../Component/Navbar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const Navbar = ({activebar, setActivebar}) => {
const {user,logout} = useContext(AuthContext)
    return (
        <div className='navbar'>
           <div className='container'>
            <div className='navbar-container'>
                <h3 className='logo'>Navbar</h3>
                <div className='navbar-menu'>
                    <ul>
                    <li><Link className='link'>Home</Link></li>
                    <li><Link className='link'>About</Link></li>
                    <li><Link to="/dashboard" className='link'>Dashboard</Link></li>
                    {user?.email ?  <li onClick={()=>logout()}><Link className='link'>LogOut</Link></li> :
                    <li><Link to="/login" className='link'>Login</Link></li>}
                    </ul>
                </div>
                <i onClick={()=>setActivebar(!activebar)} class="fa-solid fa-bars hamburger"></i>
           
            </div>
            </div> 
        </div>
    );
};

export default Navbar;