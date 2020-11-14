// import React from "react";
// import {Link } from "react-router-dom";

// class Menu extends React.Component {
//     render() {
//       return (
//           <div>
//               <ul>
//                   <li><Link to="/">Home</Link></li>
//                   <li><Link to="AllCategories">All Categries</Link></li>
//                   <li><Link to="MobilePhones">MobilePhones</Link></li>
//                   <li><Link to="Cars">Cars</Link></li>
//               </ul>
//           </div>
//       )
//     }
//   }

//   export default Menu;

import React from 'react';
import {Link} from 'react-router-dom';
import {FaChevronDown} from 'react-icons/fa';



class NavBar extends React.Component
{
    render()
    {
        return (
   

    <div className="container-fluid">
      <div className ="row">
        <div className="col-md-12">
    <header className="dark">
      <nav role="navigation" >
        <a href="javascript:void(0);" className="ic menu" tabIndex={1}>
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </a>
        <a href="javascript:void(0);" className="ic close" />
        <ul className="main-nav">
          
          <li className="top-level-link">
           
       
            {/* <a className="mega-menu"><span><b>ALL CATEGORIES</b></span></a> */}
            <Link to="MobilePhones" className="mega-menu" style={{ textDecoration: 'none' }}>ALL CATEGORIES <FaChevronDown /></Link>

            <div className="sub-menu-block">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h2 className="sub-menu-head">Mobiles</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Tablets</a></li>
                    <li><a>Accessories</a></li>
                    <li><a>Mobile Phones</a></li>
                  </ul> 

                  <h2 className="sub-menu-head mt-4">Vehicles</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Cars</a></li>
                    <li><a>Cars on Installments</a></li>
                    <li><a>Cars Accessories</a></li>
                    <li><a>Spare Parts</a></li>
                    <li><a>Buses, Vans & Trucks</a></li>
                    <li><a>Rickshaw & Chingchi</a></li>
                    <li><a>Other Vehicles</a></li>
                    <li><a>Boats</a></li>
                    <li><a>Tractors & Trailers</a></li>
                  </ul>  

                     <h2 className="sub-menu-head mt-4">Property for Sale</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Land & Plots</a></li>
                    <li><a>Houses</a></li>
                    <li><a>Apartments & Flats</a></li>
                    <li><a>Shops - Offices - Commercial Space</a></li>
                    <li><a>Portions & Floors</a></li>
                  </ul> 

                  <h2 className="sub-menu-head mt-4">Property for Rent</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Houses</a></li>
                    <li><a>Apartments & Flats</a></li>
                    <li><a>Portions & Floors</a></li>
                    <li><a>Shops - Offices - Commercial Space</a></li>
                    <li><a>Roommates & Paying Guests</a></li>
                    <li><a>Vacation Rentals - Guest Houses</a></li>
                    <li><a>Land & Plots</a></li>
                    
                  </ul> 

                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">

                  <h2 className="sub-menu-head">Electronics & Home Appliances</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Computers & Accessories</a></li>
                    <li><a>TV - Video - Audio</a></li>
                    <li><a>Cameras & Accessories</a></li>
                    <li><a>Games & Entertainment</a></li>
                    <li><a>Other Home Appliances</a></li>
                    <li><a>Generators, UPS & Power Solutions</a></li>
                    <li><a>Kitchen Appliances</a></li>
                    <li><a>AC & Coolers</a></li>
                    <li><a>Fridges & Freezers</a></li>
                    <li><a>Washing Machines & Dryers</a></li>
                  </ul>

                  <h2 className="sub-menu-head mt-4">Bikes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Motorcycles</a></li>
                    <li><a>Spare Parts</a></li>
                    <li><a>Bicycles</a></li>
                    <li><a>ATV & Quads</a></li>
                    <li><a>Scooters</a></li>
                  </ul>

                  <h2 className="sub-menu-head mt-4">Business, Industrial & Agriculture</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Business for Sale</a></li>
                    <li><a>Food & Restaurants</a></li>
                    <li><a>Trade & Industrial</a></li>
                    <li><a>Construction & Heavy Machinery</a></li>
                    <li><a>Agriculture</a></li>
                    <li><a>Other Business & Industry</a></li>
                    <li><a>Medical & Pharma</a></li>
                  </ul>

                  <h2 className="sub-menu-head mt-4">Services</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Education & Classes</a></li>
                    <li><a>Travel & Visa</a></li>
                    <li><a>Car Rental</a></li>
                    <li><a>Drivers & Taxi</a></li>
                    <li><a>Web Development</a></li>
                    <li><a>Other Services</a></li>
                    <li><a>Electronics & Computer Repair</a></li>
                    <li><a>Event Services</a></li>
                    <li><a>Health & Beauty</a></li>
                    <li><a>Maids & Domestic Help</a></li>
                    <li><a>Movers & Packers</a></li>
                    <li><a>Home & Office Repair</a></li>
                    <li><a>Catering & Restaurant</a></li>
                    <li><a>Farm & Fresh Food</a></li>

                  </ul>


                </div>
                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h2 className="sub-menu-head">Jobs</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Online</a></li>
                    <li><a>Marketing</a></li>
                    <li><a>Advertising & PR</a></li>
                    <li><a>Education</a></li>

                    <li><a>Customer Service</a></li>
                    <li><a>Sales</a></li>
                    <li><a>IT & Networking</a></li>
                    <li><a>Hotels & Tourism</a></li>

                    <li><a>Clerical & Administration</a></li>
                    <li><a>Human Resources</a></li>
                    <li><a>Accounting & Finance</a></li>
                    <li><a>Manufacturing</a></li>

                    <li><a>Medical</a></li>
                    <li><a>Domestic Staff</a></li>
                    <li><a>Part - Time</a></li>
                    <li><a>Other Jobs</a></li>
                  </ul>

                  <h2 className="sub-menu-head mt-4">Animals</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Fish & Aquariums</a></li>
                    <li><a>Birds</a></li>
                    <li><a>Hens & Aseel</a></li>
                    <li><a>Cats</a></li>
                    <li><a>Dogs</a></li>
                    <li><a>Livestock</a></li>
                    <li><a>Horses</a></li>
                    <li><a>Pet Food & Accessories</a></li>
                    <li><a>Other Animals</a></li>
                  </ul>

                  <h2 className="sub-menu-head mt-4">Furniture & Home Decor</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Sofa & Chairs</a></li>
                    <li><a>Beds & Wardrobes</a></li>
                    <li><a>Home Decoration</a></li>
                    <li><a>Tables & Dining</a></li>
                    <li><a>Garden & Outdoor</a></li>
                    <li><a>Painting & Mirrors</a></li>
                    <li><a>Rugs & Carpets</a></li>
                    <li><a>Curtains & Blinds </a></li>
                    <li><a>Office Furniture</a></li>
                    <li><a>Other Household Items</a></li>
                  </ul>
                </div>

                <div className="col-md-3 col-lg-3 col-sm-3">
                  <h2 className="sub-menu-head">Fashion & Beauty</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Accessories</a></li>
                    <li><a>Clothes</a></li>
                    <li><a>Footwear</a></li>
                    <li><a>Jewellery</a></li>
                    <li><a>Make Up</a></li>
                    <li><a>Skin & Hair</a></li>
                    <li><a>Watches</a></li>
                    <li><a>Wedding</a></li>
                    <li><a>Lawn & Pret</a></li>
                    <li><a>Couture</a></li>
                    <li><a>Other Fashion</a></li>
                  </ul>

                  <h2 className="sub-menu-head mt-4">Books, Sports & Hobbies</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Books & Magazines</a></li>
                    <li><a>Musical Instruments</a></li>
                    <li><a>Sports Equipment</a></li>
                    <li><a>Gym & Fitness</a></li>
                    <li><a>Other Hobbies</a></li>
                    
                  </ul>

                  <h2 className="sub-menu-head mt-4">Kids</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Kids Furniture</a></li>
                    <li><a>Toys</a></li>
                    <li><a>Prams & Walkers</a></li>
                    <li><a>Swings & Slides</a></li>
                    <li><a>Kids Bikes</a></li>
                    <li><a>Kids Accessories</a></li>
                    
                  </ul>
                </div>
              </div>
           
            </div>
          </li> 
          <li className="top-level-link">
            <Link to="MobilePhones" style={{ textDecoration: 'none' }}>MobilePhones</Link>
          </li>

          <li className="top-level-link">
          <Link to="Cars" style={{ textDecoration: 'none' }}>Cars</Link>
         
          </li>

          <li className="top-level-link">
            <Link to="MotorCycles" style={{ textDecoration: 'none' }}>MotorCycles</Link>    
          </li>
          <li className="top-level-link">
          <Link to="Houses" style={{ textDecoration: 'none' }}>Houses</Link>    
           
          </li>
          <li className="top-level-link">
            <Link to="TvVideoAudio" style={{ textDecoration: 'none' }}>TV - Video - Audio</Link>    
  
          </li>
          <li className="top-level-link">
          <Link to="Tablets" style={{ textDecoration: 'none' }}>Tablets</Link>    

          </li>

          <li className="top-level-link">
          <Link to="Landplots" style={{ textDecoration: 'none' }}>Land & Plots</Link>    

          </li>
        </ul> 
      </nav>
     
    </header>  
    </div>
  </div>
  </div>
        )
    }
}
export default NavBar;