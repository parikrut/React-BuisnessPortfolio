import React from 'react';

import { BrowserRouter, Route, NavLink, Switch, Link } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BodyHero from './components/BodyHero/BodyHero'
import BodyFeatures from './components/BodyFeatures/BodyFeatures'
import BodyService from './components/BodyService/BodyService'
import BodyWorkingProcess from './components/BodyWorkingProcess/BodyWorkingProcess'
import BodyWebServices from './components/BodyWebServices/BodyWebServices'
import BodyProjects from './components/BodyProjects/BodyProjects'
import BodyReviews from './components/BodyReviews/BodyReviews'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Enquiry from './components/Enquiry/Enquiry'
import About from './components/About/About'
import Product from './components/Product/Product'
import Home from './components/Home/Home'
import BraidedHose from './components/Product/BraidedHose/BraidedHose'

function App() {
  return (
    <BrowserRouter>
    <div>
          <body className="top-header">
            <div className="top-bar bg-dark " id="top-bar">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="top-bar-left text-white">
                      <a href="https://www.google.ca/maps/place/48+Kingknoll+Dr,+Brampton,+ON+L6Y+3G6/@43.6524227,-79.7451813,17z/data=!3m1!4b1!4m5!3m4!1s0x882b155e4b87744f:0x60e236559d8b40b4!8m2!3d43.6524188!4d-79.7429926"><i className="fa fa-map-marker"></i>
                        <span className="ml-2 text-white">Visit Us &nbsp;</span></a>
                    </div>
                  </div>

                  <div className="col-lg-4 ml-lg-auto col-md-6">

                    <ul className="d-flex list-unstyled header-socials float-lg-right">
                      <li><a href="#"> <i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"> <i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"> <i className="fab fa-pinterest-p"></i></a></li>
                      <li><a href="#"> <i className="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bar d-none d-md-block d-lg-block bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="logo d-none d-lg-block">
                      <NavLink to="/"><h1>Universal Pipeline</h1></NavLink>
                    </div>
                  </div>

                  <div className="col-lg-8 justify-content-end ml-lg-auto d-flex col-12">
                    <div className="top-info-block d-inline-flex">

                      <div className="icon-block">
                        <i className="ti-mobile"></i>
                      </div>
                      <a href="tel:789-789-7897">
                        <div className="info-block text-muted">
                          <h5 className="font-weight-500">+7809346657</h5>
                          <p>Call Free</p>
                        </div></a>
                    </div>

                    <div className="top-info-block d-inline-flex">
                      <div className="icon-block ">
                        <i className="ti-email"></i>
                      </div>
                      <a href="mailto:4krutikparikh@gmail.com">
                        <div className="info-block text-muted">
                          <h5 className="font-weight-500">info@example.com</h5>
                          <p>Email Us</p>
                        </div></a>
                    </div>
                    <div className="top-info-block d-inline-flex">
                      <div className="icon-block">
                        <i className="ti-time"></i>
                      </div>
                      <div className="info-block">
                        <h5 className="font-weight-500">Mon-Sat 9:00-12.00 </h5>
                        <p>Sunday Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
          <div className="main-navigation" id="mainmenu-area">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary main-nav navbar-togglable">

                <a className="navbar-brand d-lg-none d-block">
                  <NavLink to="/"><h4>Universal Pipeline</h4></NavLink>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa fa-bars"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav">
                    {/* <i class="fas fa-caret-down"></i> */}
                    <li className="nav-item dropdown" id="navbarWelcome" >
                      <NavLink className =" nav-link text-white"  to="/Product">Products <i className="fas fa-caret-down"></i> </NavLink>
                      <div className="dropdown-menu" >
                      <NavLink className="dropdown-item" to="/Product"> Braided Hose</NavLink>
                      <NavLink className="dropdown-item" to="/Product"> HDPE Pipes & Sheets</NavLink>
                      <NavLink className="dropdown-item" to="/Product"> CPVC Pipes & Fittings</NavLink>
                      <NavLink className="dropdown-item" to="/Product"> Flat Hose</NavLink>
                      <NavLink className="dropdown-item" to="/Product"> UPVC Pipes & Fittings</NavLink>
                      <NavLink className="dropdown-item" to="/Product"> Water Tanks</NavLink>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link js-scroll-trigger">
                        <NavLink className ="text-white" to="/About">About</NavLink>
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link js-scroll-trigger">
                        <NavLink className ="text-white" to="/Services"> Services</NavLink>
                      </a>
                    </li>

                    <li className="nav-item ">
                      <a className="nav-link">
                        <NavLink className ="text-white" to="/Contact">Contact</NavLink>
                      </a>
                    </li>
                  </ul>

                  <ul className="ml-lg-auto list-unstyled m-0">
                    <li><a className="btn btn-white btn-circled">
                      <NavLink className ="text-dark" to="/Enquiry">send enquiry</NavLink></a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Services" component={Services}/>
                <Route path="/Product" component={Product}/>
                <Route path="/BraidedHose" component={BraidedHose}/>
                <Route path="/Enquiry" component={Enquiry}/>

            </Switch>

            <footer className="section " id="footer">
            <div className="overlay footer-overlay"></div>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-4 col-sm-12">
                        <div className="footer-widget">
                            <a href="#" className="footer-brand text-white">
                                Universal Pipeline
                            </a>
                            <p>Each theme featured at the Bootstrap marketplace has been reviewed by Bootstrap's creators.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
    
                    <div className="col-lg-3 ml-lg-auto col-sm-12">
                        <div className="footer-widget">
                            <h3>Account</h3>
                            <ul className="footer-links ">
                                <li>
                                    <a href="#">
                                        Terms and conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Privacy policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Affiliate services
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Help and support
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Frequently Asked Question
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
    
                    <div className="col-lg-2 col-sm-6">
                        <div className="footer-widget">
                            <h3>Products</h3>
                            <ul className="footer-links ">
                                <li>
                                    <a href="#">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Products Shop
                                    </a>
                                </li>
    
                                <li>
                                    <a href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="col-lg-2 col-sm-6">
                        <div className="footer-widget">
                            <h3>Socials</h3>
                            <ul className="list-unstyled footer-links">
                                <li><a href="#"><i className="fab fa-facebook-f"></i>Facebook</a></li>
                                <li>
                                <a href="#"><i className="fab fa-twitter"></i>Twitter
                                </a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p"></i>Pinterest
                                </a></li>
                                <li><a href="#"><i className="fab fa-linkedin"></i>linkedin
                                </a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i>YouTube
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
    
    
                <div className="text-right pt-5">
                    <div className="col-lg-12">
                        <p className="footer-copy ">
                            &copy; Copyright <span className="current-year"><a href="https://themefisher.com/free-bootstrap-templates">Krutik Parikh</a></span> All rights reserved.
                        </p>
                    </div>
                </div> 
            </div> 
        </footer>
    </BrowserRouter>
  );
}

export default App;
