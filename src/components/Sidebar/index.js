import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

function Sidebar() {
    return (
        <div className="sidebar-container" >
            <NavLink className="nav-link" to="/" style={{textDecoration: 'none'}}>Home</NavLink>
            <NavLink className="nav-link" to="/about" style={{textDecoration: 'none'}}>About</NavLink>
            <NavLink className="nav-link" to="/video" style={{textDecoration: 'none'}} >Video</NavLink>
        </div>
    )
}

export default Sidebar
