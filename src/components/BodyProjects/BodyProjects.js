import React, { Component } from 'react';

class BodyProjects extends Component {
    render() {
        return (
            <div>
                <section className="section" id="projects-wrap">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-heading">
                        <h1 className="text-white">We are trying to deliver 100% quality product and success their business to achieve ultimate goal.</h1>
                    </div>
                </div>
                <div className="col-lg-6">
                    <p className="lead text-white">We are providing best service since 1990 to present , committed to best service delivery.Nullam metus enim, placerat in lacus vel, porttitor egestas libero. Etiam ex risus, feugiat eget accumsan eu, sagittis eu urna. In eget ultrices metus. Nunc accumsan </p>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" className="section-bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div className="single-project">
                        <img src="assets/img/projects/p-1.jpg" alt="" className="img-fluid"/>
                        <div className="project-content">
                            <h4>Project: onepage</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div className="single-project">
                        <img src="assets/img/projects/p-4.jpg" alt="" className="img-fluid"/>
                        <div className="project-content">
                            <h4>Project: business</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8 ">
                    <div className="single-project">
                        <img src="assets/img/projects/p-3.jpg" alt="" className="img-fluid"/>
                        <div className="project-content">
                            <h4>Project : Marketing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-4">
                <div className="col-lg-7 col-md-12 col-sm-12 ">
                    <div className="single-project">
                        <img src="assets/img/bg/banner_bg.jpg" alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 ">
                    <div className="project-content-block">
                        <h4>Do you know who we are?</h4>
                        <h2>More than just service your products...</h2>
                        <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and we will give you a complete account of the system.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


            </div>
        );
    }
}

export default BodyProjects;