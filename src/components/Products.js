import React from 'react';
import {Outlet} from 'react-router-dom';
import BannerImage from "../components/BannerImage";
import HeroAd from "../components/HeroAd";
import OlxApp from "../components/OlxApp";

import MobilePhoneForIndex from '../components/MobilePhoneForIndex';

function Products(){

    return(
        <div>
        <BannerImage/>
        <HeroAd/>
            <Outlet/>
            <MobilePhoneForIndex/>
            <div className="text-center">
            <button type="button" className="btn btn-primary-ouline border-dark"><b>Load more</b></button>
            </div>     
            <OlxApp/>

        </div>
        

    )
}
export default Products;