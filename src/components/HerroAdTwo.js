import React from 'react';
import HeroADImageTwo from '../images/HeroAd2.jpg';
class HeroAdTwo extends React.Component
{
    render()    
    {
        return (
            
            <div className="container-fluid ">
            <div className = "row">
            <div className ="col-md-12 mt-4 py-2 text-center">
            <img src={HeroADImageTwo} alt = "heroAdImageTwo" /> 
            </div>
            </div>
            </div>
           
        )
    }
}

export default HeroAdTwo;