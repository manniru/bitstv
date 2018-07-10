import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import VODPage from './VODPage';
// import Card2 from './Card2';
// import Vod from './Vod';
// import Movies from './Movies';
// import Container from './Container';
// import TVChannels from './TVChannels';
import TVPage from './TVPage'
import $ from 'jquery'
import SamplePage from '../pages/SamplePage'
import SamplePage2 from '../pages/SamplePage2'
import MainPage from './MainPage';
import WelcomePage from './WelcomePage';
import TV from './TV';
import Paper1 from '../../demos/Paper1';
// import Page1 from '../../demos/Page1';
import IFrame from '../../IFrame';
import VOD from './VOD';

const iframe1 = () => <iframe src="https://mannir.net/bitstv/pages/welcome.html" width="540" height="900"></iframe>

const iframe2 = () => <iframe src="https://mannir.net/bitstv/pages/main.html" width="540" height="900"></iframe>

const iframe3 = (name) => <iframe src="https://mannir.net/bitstv/pages/vod.html" width="540" height="900"></iframe>

const p1 = { marginLeft: 300, padding: 5, width: 1620, height: 900} //backgroundColor: 'rgba(0,0,0,0.9)'

export default class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'BitsTV',
      shadow: 1 
    };
  }

  // setFocus = () => {
  //   document.getElementById("mytext").focus();
  // }

  componentDidMount = () => {
    // var m1 = document.getElementById("mytext").value();
    // var m1 = $("#mytext").val();
    // console.log(m1);
    // $("#right").focus();
    // this.refs.name.focus();
  }
/*
  onKeyDown = (e) => {
    // console.log(+ new Date())
    // console.log(e)
    if (e === 'ArrowRight') {
      $("#right").focus();
      console.log('Dama')
    }

     if (e === 'ArrowLeft') {
       $("#left").focus();
      console.log('Hagu')
    }

    if (e === 'ArrowDown') {
      $("#down").focus();
      console.log('Kasa')
    }

    if (e === 'ArrowUp') {
      $("#up").focus();
      console.log('Sama')
    }
    
  }
  */
  // handleKeyPress(event){ if(event.key === "13"){ this.processUserInput(event.target.name); } }
  handleKeyPress(e){ { this.processUserInput(e.target.name); } }
  processUserInput = (e) => { console.log(e+" mm") }

  render(props) {
    console.log(props)

    // document.getElementById("mytext").focus()
    // $("#mytext").focus();
  
  //<div  tabIndex={-1} onKeyDown={(e) => this.onKeyDown(e.key)}
    // <IFrame name="iframe2" />
    return (
        <div style={{width: '100%', height: '400', backgroundColor: 'green'}}
>
          <Paper style={p1} elevation={4}>
            <Typography variant="headline" component="h3"><div id="content-title"></div></Typography>
            <Typography component="p">
              Contents Body! {this.props.selected}<br />


              <input ref="input" type="phone" name="phone" mask="(11) 11111 1111" onClick={this.inputOnClick} onKeyPress={(e) => this.handleKeyPress(e)}/>

              <VOD />
              <TV />
              <WelcomePage />
              <MainPage />


              <div id="page-welcome">{<WelcomePage />}</div>
              <div id="page-main">{'<MainPage />'}</div>
              <div id="page-tv">{<TVPage />}</div>
              <div id="page-vod">{<VODPage />}</div>     
              <div id="page-samplepage">{<SamplePage />}</div>
              <div id="page-samplepage2">{<SamplePage2 />}</div>
              <div id="page-iframe1"><IFrame name="iframe1" /></div>
              <div id="page-iframe2"><IFrame name="iframe2" /></div>
              <div id="page-iframe3"><IFrame name="iframe3" /></div>
              <div id="page-iframe4"><IFrame name="iframe4" /></div>
              <div id="page-iframe5"><IFrame name="iframe5" /></div>
              <div id="page-iframe6"><IFrame name="iframe6" /></div>
              <div id="page-iframe7"><IFrame name="iframe7" /></div>
 
          </Typography>
          </Paper>
        </div>
    );
  }
}