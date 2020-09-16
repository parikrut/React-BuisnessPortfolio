import React, { Component } from 'react';

class Airhose extends Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <img src="assets/img/Airhose.jpg" class="img-thumbnail" />
                    </div>
                    <div class="col">

                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Airhose;