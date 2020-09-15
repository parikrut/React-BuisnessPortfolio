import React, { Component } from 'react';

class HeaderAll extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <h3>Universal Pipeline</h3>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarWelcome" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarWelcome">
                            <a className="dropdown-item " href="index.html">
                                    Braided Hose
                                </a>
                                <a className="dropdown-item " href="index-2.html">
                                    Suction Hose
                                </a> 
                                <a className="dropdown-item " href="index-3.html">
                                    HDPE Pipes & Sheets
                                </a>
                                <a className="dropdown-item " href="index-4.html">
                                    CPVC Pipes & Fittings
                                </a>
                                <a className="dropdown-item " href="index-4.html">
                                    Flat Hose
                                </a>
                                <a className="dropdown-item " href="index-4.html">
                                    UPVC Pipes & Fittings
                                </a>
                                <a className="dropdown-item " href="index-4.html">
                                    Water Tanks
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
                            <a href="contact.html" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div> 
            </div> 
        </nav>
        );
    }
}

export default HeaderAll;