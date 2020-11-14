import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import ProductsDetails from './components/ProductDetails';
import ProductsIndex from './components/ProductIndex';
import Cars from './components/Cars';
import MobilePhones from './components/MobilePhones';
import MobilePhonesIndex from './components/MobilePhonesIndex';
import MobilePhonesDetails from './components/MobilePhonesDetails';
import MobilePhoneForIndex from './components/MobilePhoneForIndex';


import MotorCycles from './components/MotorCycles';
import Houses from './components/Houses';
import TvVideoAudio from './components/TvVideoAudio';
import Tablets from './components/Tablets';
import Landplots from './components/Landplots';


import NotFound from './components/NotFound';
import FaturedProducts from './components/FaturedProducts';
import Menu from './components/Menu';
import Login from './components/Login';

// import Signup from './Components/Signup';
import {Footer,FooterLinks} from "./components/Footer";



function App() {
  
  return (
    <div>
    
    <BrowserRouter>
    <Header/>
    
    <Menu/>
    <Routes>
    {/* <Route path="/" element={<Home/>}></Route> */}
    {/* <Route path="products" element={<Products/>}> */}

    <Route path="/" element={<Products/>}>
      <Route path="/" element={<ProductsIndex/>}></Route>
      <Route path=":productID" element={<ProductsDetails/>}></Route>
    </Route>

    <Route path="MobilePhones" element={<MobilePhones/>}>
      <Route path="/" element={<MobilePhonesIndex/>}></Route>
      <Route path=":productID" element={<MobilePhonesDetails/>}></Route>
    </Route>
    <Route path="Cars" element={<Cars/>}></Route>
    <Route path="MobilePhones" element={<MobilePhones/>}></Route>
    <Route path="MotorCycles" element={<MotorCycles/>}></Route>
    <Route path="Houses" element={<Houses/>}></Route>
    <Route path="TvVideoAudio" element={<TvVideoAudio />}></Route>
    <Route path="Tablets" element={<Tablets />}></Route>
    <Route path="Landplots" element={<Landplots />}></Route>
    <Route path="MobilePhoneForIndex" element={<MobilePhoneForIndex />}>
    </Route>
    


    


    <Route path="Login" element={<Login/>}></Route>

    <Route path="*" element={<NotFound/>}></Route>
    <Route path="FaturedProducts" element={<FaturedProducts/>}></Route>
    </Routes>
    <FooterLinks/>
    <Footer/>
    </BrowserRouter>
   </div>
  );
}
export default App;

