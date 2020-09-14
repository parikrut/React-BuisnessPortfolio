import React, { Component } from 'react';

class HeaderAll extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <h3>Universal Pipeline</h3>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarWelcome" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarWelcome">
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
                        <li class="nav-item ">
                            <a href="about.html" class="nav-link js-scroll-trigger">
                                About
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a href="service.html" class="nav-link js-scroll-trigger">
                                Services
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a href="contact.html" class="nav-link">
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