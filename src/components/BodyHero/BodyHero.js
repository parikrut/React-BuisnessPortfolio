import React, { Component } from 'react';

class BodyHero extends Component {
    render() {
        return (
            <section className="banner-area py-7">
                <div className="container">
                    <div className="row  align-items-center">
                        <div className="col-md-12 col-lg-7 text-center text-lg-left">
                            <div className="main-banner">
                                <h1 className="display-4 mb-4 font-weight-normal">
                                    Industry Leading Managed Services Solutions
                            </h1>

                                <p className="lead mb-4">
                                    Rapoo is set of landing and support pages aimed at helping companies promote new products and business launches.
                            </p>

                                <p className="mb-0">
                                    <a href="#" target="_blank" className="btn btn-primary btn-circled">
                                        Purchase now
                                </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="banner-img-block">
                                <img src="assets/img/banner-img-5.png" alt="banner-img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BodyHero;