import React, { useEffect, useState } from 'react';
import './style.css'

function ImageSlideshow() {
    const[current, setCurrent] = useState(0)
    const BackgroundImg=[
        "/images/zeus.jpg",
        "https://miro.medium.com/max/2400/0*cRxG_Kyg0GscWohm.jpg",
        "https://cdngallery.spicegems.com/02198/20171220_171216_02198_fdQ-hd.jpg",

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            changeImage();
        }, 8000);
        return () => clearInterval(interval)
    }, [current])

    function changeImage() {   
        if(current === BackgroundImg.length - 1 ) {
            setCurrent(0)
            return;
        }
            setCurrent(current + 1)
    }
    
    return (
        <div className="slideshow-container" >
            <img src={ BackgroundImg[current] } alt="" />
        </div>
    )
}

export default ImageSlideshow
