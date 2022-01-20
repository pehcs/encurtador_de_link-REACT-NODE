import React from 'react'
import './App.css';
import Input from './partials/Input'
import AdvancedStatistics from './partials/Main'
import Footer from './partials/Footer'
import Banner from './partials/Banner';
import Nav from './partials/Nav'

function App() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Input></Input>
      <AdvancedStatistics></AdvancedStatistics>
      <Footer></Footer>
    </div>
      
  );
}

export default App;
