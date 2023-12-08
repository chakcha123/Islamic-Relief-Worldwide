import React from 'react';
import '../styles/header.css';
import logo from '../assets/logos/logo.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">  
            <div class="container-fluid">

                <div className="header-logo"> 
                    <img src={logo} alt="Logo" /> 
                    <div>Islamic Relief <br/> <span>Worldwide</span></div>
                </div>
        
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active mr-5 ml-5">
                            <Link class="nav-link" to="/" className='header-link'>Home</Link>
                        </li>
                        <li class="nav-item mr-5 ml-5">
                            <Link class="nav-link" to="/About" className='header-link'>About Us</Link>
                        </li>
                        <li class="nav-item mr-5 ml-5">
                            <Link class="nav-link" to="/Contact" className='header-link'>Contact Us</Link>
                        </li>
                        <li id="mobilebtn" class="nav-item mr-5 ml-5">
                            <div className="sign-up"> 
                                <Link class="nav-link" to="/SignUp" className='sign-btn'>Sign Up</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="navbar-nav">
                    <ul class="navbar-nav d-none d-lg-inline-flex">
                        <li class="nav-item mx-2">
                            <div className="sign-up"> 
                                <Link to="/SignUp" className='sign-btn'>Sign Up</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    
    </div>
  );
};

export default Header;













