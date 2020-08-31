import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Button } from '@material-ui/core';

import './header.css';

class Header extends Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return (
        <div className='header'>
            <div className='headerWrapper'>
                <h3>Account Team</h3>
                {/* <BottomNavigation
                    showLabels
                    // className={classes.root}
                >
                    <BottomNavigationAction label="Главная" />
                    <BottomNavigationAction label="О нас" />
                    <BottomNavigationAction label="Услуги" />
                    <BottomNavigationAction label="Контакты" />
                </BottomNavigation> */}
                <div className='btnsNav'>
                  <Button color="primary">Главная</Button>
                  <Button color="primary">О нас</Button>
                  <Button color="primary">Услуги</Button>
                  <Button color="primary">Цены</Button>
                  <Button color="primary">Контакты</Button>
                </div>
            </div>
        </div>
      )
    }
}

export default Header;
