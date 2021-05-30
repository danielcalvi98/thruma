import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../Cart';
import Sidebar from '../Sidebar';
import './style.css';

function Navlinks() {
    const [sideBar, setSideBar] = useState(false);
    const [cart, setCart] = useState(false);
    const [icon, setIcon] = useState("fas fa-bars")

    const showSideBar = () => {
        sideBar ? setSideBar(false) : setSideBar(true);
        sideBar ? setIcon("fas fa-bars") : setIcon("fas fa-times");
    }

    const showCart = () => {
        cart ? setCart(false) : setCart(true)
    }

    return (
        <>

        
            <nav>
                <ul className="navbar-ul">
                    <NavLink className="nav-link" to="/" style={{textDecoration: 'none'}}>Home</NavLink>
                    <NavLink className="nav-link" to="/bars" style={{textDecoration: 'none'}}>Bars</NavLink>
                    <NavLink className="nav-link" to="/about" style={{textDecoration: 'none'}}>About</NavLink>
                    <span onClick={() => showSideBar() } class={ icon + " hamburger"} aria-hidden="true"></span >
                </ul>
            </nav>
            {sideBar &&
                <Sidebar />
            }
        </>
    )
}

export default Navlinks
