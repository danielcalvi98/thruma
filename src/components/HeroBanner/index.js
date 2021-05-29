import React from 'react'
import ImageSlideshow from '../ImageSlideshow';
import './style.css';

function HeroBanner({ heading, subheading, logo, src }) {
    return (
        <div className="hero-container" >
            <ImageSlideshow />
            <div className="hero-heading">
                {logo&& <img className="hero-logo" src="/img/logo.png" alt="logo"/> }
                <h1> { heading } </h1>
            </div>
            <h4> { subheading } </h4>
            {/* <button className="btn btn-primary" >Get the app</button>
            <button className="btn btn-secondary" >Donate</button> */}
        </div>
    )
}
export default HeroBanner
