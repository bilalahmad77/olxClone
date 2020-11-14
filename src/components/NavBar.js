import React from 'react';
import { Link } from 'react-router-dom';
function NavBar(){
    return(
    
            <nav>
        <Link to="/">Products</Link>
        <Link to ="Cars">Cars</Link>
        {/* <Link to="Products">Products</Link> */}
        </nav>
    );
}
export default NavBar;


