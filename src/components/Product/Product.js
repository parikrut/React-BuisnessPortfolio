import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Link } from 'react-router-dom';

import Airhose from './BraidedHose/AirHose/Airhose'
class Product extends Component {
    render() {
        return (
            <BrowserRouter>

            <section class="section" id="process">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="text-center">
                            <h2 class="section-title mb-2">
                                Products
                            </h2>
                            <p class="mb-5">
                                comment on Something
                            </p>
                        </div>
                    </div>
                    <div class="">
                        <div class="row justify-content-center">
                            <div class="col-sm-3">
                                {/* Product Names */}

                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <i class="fas fa-arrow-right"></i> &nbsp;Braided Hose
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item"><NavLink to="/Airhose"> Air Hose</NavLink></li>
                                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                                    <li class="list-group-item">Morbi leo risus</li>
                                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                                    <li class="list-group-item">Vestibulum at eros</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <i class="fas fa-arrow-right"></i> &nbsp;HDPE Pipes
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div class="card-body">
                                                Krutik
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="col-sm-7 p-3">
                                    <Switch>
                                        <Route path="/Airhose" exact component={Airhose} />
                                    </Switch>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            </BrowserRouter>
        );
    }
}

export default Product;