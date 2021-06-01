import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function Footer() {
    return (
        <div className="footer-container" >
            <div className="footer-row">
                <div className="footer-col">
                    <h5 className="footer-heading" >Socials</h5>
                    <ul className="footer-socials" >
                        <li>
                            <a href="https://www.instagram.com/thruma_lago/" target="_blank">
                                <i class="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="_blank">
                                <i class="fab fa-facebook" />
                            </a>        
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="_blank">
                                <i class="fab fa-twitter" />    
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="_blank">
                                <i class="fab fa-youtube" /> 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
