import React from 'react';
import HeroADImage from '../images/HeroAd.jpg';
class HeroAd extends React.Component
{
    render()    
    {
        return (
            
            <div className="container-fluid ">
            <div className = "row">
            <div className ="col-md-12 mt-4 py-2 text-center">
            <img src={HeroADImage} alt = "heroAdImage" /> 
            </div>
            </div>
            </div>
           
        )
    }
}

export default HeroAd;