import React, { Component } from 'react';
import $ from 'jquery'
import './SamplePage.css';
// import MyButton from '../material/MyButton'
// import ButtonBases from '../material/ButtonBases';
// import MButton from '../material/MButton'
import Button from '@material-ui/core/Button';

var i = 1;

const b1 = {margin: 5, height: 100, width: 200 }
/* ENABLE HERE
$(document).on ('keydown', function (e) {
  var c = e.which;
  if (c === 39) {
    $('#vd'+i).focus();
    i++;
  }

  if (c === 37) {
    $('#vd'+i).focus();
    i--;
  }
  console.log(c);
  // console.log('keydown');
});
*/

export default class SamplePage2 extends Component {
  render() {
    return (
      <div>
        SamplePage <br />
        <Button variant="contained" color="primary" style={b1} id="vd1" >Video 1</Button>
        <Button variant="contained" color="primary" style={b1} id="vd2" >Video 2</Button>
        <Button variant="contained" color="primary" style={b1} id="vd3" >Video 3</Button>
        <Button variant="contained" color="primary" style={b1} id="vd4" >Video 4</Button>
        <br />
        <Button variant="contained" color="primary" style={b1} id="vd5" >Video 5</Button>
        <Button variant="contained" color="primary" style={b1} id="vd6" >Video 6</Button>
        <Button variant="contained" color="primary" style={b1} id="vd7" >Video 7</Button>
        <Button variant="contained" color="primary" style={b1} id="vd8" >Video 8</Button>
        <br />
        <Button variant="contained" color="primary" style={b1} id="vd9" >Video 9</Button>
        <Button variant="contained" color="primary" style={b1} id="vd10" >Video 10</Button>
        <Button variant="contained" color="primary" style={b1} id="vd11" >Video 11</Button>
        <Button variant="contained" color="primary" style={b1} id="vd12" >Video 12</Button>
      </div>
    );
  }
}