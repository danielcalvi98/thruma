import React, { useEffect, useState } from 'react';
import './style.css'

function ImageSlideshow() {
    const[current, setCurrent] = useState(0)
    const BackgroundImg=[

        "https://miro.medium.com/max/2400/0*cRxG_Kyg0GscWohm.jpg",
        "https://wallup.net/wp-content/uploads/2016/03/01/300056-Zyzz-bodybuilding-Mirin-Zyzz_Veni_Vidi_Vici.jpg",
        "https://wallpaperaccess.com/full/3702281.jpg"

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            changeImage();
        }, 10000);
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
