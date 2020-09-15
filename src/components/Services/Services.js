import React, { Component } from 'react';
import BodyWebServices from '../BodyWebServices/BodyWebServices'

class Services extends Component {
    render() {
        return (
            <div>
                

    <section class="page-banner-area page-service">
        <div class="overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9 col-md-12 col-12 text-center">
                    <div class="page-banner-content">
                        <h1 class="display-4 font-weight-bold">Web &amp; Cloud services</h1>
                        <p>We'd love to talk about how we can help you.</p>
                    </div>
                </div>
            </div> 
        </div> 
    </section>

    <section class="section" id="service">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-7 pl-4 text-center">
                    <div class="service-heading">
                        <h1>Get a better deal and start saving money today</h1>
                    </div>
                </div>
            </div>
            
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="service-block media">
                        <div class="service-icon">
                            <i class="ti-reload"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4>Backup System</h4>
                            <p>Our team are experts in matching you with the right provider.</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 mb-3 col-md-6">
                    <div class="service-block media">
                        <div class="service-icon">
                            <i class="ti-cloud"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4>Cloud Hosting</h4>
                            <p>Our team are experts in matching you with the right provider.</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 mb-3 col-md-6">
                    <div class="service-block media ">
                        <div class="service-icon">
                            <i class="ti-world"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4>Web hosting</h4>
                            <p>Our team are experts in matching you with the right provider.</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 mb-3 col-md-6">
                    <div class="service-block media ">
                        <div class="service-icon">
                            <i class="ti-server"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4>Office Cloud</h4>
                            <p>Our team are experts in matching you with the right provider.</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="service-block media">
                        <div class="service-icon">
                            <i class="ti-world"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4>Web hosting</h4>
                            <p>Our team are experts in matching you with the right provider.</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="service-block media">
                        <div class="service-icon">
                            <i class="ti-cloud"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4>Office Cloud</h4>
                            <p>Our team are experts in matching you with the right provider.</p>
                        </div>
                    </div>
                </div>
            </div>   
            
            <div class="row">
                <div class="col-lg-12 text-center">
                    <p class="pl-3">Want to know more about this? <a href="#">Contact us</a></p>
                </div>
            </div>    
        </div>
    </section>
    <BodyWebServices/>

    
            </div>
        );
    }
}

export default Services;