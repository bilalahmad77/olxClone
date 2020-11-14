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

function MobilePhonesDetails(){  
    
    const products={
        "Apple-7-gb":{
         name:"Apple 7/32gb",
         img:"https://apollo-singapore.akamaized.net/v1/files/9xa8icy8j4ms2-PK/image;s=300x600;q=60",
         AdId:1023643061,
         price:"Rs 32,500",
         loc:"Thanda Pani, Islamabad.",
         dateDay:"Nov 5",
         owner:"Nasir Mehmood",
         membersince:"Member since Mar 2019",
         phoneNumber:"** *** ****",
         Make:"Apple",
        Condition:"Used",
        description1:"Unlocked Ifone 7/32gb",
        description2:"10/10",
        description3:"Mene USA se mangwaya tha to 60 days ke bd bnd hogia tha phir me apple store pe le gya tha Unhon ne set kr ke dia to abtk koe msla nhe hy set bilkul new hy"
        },
        "Samsung Note 9 FD model":{
            name:"Samsung Note 9 FD model",
            img:"https://apollo-singapore.akamaized.net/v1/files/u52agndihp8z2-PK/image;s=300x600;q=60",
            AdId: 1023549638,
            price:"Rs 66,500",
            loc:"G-11 Markaz, Islamabad.",
            dateDay:"Nov 8",
            owner:"Hussain Tahir",
            membersince:"Member since Mar 2019",
            phoneNumber:"** *** ****",
            Make:"Samsung",
           Condition:"Used",
           description1:"I m selling Samsung Note 9",
           description2:"10/10",
           description3:"Ram 6gb / Rom 64gb."
           },
           "Iphone-256-gb":{
            name:"Iphone x 256 gb",
            img:"https://apollo-singapore.akamaized.net/v1/files/s4ins08na2sj3-PK/image;s=300x600;q=60",
            AdId: 1024001561,
            price:"Rs 100,000",
            loc:"Shehzad Town, Islamabad.",
            dateDay:"Today",
            owner:"Hussain Tahir",
            membersince:"Member since Mar 2019",
            phoneNumber:"** *** ****",
            Make:"Apple",
           Condition:"Used",
           description1:"I want to sell iphone x in excellent condition.",
           description2:"Battery health 89",
           description3:"256gb"
           },
           "Iphone-11-physical-dual-128-gb":{
            name:"Iphone 11 physical dual 128 gb 10/10",
            img:"https://apollo-singapore.akamaized.net/v1/files/uwvjydglp6rc3-PK/image;s=300x600;q=60",
            AdId: 1024001671,
            price:"Rs 167,000",
            loc:"Wah Link Road, Islamabad.",
            dateDay:"Today",
            owner:"Ali",
            membersince:"Member since Mar 2014",
            phoneNumber:"** *** ****",
            Make:"Apple",
           Condition:"New",
           description1:"PTA APPROVED ( Both Physical sims )",
           description2:"In warranty till Oct 2021",
           description3:"Upgrading to 11 Pro Max ( exchange possible difference will be paid by me Neat and clean set used with extreme care"
           },
        
        };

        const {productID}=useParams();
        const product=products[productID];
        const{name,img,price,AdId,loc,dateDay,owner,membersince,phoneNumber,Make,Condition,description1,description2,description3}=product;

    return(
        // <div>
        //     <h1>ProductDetails</h1>
        //     <h4>{name}</h4>
        //     <img src={img} alt={name}/>

        // </div>

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
              <div className="col-md-3">{Condition}</div>
          </div>

       
     <hr/>

          <div className="row">
     
         <div className="col-md-3"><h5>Description</h5></div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <p>{description1}</p>
        <p>{description2}</p>
        <p>{description3}</p>
        </div>
        </div>

        {/* <div className="row">
        <div className="col-md-12">
        <p><FaturedProducts/></p>
        </div>
        </div> */}
        

        
     
          </div>
          {/* <p className="card-text mt-2 ml-4">{loc}<span className="dtMarg">{dateDay}</span></p> */}
          
        </div>
      </div>

        </div>
        <div className="col-md-4">
        <div className="card w-80 cart-border">
        <div className="card-body">
          <p className="card-title detail-price">{price}<span className="icoMarg"><FaShareAlt/></span><span className="icoMarg1"><FaRegHeart/></span></p>
          {/* <p className="card-text">{km}</p> */}
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
          {/* <button className= "btn btn-dark btn-lg btn-block" onClick={()=>
          {
              navigate('NotFound');
          }
        }>
            chat with seller
          </button> */}

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
          <p className="card-title mt-2 ml-4 mb-0"><b>AD ID {AdId}
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
export default MobilePhonesDetails;






