import './App.css';
import {Link } from "react-router-dom";
import React from 'react';
import profile from './Jp.png';
function Navbar(){
            return (

        <>
        <div className="men-div">
        <div className="logo">
           
            <Link to="/navbar">
        <img className="img-style" src={profile} width={40} height={40} alt="Nature" />
      </Link>
        </div>
       <div className="my-nav">
       
       <ul>
        
        <li><Link to="/about" id='about'><span className="akua">01.</span>About</Link></li>
        <li><Link to="/experience" id='experience'><span className="akua">02.</span>Experience</Link></li>
        <li><Link to="/work" id='work'><span className="akua">03.</span>Work</Link></li>
        <li><Link to="/contact" id='contact'><span className="akua">04.</span>Contact</Link></li>
        
        <Link to="file:///C:/Users/Jageshvar%20prajapati/Downloads/Resume-Jageshvar%20Prajapati%20(2).pdf">
        <button href="file:///C:/Users/Jageshvar%20prajapati/Downloads/Resume-Jageshvar%20Prajapati%20(2).pdf" className="btn">Resume</button>
      </Link>
      </ul>
    
       </div>
  </div>
        </>
    )
}
export default Navbar;