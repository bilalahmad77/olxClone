import React from 'react';
import HeroImage from '../images/hero_bg_pk.jpg';
class BannerImage extends React.Component
{
    render()
    {
        return (
            
            <div className="container-fluid ">
            <div className = "row">
            <div className ="col-md-12">
            <img src={HeroImage} alt = "hero_image"/> 
            </div>
            </div>
            </div>
           
        )
    }
}

export default BannerImage;