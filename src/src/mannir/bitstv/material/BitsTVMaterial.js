import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import $ from 'jquery'
import './BitsTVMaterial.css';
import Header from './Header';
import Menus from './Menus';
// import SimpleList from '../materialui/demos/SimpleList';
// import PaperSheet from '../materialui/demos/PaperSheet';
import Contents from '../pages/Contents';
import Footer from './Footer';
import MyButton from './MButton'


$(document).ready(function () {
  $('#content-title').html('Contents Title');

  $("ul[id*=myid] li").focus(function () {
    var id = $(this).attr('id');
    var value = $(this).attr('value');
    var title = $(this).text();
    $("div[id^='page-']").hide();
    $('#page-'+value).show();
    $('#content-title').html(title);
    // console.log($(this).html()); // gets innerHTML of clicked li
    // console.log(id);
    // console.log(value);
    // console.log(title); // gets text contents of clicked li
  });
});


const b1 = {margin: 5}

// <Button variant="contained" color="primary" style={b1} >Button1</Button>
// <Button variant="contained" color="secondary" style={b1} >Button1</Button>

export default class BitsTV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      selected: 'welcome',
    };
  }

  render() {
    return (
      <div id="main">
      <div id="header"><Header headerTitle="Welcome to Ebahn Hotels (BitsTV)" /></div>
      <div id="menus"><Menus /></div>
      <div id="contents">



      <Contents selected={this.state.selected} />
      </div>
      <div id="footer"><Footer /></div>


      </div>
    );
  }
}
