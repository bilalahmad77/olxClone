import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart} from 'react-icons/fa';

function ProductIndex(){
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

        
        
        };
      
    return(
        
        <div className="container-fluid  py-2 px-2 fresh-recomm">
              
            <div className="row">
            <h3 className="ml-5">Based on your last search</h3>
            <ul id="horizontal-list">
                {Object.entries(products).map(([productID,{name,img,price,km,loc,dateDay}])=>
                (
                    <li key={productID}>
                        <Link to={productID}>
                        {/* <h2>{name}</h2>
                        <img src={img} alt={name}/> */}
                        
                         <div className="card" style={{width: '20rem',height:'100%'}}>
          <div className="container-fluid">
          
            <div className="row">
            <div className="col-md-3">
            <label for="featured" className="fe-lbl">FEATURED</label>
              </div>

              <div className="col-md-7">
        <img src={img} alt={name} className="card-img-top img-height"/>
        </div>
        <div className="col-md-2"  >
            <Link to="" data-toggle="modal" data-target="#exampleModal" style={{color:"black"}}><FaRegHeart/></Link>
        
          </div>
        </div>
        </div>
        <div className="card-body text-muted">
          <h5 className="card-title mb-0" style={{color:"black" }} > {price}</h5>
          <p className="card-text mb-0 ">{km}</p>
       
          <p className="card-text mb-0">{name}</p>
        </div>
        <div class="card-text text-muted">
        <p className="mt-2 ml-2">{loc}<span className="ml-5">{dateDay}</span></p>
         </div>
        </div>
                        </Link>
                    </li>
                )
                )}
                </ul>
                </div>

        </div>

    );
}
export default ProductIndex;


