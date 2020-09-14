import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import MainPage from './components/mainPage/mainPage';
import AboutUs from './components/aboutUs/aboutUs';
import Services from './components/services/services';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <AboutUs />
        <Services />
      </div>
    )
  }    
  
}

export default App;
