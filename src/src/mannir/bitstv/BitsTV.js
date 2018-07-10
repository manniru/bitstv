import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import $ from 'jquery'
import Welcome from './container/Welcome'
import MainPage from './MainPage'
import WelcomePage from './container/WelcomePage'
import MoviesPage from './container/MoviesPage'

export default class BitsTV extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
        <MoviesPage /><br />
        <WelcomePage />
        <br />
        <MainPage />
      </div>
    );
  }
}