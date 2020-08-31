import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import MainPage from './components/mainPage/mainPage';
import AboutUs from './components/aboutUs/aboutUs';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <AboutUs />
      </div>
    )
  }    
  
}

export default App;
