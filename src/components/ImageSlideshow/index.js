import React, { useEffect, useState } from 'react';
import './style.css'

function ImageSlideshow() {
    const[current, setCurrent] = useState(0)
    const BackgroundImg=[
        "https://resi.ze-robot.com/dl/ul/ultraviolet-4k-wallpaper-2560%C3%971600.jpg",
        "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
        "https://wallpaperaccess.com/full/508751.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            changeImage();
        }, 3000);
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
