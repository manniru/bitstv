import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import $ from 'jquery'
import SimpleMediaCard from '../../materialui/demos/SimpleMediaCard'
import TitlebarGridList from '../../materialui/demos/TitlebarGridList'
import grid1 from '../../materialui/demos/grid1'

import Card2 from '../components/Card2'

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>

      






      
      <br />
        <SimpleMediaCard />
        <br />
        <Card2 />
      </div>
    );
  }
}