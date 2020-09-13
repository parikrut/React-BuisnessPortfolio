import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BodyHero from './components/BodyHero/BodyHero'
import BodyFeatures from './components/BodyFeatures/BodyFeatures'
import BodyService from './components/BodyService/BodyService'
import BodyWorkingProcess from './components/BodyWorkingProcess/BodyWorkingProcess'
import BodyWebServices from './components/BodyWebServices/BodyWebServices'
import BodyProjects from './components/BodyProjects/BodyProjects'
import BodyReviews from './components/BodyReviews/BodyReviews'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyHero/>
      <BodyFeatures/>
      <BodyService/>
      <BodyWorkingProcess/>
      <BodyWebServices/>
      <BodyProjects/>
      <BodyReviews/>
      <Footer/>
    </div>
  );
}

export default App;
