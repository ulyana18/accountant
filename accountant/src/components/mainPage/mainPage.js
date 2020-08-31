import React, { Component } from 'react';

import './mainPage.css';

class MainPage extends Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div className='mainPage'>
            <div className='mainPageWrapper'>
                <h1>Вы зарабатываете деньги, <br/>
                мы экономим их для Вас!</h1>
                <h2>Профессиональные бухгалтерские услуги и комплексное сопровождение бизнеса</h2>
            </div>
        </div>
      )
    }
}

export default MainPage;
