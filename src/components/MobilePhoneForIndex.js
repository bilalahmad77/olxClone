import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart} from 'react-icons/fa';

function MobilePhoneForIndex(){
    const products={
        "Apple-7-gb":{
         name:"Apple 7/32gb",
         img:"https://apollo-singapore.akamaized.net/v1/files/9xa8icy8j4ms2-PK/image;s=300x600;q=60",
         AdId:1023643061,
         price:"Rs 32,500",
         loc:"Thanda Pani, Islamabad",
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
            loc:"Shehzad Town, Islamabad",
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
            loc:"Wah Link Road, Islamabad",
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
      
    return(
        
        <div className="container-fluid  py-2 px-2 ">
        <h3 className="ml-4">Fresh recommendations</h3>      
            <div className="row">
           
           

            <ul id="horizontal-list">
                {Object.entries(products).map(([productID,{name,img,price,loc,dateDay}])=>
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
export default MobilePhoneForIndex;


