import React, { Component } from 'react';

class BodyService extends Component {
    render() {
        return (
            <div>
                <section className="bg-grey" id="service">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-4">
                                <div className="service-img">
                                    <img src="assets/img/blog-lg.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-lg-6 pl-4">
                                <div className="service-content">
                                    <h1>Get a better deal and start saving money today</h1>
                                    <p>We compare hundreds of leading products and plans across many categories to bring you the best value for money.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-5 service-wrap">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-8 offset-lg-4">
                                <div className="carousel slide " id="service-carousel" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="service-block media">
                                                            <div className="service-icon">
                                                                <i className="ti-reload"></i>
                                                            </div>
                                                            <div className="service-inner-content media-body">
                                                                <h4>Backup System</h4>
                                                                <p>Our team are experts in matching you with the right provider.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="service-block media">
                                                            <div className="service-icon">
                                                                <i className="ti-cloud"></i>
                                                            </div>
                                                            <div className="service-inner-content media-body">
                                                                <h4>Cloud Hosting</h4>
                                                                <p>Our team are experts in matching you with the right provider.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="service-block media">
                                                            <div className="service-icon">
                                                                <i className="ti-world"></i>
                                                            </div>
                                                            <div className="service-inner-content media-body">
                                                                <h4>Web hosting</h4>
                                                                <p>Our team are experts in matching you with the right provider.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="service-block media">
                                                            <div className="service-icon">
                                                                <i className="ti-server"></i>
                                                            </div>
                                                            <div className="service-inner-content media-body">
                                                                <h4>Office Cloud</h4>
                                                                <p>Our team are experts in matching you with the right provider.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="pl-3">Want to know more about this? <a href="#">Contact us</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default BodyService;