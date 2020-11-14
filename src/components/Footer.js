import React from 'react';
 import { FaFacebook,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";
import AppStore from '../images/appstore.png';
import PlayStore from '../images/playstore.png';
import {Link} from 'react-router-dom';


class Footer extends React.Component
{
    render()    
    {
        return (
            <nav className="navbar  sticky-bottom  bg-dark"> 
            <div className ="col-md-3">
            <p className="font-color mt-2"><b>Other Countries India</b> - South Africa - Indonesia</p>
            </div>
            <div className ="col-md-3">
            </div>
            <div className ="col-md-3">
            </div>
            <div className ="col-md-3 mt-2">
            <p className="font-color"><b>Free Classifieds in Pakistan </b> &nbsp;.© 2006-2020 OLX</p>
            </div>
            </nav>
           
        )
    }
}

class FooterLinks extends React.Component
{
    render()    
    {
        return (
            <nav className="navbar sticky-bottom bg-light"> 
            <div className ="col-md-2 ">
                <b>POPULAR CATEGORIES</b>
                
                <div className="text-muted" >
                <Link to="Cars" target="_blank" className="text-muted footer-links" >Cars</Link>
                <br/>
                <Link to="FlatsForRent" target="_blank" className="text-muted footer-links" >Flats for rent</Link>
                <br/>
                <Link to="Jobs" target="_blank" className="text-muted footer-links" >Jobs</Link>
                <br/>
                <Link to="MobilePhones" target="_blank" className="text-muted footer-links" >Mobile Phones</Link>
                </div>
               
            </div>
            <div className ="col-md-2">
                <b>TRENDING SEARCHES</b>
                <br/>
                <div className="text-muted" >
                <Link to="Bikes" target="_blank" className="text-muted footer-links" >Bikes</Link>
                <br/>
                <Link to="Watches" target="_blank" className="text-muted footer-links" >Watches</Link>
                <br/>
                <Link to="Books" target="_blank" className="text-muted footer-links" >Books</Link>
                <br/>
                <Link to="Dogs" target="_blank" className="text-muted footer-links" >Dogs</Link>
                </div>
               
            </div>
            <div className ="col-md-2">
                <b>ABOUT US</b>
                <br/>
                <div className="text-muted" >
                <Link to="AboutOLXGroup" target="_blank" className="text-muted footer-links" >About OLX Group</Link>
                <br/>
                <Link to="OLXBlog" target="_blank" className="text-muted footer-links" >OLX Blog</Link>
                <br/>
                <Link to="ContactUs" target="_blank" className="text-muted footer-links" >Contact Us</Link>
                <br/>
                <Link to="OLXforBusinesses" target="_blank" className="text-muted footer-links" >OLX for Businesses</Link>
                </div>
               
                
                
            </div>
            <div className ="col-md-3 mb-3">
                <b>OLX</b>
                <br/>
                <div className="text-muted" >
                <Link to="Help" target="_blank" className="text-muted footer-links" >Help</Link>
                <br/>
                <Link to="Sitemap" target="_blank" className="text-muted footer-links" >Sitemap</Link>
                <br/>
                <Link to="LegalAndPrivacyinformation" target="_blank" className="text-muted footer-links" >Legal & Privacy information</Link>
                <br/>
                </div>
                
               
                
            </div>
            <div className ="col-md-3 mb-3">
                <b>FOLLOW US</b>
                <br/>
                <FaFacebook/>
                &nbsp;
                <FaTwitter/>
                &nbsp;
                <FaYoutube/>
                &nbsp;
                <FaInstagram/>
                
                <br/>
                <img src={AppStore} className="mt-4" alt = "AppStore"/> 
                &nbsp;
                <img src={PlayStore} className="mt-4" alt = "PlayStore"/> 
            </div>
            </nav>
           
        )
    }
}

export {Footer,FooterLinks};