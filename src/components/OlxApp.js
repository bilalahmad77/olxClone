import React from 'react';
import OlxAppImage from '../images/phone-app.png';
import AppStore2 from '../images/appstore_2x.png';
import PlayStore2 from '../images/playstore_2x.png';
class OlxApp extends React.Component
{
    render()    
    {
        return (
            
            <div className="container-fluid  bg-light mt-5">
            <div className = "row">
            <div className ="col-md-4">
            <img src={OlxAppImage} alt = "OlxAppImage" /> 
            </div>
            <div className ="col-md-4 mt-4">
            <h2>TRY THE OLX APP</h2>
            <h5>
            Buy, sell and find just about anything using<br/>
            the app on your mobile.
            </h5>
            
            </div>
            <div className ="col-md-4 mt-5">
            <p className="py-1"><b>GET YOUR APP TODAY</b></p>
            <img src={AppStore2} alt = "App Store 2" width="128px" height="40px" className="mr-2 mb-5"/> 
            <img src={PlayStore2} alt = "Play Store 2" width="128px" height="40px" className="mb-5"/> 
            </div>
            </div>
            </div>
           
        )
    }
}

export default OlxApp;