import React from 'react'
function Navbar(){

    return ( <div style={{backgroundColor:'black'}}>
        <h1>React Meals</h1>
        <a style={{margin:"10px", color:'white'}}>Home</a>
        <a style={{margin:"10px", color:'white'}}>Order</a>
        <a style={{margin:"10px", color:'white'}}>Contact Us</a>
    </div>
    );
}

export default Navbar;