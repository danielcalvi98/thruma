import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import Navlinks from '../Navlinks'
function Navbar() {
    const [navBar, setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeBackground)
    return (
        <>
            { useLocation().pathname ==="/" &&
            <div className={navBar ? "navbar active": "navbar" } >
                <Navlinks />
            </div>
            }
            { useLocation().pathname !=="/" &&
            <div className="navbar active" >
                <Navlinks />
            </div>
            }
        </>
    )
}

export default Navbar
