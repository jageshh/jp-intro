import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./App.css";


function Leftsidebar() {
  return (
    // Hero Secton for oHome page
    <>
      <div className="pnt-div">
        <div className="left-side">
          <a href="https://www.facebook.com/majnu.prajapati.56">
            <FaFacebook />{" "}
          </a>
          <br />
          <br />
          <br />
          <a href="https://github.com/jageshh">
            <FaGithub />
          </a>
          <br />
          <br />
          <br />

          <a href="https://www.linkedin.com/in/jageshvar-prajapati-88490b208/">
            <FaLinkedin />
          </a>
          <br />
          <br />
          <br />
          <a href="https://twitter.com/Jageshvar99">
            <FaTwitter />{" "}
          </a>
          <br />
         
        </div>



        <div className="men-content">
          <h4 className="my-name aqa">Hi, my name is</h4>
          <h1 className="my-name grow">
            Jageshvar Prajapati.
            <br /><span className="dark">I build things for the web.</span>
          </h1>
          <p className="my-name para-2">
            I’m a software engineer specializing in building<br/> (User Interface and
            ux) exceptional digital experiences.<br/> Currently, I’m focused on Web
            Development.
          </p>

          <button className="btn btn-2">Get In Touch</button>
          
          
        </div>



        <div className="right-side">
          <br />
          <br />
          <br />

          <p className="name">Jageshvar.Prajapati</p>
          
          <br/>
          
        </div>
      </div>
    </>
  );
}

export default Leftsidebar;
