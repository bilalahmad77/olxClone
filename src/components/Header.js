import React from 'react';
import OLXLOGO from '../images/olx_logo.png';
import { FaSearch } from 'react-icons/fa';
import Login from './Login';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Header extends React.Component
{

    render()
    {
        return (
            <div className="container-fluid header-class">
              <div className = "row">
                
                <div className ="col-md-1">
                    <Link to="/">
                <img src={OLXLOGO} alt = "olx_logo" width="48px" height="48px" style={{ marginLeft:"50px" }}/>  
                </Link>
                </div>
              <div className="input-group-append">
            
             </div>
                    <div className ="col-md-2">

                <select className="form-control" style={{ border: '2px solid black' }} >

                <option>Pakistan</option> 
                <option>Punjab</option> 
                <option>Islamabad Capital Territory</option> 
                <option>Sindh</option> 
               <option>  Khyber Pakhtunkhwa  </option> 
               
               </select>
                </div>

            <div className="input-group col-md-6" >
             <input
              className="form-control form-control"
              type="text"
               placeholder="Search"
               aria-label="Search" style={{ border: '2px solid black' }}
             />
             <div className="input-group-append">
            

               <button className="search-go s22 py-0 mx-0">
                 <FaSearch />
              </button>
             </div>
           </div>

           <div className ="col-md-1" style={{ paddingLeft:"10px" }}>
             <Login/>
             <button type="button" className="btn btn-login" data-toggle="modal" data-target="#exampleModal">
          <b>Login</b>
        </button>

           </div>

           <div className ="col-md-1" style={{ marginLeft:"-45px",borderRadius:"80px" }}>

        <button type="button" className="btn btn-primary-ouline border-dark btn-block" data-toggle="modal" data-target="#exampleModal">
        <FaPlus/><b >Sell</b>
        </button>
        <div>

        </div>        
        <div>    
              
        <div className="modal" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">Ã—</span>
                </button>
              </div>
              <div className="modal-body">
              <button type="button" className="btn btn-primary-ouline border-dark btn-block"><b>Continue with phone</b></button>
              
              
              <br/>
              
              <button type="button" className="btn btn-primary-ouline border-dark btn-block"><b>Continue with facebook</b></button>
              <br/>
              <button type="button" className="btn btn-primary-ouline border-dark btn-block"><b>Continue with google</b></button>
              <br/>
              <button type="button" className="btn btn-primary-ouline border-dark btn-block"><b>Continue with email</b></button>

              </div>
              <div className="modal-footer ml-5 mr-5">
              We won't share your personal details with anyone
              </div>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
          
           </div>


              </div>
            </div>
        )
    }
}


export default Header;  
