import React from "react";

import { Link } from "react-scroll";


export default function Navbar(){
    return(

<>

<nav className="navbar navbar-expand-lg bg sticky  text-info py-3">
      <div className="container-fluid ">
        <a className="navbar-brand col-lg-6 col-md-6 mx-lg-3 mx-5 " href="#">My Skill</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-info" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link  to="home" className="nav-link  " aria-current="page"  spy={true} smooth={true} offset={-50} duration={300} >Home</Link>
            </li>
            <li className="nav-item me-4">
              <Link to="about" spy={true} smooth={true} offset={-40} duration={300}  className="nav-link"   >About</Link>
            </li>
            <li className="nav-item me-4">
              <Link to="skills" spy={true} smooth={true} offset={-40} duration={300}  className="nav-link"  >Skills</Link>
            </li>
            <li className="nav-item me-4">
            
              <Link  to="service" spy={true} smooth={true} offset={-40} duration={300} className="nav-link "  >Service</Link>
            </li>
            <li className="nav-item me-4">
              <Link to="contact" spy={true} smooth={true} offset={-40} duration={300}  className="nav-link" >Contact</Link>
            </li>
           
            
          </ul>
          <div className="joinbtn">
          <form className="d-flex" role="search">
            
            <button className="btn btn-outline-success me-1 px-2 shadow-none" type="submit "  >Hire-me</button>
            
          </form>
          </div>
        </div>
      </div>
    </nav>

  

</>
              
    )
};


