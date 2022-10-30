import React from 'react';
import  '../../assets/css/style.css'

function Menu(){
    return(
        <>
        <div class="loader_bg">
            <div class="loader"><img src="images/loading.gif" alt="#" /></div>
        </div>
        <div id="mySidepanel" class="sidepanel">
         <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
         <a href="index.html">Home</a>
         <a href="#about">About</a>
         <a href="#we_Do">We Do</a>
         <a href="#team">Our Team</a>
         <a href="#testimonial">Testimonial</a>
         <a href="#contact">Contact Us</a>
      </div>
        </>
    )
}

export default Menu