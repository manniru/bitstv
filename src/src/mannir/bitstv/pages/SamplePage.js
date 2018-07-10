import React, { Component } from 'react';
import $ from 'jquery'
import './SamplePage.css';
// import MyButton from '../material/MyButton'
// import ButtonBases from '../material/ButtonBases';
// import MButton from '../material/MButton'
import Button from '@material-ui/core/Button';

var i = 1;

const b1 = {margin: 5, height: 100, width: 200 }


export default class SamplePage extends Component {
  render() {
    return (
      <div>
        SamplePage <br />

        <Button variant="contained" color="primary" style={b1} id="ch1" >CNN</Button>
        <Button variant="contained" color="primary" style={b1} id="ch2" >BBC</Button>
        <Button variant="contained" color="primary" style={b1} id="ch3" >Aljazeera</Button>
        <Button variant="contained" color="primary" style={b1} id="ch4" >Astro</Button>
        <br />
        <Button variant="contained" color="primary" style={b1} id="ch5" >National Geography</Button>
        <Button variant="contained" color="primary" style={b1} id="ch6" >Channel 6</Button>
        <Button variant="contained" color="primary" style={b1} id="ch7" >Channel 7</Button>
        <Button variant="contained" color="primary" style={b1} id="ch8" >Channel 8</Button>
        <br />
        <Button variant="contained" color="primary" style={b1} id="ch9" >Channel 9</Button>
        <Button variant="contained" color="primary" style={b1} id="ch10" >Channel 10</Button>
        <Button variant="contained" color="primary" style={b1} id="ch11" >Channel 11</Button>
        <Button variant="contained" color="primary" style={b1} id="ch12" >Channel 12</Button>

        
      </div>
    );
  }
}