import React from 'react';
import Guitar from '../images/guitar.jpg';
import Heart from '../images/hearts.jpg';
import Cartoon from '../images/cartoon.jpg';
import {Link} from 'react-router-dom';
import Cars from './Cars'

class Login extends React.Component {
  loginwithfb=()=>
  {
    this.props.history.push('/Landplots.js')
  }
    render() {
      return (
          <div>
               <div>
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-login" data-toggle="modal" data-target="#exampleModal">
          <b>Login</b>
        </button> */}
        
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">X</span>
                </button>
              </div>
              <div className="modal-body">
              <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
        {/* <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Guitar} alt = "Guitar" className="d-block w-10 slider-img" /> 
            <p className="text-muted text-center">Help make OLX safer place to buy and sell</p> 
          </div>
          <div className="carousel-item">
          <img src={Heart} alt = "Heart" className="d-block w-10 slider-img" />  
          <p className="text-muted text-center">Contact and close deals faster</p> 

          </div>
          <div className="carousel-item">
          <img src={Cartoon} alt = "Cartoon" className="d-block w-10 slider-img" />  
          <p className="text-muted text-center">Save all your favorite items in one place</p> 

          </div>
        </div>
        <a className="carousel-control-prev arrow-color " href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only" >Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
              </div>
              <div>
                {/* <a href="https://www.w3schools.com/react/react_events.aspwww.facebook.com"><button type="button" className="btn btn-outline-secondary  btn-custom " data-dismiss="modal">Continue with phone</button></a> */}
                <button type="button" className="btn btn-outline-secondary  btn-custom " data-dismiss="modal">Continue with Phone</button>

                <button onClick={this.loginwithfb}  type="button" className="btn btn-outline-secondary  btn-custom " data-dismiss="modal">Continue with facebook</button>
                <button type="button" className="btn btn-outline-secondary  btn-custom " data-dismiss="modal">Continue with google</button>
                <button type="button" className="btn btn-outline-secondary  btn-custom " data-dismiss="modal">Continue with email</button>
                {/* <button onClick={this.loginwithfb}>fb</button> */}
               
                {/* <Link to="Cars">Cars</Link> */}
                
              </div>
              <div>
              <p className="text-center">We won't share your personal details with anyone</p>
              <p className="text-center mr-2 px-4"><span className="text-muted px-2 ">if you continue, you are accepting</span>
              OLX Terms and Conditions and Privacy Policy
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
      )
    }
  }

  export default Login;