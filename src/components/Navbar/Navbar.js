import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div>
        <body className="top-header">
          <div className="top-bar bg-dark " id="top-bar">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="top-bar-left text-white">
                    <i className="fa fa-map-marker"></i>
                    <span className="ml-2">Address xyz.....</span>
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
                    <a className="navbar-brand js-scroll-trigger" href="index.html">
                      <h1>Universal Pipeline</h1>
                    </a>
                  </div>
                </div>

                <div className="col-lg-8 justify-content-end ml-lg-auto d-flex col-12">
                  <div className="top-info-block d-inline-flex">
                    <div className="icon-block">
                      <i className="ti-mobile"></i>
                    </div>
                    <div className="info-block">
                      <h5 className="font-weight-500">+7809346657</h5>
                      <p>Call Free</p>
                    </div>
                  </div>

                  <div className="top-info-block d-inline-flex">
                    <div className="icon-block">
                      <i className="ti-email"></i>
                    </div>
                    <div className="info-block">
                      <h5 className="font-weight-500">info@example.com</h5>
                      <p>Email Us</p>
                    </div>
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

                <a className="navbar-brand d-lg-none d-block" href="">
                    <h4>Krutik Pipeline</h4>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarWelcome" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarWelcome">
                                 <a className="dropdown-item " href="index.html">
                                    Home-1
                                </a>
                                <a className="dropdown-item " href="index-2.html">
                                    Home-2
                                </a> 
                                <a className="dropdown-item " href="index-3.html">
                                    Home-3
                                </a>
                                <a className="dropdown-item " href="index-4.html">
                                    Home-4
                                </a>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <a href="about.html" className="nav-link js-scroll-trigger">
                                About
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="service.html" className="nav-link js-scroll-trigger">
                                Services
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="pricing.html" className="nav-link js-scroll-trigger">
                                Pricing
                            </a>
                        </li>

                        <li className="nav-item ">
                            <a href="project.html" className="nav-link js-scroll-trigger">
                                Projects
                            </a>
                        </li>

                        <li className="nav-item ">
                            <a href="contact.html" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <ul className="ml-lg-auto list-unstyled m-0">
                        <li><a href="#" className="btn btn-white btn-circled">send enquiry</a></li>
                    </ul>
                </div> 
            </nav>
        </div>
    </div>
      </div>
    );
  }
}

export default Navbar;