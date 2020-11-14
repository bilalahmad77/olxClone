import React from 'react';
import {useParams,useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { FaRegHeart} from 'react-icons/fa';
import {FaShareAlt} from 'react-icons/fa';
import {FaRegUserCircle} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import staticmap from '../images/staticmap.png';
import karwanAd from '../images/KarvanAd.png';
import FaturedProducts from '../components/FaturedProducts';

function ProductDetails(){  
    
    const products={
        "NISSAN MARCH 2006":{
         name:"NISSAN MARCH 2006",
         img:"https://apollo-singapore.akamaized.net/v1/files/u4gbg1rxda772-PK/image;s=300x600;q=60",
         km :"2006 - 200,000 km",
         price:"Rs 1,000,000",
         loc:"Satellite Town, Rawalpindi",
         dateDay:"SEP 19",
         owner:"Nasir Mehmood",
         membersince:"Member since Jan 2019",
         phoneNumber:"** *** ****",
         Make:"Nissan",
        Model:"March",
        Year:"2006",
        KMsdriven: "200,000 km",
        Fuel:"Petrol",
        Condition:"Used",
        RegisteredIn:"Islamabad",
        description:"This Car Is In Perfect Condition I'm The Owner Of The Car. Looking For A Serious Buyer Need To Sell It Urgently.No EXCHANGE with anything just Cash!"
         
        },
        "Honda City 2009": {
          name:"Honda City 2009",
          img:"https://apollo-singapore.akamaized.net/v1/files/hyvk9wqjty0s1-PK/image;s=300x600;q=60",
          km :"2009 - 200,000 km",
          price:"Rs 1,200,000",
          loc:"Bahria Town, Islamabad",
          dateDay:"Nov 02",
          owner:"Khalid Mehmood",
         membersince:"Member since Feb 2020",
         phoneNumber:"** *** ****",
         Make:"Honda",
        Model:"March",
        Year:"2009",
        KMsdriven: "200,000 km",
        Fuel:"Petrol",
        Condition:"Used",
        RegisteredIn:"Islamabad",
        description:"This Car Is In Perfect Condition I'm The Owner Of The Car. Looking For A Serious Buyer Need To Sell It Urgently.No EXCHANGE with anything just Cash!"
         
        },
        "House for sale c block G-9":{
          
          img:"https://apollo-singapore.akamaized.net/v1/files/isqokmftawxr1-PK/image;s=300x600;q=60",
          price:"Rs 2,000,000",
          km:"2 Bds - 3 Ba - 10 Marla",
          name:"House for sale c block G-9",
          loc:"G-9/4, St.No.2, Islamabad",
          dateDay:"Nov 02",
          owner:"Sadia Khan",
         membersince:"Member since Mar 2018",
         phoneNumber:"** *** ****",
         Bedrooms:2,
         Bathroom:3,
         AreaUnit:"Marla",
         Area:10,
         Furnished:"No",
         description:"Neat and clean house, Near to commercial,masjid,school etc."
        },
        "Topcity 5 Marla Plot At an Outstanding Location For Sale In Block G":{
          
          img:"https://apollo-singapore.akamaized.net/v1/files/5i6d9b567m22-PK/image;s=300x600;q=60",
          price:"Rs 3,000,000",
          name:"Topcity 5 Marla Plot At an Outstanding Location For Sale In Block G",
          loc:"Top City, St.no.48, Islamabad",
          dateDay:"Oct 20",
          description:"Neat and clean park, Near to commercial,masjid,school etc."
        },


         "NISSAN MARCH 2006":{
         name:"NISSAN MARCH 2006",
         img:"https://apollo-singapore.akamaized.net/v1/files/u4gbg1rxda772-PK/image;s=300x600;q=60",
         km :"2006 - 200,000 km",
         price:"Rs 1,000,000",
         loc:"Satellite Town, Rawalpindi",
         dateDay:"SEP 19",
         owner:"Nasir Mehmood",
         membersince:"Member since Jan 2019",
         phoneNumber:"** *** ****",
         Make:"Nissan",
        Model:"March",
        Year:"2006",
        KMsdriven: "200,000 km",
        Fuel:"Petrol",
        Condition:"Used",
        RegisteredIn:"Islamabad",
        description:"This Car Is In Perfect Condition I'm The Owner Of The Car. Looking For A Serious Buyer Need To Sell It Urgently.No EXCHANGE with anything just Cash!"
         
        },
        "Honda City 2009": {
          name:"Honda City 2009",
          img:"https://apollo-singapore.akamaized.net/v1/files/hyvk9wqjty0s1-PK/image;s=300x600;q=60",
          km :"2009 - 200,000 km",
          price:"Rs 1,200,000",
          loc:"Bahria Town, Islamabad",
          dateDay:"Nov 02",
          owner:"Khalid Mehmood",
         membersince:"Member since Feb 2020",
         phoneNumber:"** *** ****",
         Make:"Honda",
        Model:"March",
        Year:"2009",
        KMsdriven: "200,000 km",
        Fuel:"Petrol",
        Condition:"Used",
        RegisteredIn:"Islamabad",
        description:"This Car Is In Perfect Condition I'm The Owner Of The Car. Looking For A Serious Buyer Need To Sell It Urgently.No EXCHANGE with anything just Cash!"
         
        },
        "House for sale c block G-9":{
          
          img:"https://apollo-singapore.akamaized.net/v1/files/isqokmftawxr1-PK/image;s=300x600;q=60",
          price:"Rs 2,000,000",
          km:"2 Bds - 3 Ba - 10 Marla",
          name:"House for sale c block G-9",
          loc:"G-9/4, St.No.2, Islamabad",
          dateDay:"Nov 02",
          owner:"Sadia Khan",
         membersince:"Member since Mar 2018",
         phoneNumber:"** *** ****",
         Bedrooms:2,
         Bathroom:3,
         AreaUnit:"Marla",
         Area:10,
         Furnished:"No",
         description:"Neat and clean house, Near to commercial,masjid,school etc."
        },
        "Topcity 5 Marla Plot At an Outstanding Location For Sale In Block G":{
          
          img:"https://apollo-singapore.akamaized.net/v1/files/5i6d9b567m22-PK/image;s=300x600;q=60",
          price:"Rs 3,000,000",
          name:"Topcity 5 Marla Plot At an Outstanding Location For Sale In Block G",
          loc:"Top City, St.no.48, Islamabad",
          dateDay:"Oct 20",
          description:"Neat and clean park, Near to commercial,masjid,school etc."
        },

       
        
        };  

        const {productID}=useParams();
        const product=products[productID];
        const{name,img,price,km,loc,dateDay,owner,membersince,phoneNumber,Make,Model,Year,KMsdriven,Fuel,Condition,RegisteredIn,description,Bedrooms,Bathrooms,AreaUnit,Area,Furnished}=product;

    return(
        

<div className ="container-fluid">
    <div className="row">
        <div className="col-md-8 ">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img} alt={name} height='550px'/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 " src={img} alt={name} height='550px'/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img} alt={name} height='550px' />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="card w-100 mt-2 cart-border">
        <div className="card-body">
          
          <div class="container">
          <h5 className="card-title">Details</h5>
          <div className="row">
         
              <div className="col-md-3 text-muted">Make</div>
              <div className="col-md-3">{Make}</div>
              <div className="col-md-3 text-muted">Model</div>
              <div className="col-md-3">{Model}</div>
          </div>

          <div className="row">
         
         <div className="col-md-3 text-muted">Year</div>
         <div className="col-md-3">{Year}</div>
         <div className="col-md-3 text-muted">KMs Drivern</div>
         <div className="col-md-3">{KMsdriven}</div>
     </div>
     <div className="row">
         
         <div className="col-md-3 text-muted">Fuel</div>
         <div className="col-md-3">{Fuel}</div>
         <div className="col-md-3 text-muted">Condition</div>
         <div className="col-md-3">{Condition}</div>
     </div>
     <div className="row">
         
         <div className="col-md-3 text-muted">Registered in</div>
         <div className="col-md-3">{RegisteredIn}</div>
         <div className="col-md-3 text-muted"></div>
         <div className="col-md-3"></div>
     </div>

     <hr/>

          <div className="row">
     
         <div className="col-md-3"><h5>Description</h5></div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <p>{description}</p>
        </div>
        </div>
          </div>
          
        </div>
      </div>

        </div>
        <div className="col-md-4">
        <div className="card w-80 cart-border">
        <div className="card-body">
          <p className="card-title detail-price">{price}<span className="icoMarg"><FaShareAlt/></span><span className="icoMarg1"><FaRegHeart/></span></p>
          <p className="card-text">{km}</p>
          <p className="card-text text-muted">{name}</p>
        </div>
        <div class="text-muted">
        <p className="mt-2 ml-4">{loc}<span className="dtMarg">{dateDay}</span></p>
         </div>
      </div>

      <div className="card w-80 cart-border mt-2">
        <div className="card-body">
          <p className="card-title sel-desc">Seller description</p>
          <p className="card-title mt-2 ml-1 mb-0 sel-desc"><FaRegUserCircle/><span className="icoMarg1 mt-0"><b>{owner}</b></span></p>
          <p className="card-title  ml-5 mt-0 text-muted">{membersince}</p>
          <p>
        
          <button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="modal" data-target="#exampleModal">
          chat with seller
          </button>
          </p>
          <p className="text-center"><FaPhoneAlt/><span className="ml-4">{phoneNumber}</span><Link to="" className="ml-2" data-toggle="modal" data-target="#exampleModal">show number</Link></p>

        </div>
      </div>

      <div className="card w-80 cart-border">
        <div className="card-body">
        <h3 className="card-title sel-desc">Posted in</h3>
        <div class="text-muted">
        <p className="mt-2">{loc}</p>
         </div>
         <div>
         <img src={staticmap} alt = "static map" width="100%" height="100%" />  
         </div>
        </div>
      </div>

      <div>
          <p className="card-title mt-2 ml-4 mb-0"><b>AD ID 1023595729
</b><span className="mt-0 "><Link to="NotFound" className="repAdMarg">REPORT THIS AD</Link></span></p>

      </div>

      <div className="mt-3 text-center">
      <img src={karwanAd} alt = "Karwan Ad" width="60%" height="60%" />  
      </div>


        </div>
    </div>
</div>
      
    )
}
export default ProductDetails;






