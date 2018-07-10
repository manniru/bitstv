import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './Paper1.css';
import $ from 'jquery'


$(document).ready(function () {
  // $('.box').hide();
  //  $('#card2').focus();
  //  $('#card2').fadeIn("fast");
// $("#card2").hover();
  // setTimeout( function() { $( '#header' ).focus() }, 500 );
// $('#card1').css({'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'});

// $('#card2').addClass('.card-3');
/*
  $('.box').css({
      'background-color': 'red',
      'border' : '1px solid red',
      'color' : 'white',
      'font-size': '32px',
      'text-align' : 'center',
      'display' : 'inline-block'
  });

  $('#box1').css({
    width: '10px',
    color: 'pink',
    margin:20, width: 300,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  });

  $('#box2').css({
    width: '10px',
    color: 'pink',
    margin:20, width: 300,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '-5px -5px 10px -5px #333, 10px 10px 5px 0px #33CCFF',
  });
  */
  

//  $("#card1").attr('tabindex', -1).focus();
// setTimeout( function() {
//   $('#card2').css({'background-color': 'green'});
//   $("#card2").attr('tabindex', -1).focus();
// }, 5000 );

//  $("#card1").attr('tabindex', -1).focus();


});

var i = 1;
$(document).on ('keydown', function (e) {
  var c = e.which;
  if (c === 39) {
    $('#ch'+i).focus();
    i++;
  }

  if (c === 37) {
    // $('#ch'+i).focus();
    $("#card2").attr('tabindex', -1).focus();
    i--;
  }
  console.log('_Paper=' + c);
  // console.log('keydown');
});

const p1 = {margin: 20, padding: 0, width: 300, height: 200}

const card = {margin:20, width: 300, };
  const title = {
    marginBottom: 16,
    fontSize: 14,
  }
const pos = {
    marginBottom: 12,
  }
/*
const style = {
  width: '10px',
  color: 'pink',
  margin:20, width: 300,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const style2 = {
  width: '10px',
  color: 'pink',
  margin:20, width: 300,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '-5px -5px 10px -5px #333, 10px 10px 5px 0px #33CCFF',
};
*/


function Paper1(props) {
  const { classes } = props;
  return (
    <div style={{backgroundColor: '#ccc', height: 900}}>
    <br />


<div>



<div id="card1" class="card"></div>
<div id="card2" class="card"></div><br />
<div id="card3" class="card"></div>
<div id="card4" class="card"></div>


      <Card id="box1">
        <CardContent>
          <Typography style={title} color="textSecondary">CNN</Typography>
          <Typography variant="headline" component="h2">h2 here</Typography>
          <Typography style={pos} color="textSecondary">adjective</Typography>
          <Typography component="p">Body</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More</Button>
        </CardActions>
      </Card>

      <Card id="box2">
        <CardContent>
          <Typography style={title} color="textSecondary">
            Word of the Day
          </Typography>
          <Typography variant="headline" component="h2">h2 here</Typography>
          <Typography style={pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More</Button>
        </CardActions>
      </Card>
    </div>

      <Paper style={p1} elevation={4}>
        <Typography variant="headline" component="h3">TODAY EVENTS</Typography>
        <Typography component="p">
          <img src='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300' width='100%' height='180' />
        </Typography>
      </Paper>

      <Paper style={p1} elevation={8}>
        <Typography variant="headline" component="h3">HOTEL SERVICE</Typography>
        <Typography component="p">
          <img src='https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300' width='100%' height='180' />
        </Typography>
      </Paper>

      <Paper style={p1} elevation={24} >
        <Typography variant="headline" component="h3">SPECIAL BOARD</Typography>
        <Typography component="p">
          <img src='https://images.pexels.com/photos/6524/person-woman-hotel-laptop.jpg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300' width='100%' height='180' />
        </Typography>
      </Paper>

    </div>
  );
}

export default Paper1;
