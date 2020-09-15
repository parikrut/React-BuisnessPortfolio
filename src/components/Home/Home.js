import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BodyHero from '../BodyHero/BodyHero'
import BodyFeatures from '../BodyFeatures/BodyFeatures'
import BodyService from '../BodyService/BodyService'
import BodyWorkingProcess from '../BodyWorkingProcess/BodyWorkingProcess'
import BodyWebServices from '../BodyWebServices/BodyWebServices'
import BodyProjects from '../BodyProjects/BodyProjects'
import BodyReviews from '../BodyReviews/BodyReviews'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <BodyHero />
                <BodyFeatures />
                <BodyService />
                <BodyWorkingProcess />
                <BodyWebServices />
                <BodyProjects />
                <BodyReviews />
            </div>
        );
    }
}

export default Home;