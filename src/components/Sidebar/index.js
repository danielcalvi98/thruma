import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

function Sidebar({ show }) {
    return (
        <div className="sidebar-container" >
            
            <span onClick={ show } > <NavLink className="sidebar-link" to="/" style={{textDecoration: 'none'}}>Home</NavLink></span>
            <span onClick={ show } ><NavLink className="sidebar-link" to="/bars" style={{textDecoration: 'none'}}>Bars</NavLink></span>
            <span onClick={ show } ><NavLink className="sidebar-link" to="/about" style={{textDecoration: 'none'}} >About</NavLink></span>
        </div>
    )
}

export default Sidebar
