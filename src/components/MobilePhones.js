import React from 'react';
import {Outlet} from 'react-router-dom';
import HeroAdTwo from "../components/HerroAdTwo";


function MobilePhones(){
    return(
        <div>
            <HeroAdTwo/>
            <Outlet/>
            
        </div>

    )
}
export default MobilePhones;



