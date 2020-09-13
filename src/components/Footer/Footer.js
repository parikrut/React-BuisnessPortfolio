import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
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
                            <h3>About</h3>
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
        );
    }
}

export default Footer;