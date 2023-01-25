import React, { useState } from 'react'
import './ImageSlider.css'
const ImageSlider = () => {
    const[image, setImage] = useState("img1");
    const currentSlide1 =() => {
        setImage("img1");
    };
    const currentSlide2 =() => {
        setImage("img2");
    };
    const currentSlide3 =() => {
        setImage("img3");
    };
return (
            <div className={image}>
                <div className='dotcontainer'>
                    <span className='dot' onClick={currentSlide1}></span> 
                    <span className='dot' onClick={currentSlide2}></span> 
                    <span className='dot' onClick={currentSlide3}></span> 
                </div>
            </div>
  )
}

export default ImageSlider

