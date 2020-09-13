import React, { Component } from 'react';

class BodyWorkingProcess extends Component {
    render() {
        return (
            <section className="section" id="process">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 text-center">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Our Working process
                        </h2>

                        <p>
                            Rapoo can be used to create anything from a small marketing page to a sophisticated website.
                        </p>

                    </div>
                </div>
            </div> 

            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="process-block">
                        <img src="assets/img/process/process-1.jpg" alt="" className="img-fluid"/>

                        <h3>Project Research</h3>
                        <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="process-block">
                        <img src="assets/img/process/process-2.jpg" alt="" className="img-fluid"/>

                        <h3>Project demostration</h3>
                        <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="process-block">
                        <img src="assets/img/process/process-3.jpg" alt="" className="img-fluid"/>

                        <h3>Development & delivery</h3>
                        <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        );
    }
}

export default BodyWorkingProcess;