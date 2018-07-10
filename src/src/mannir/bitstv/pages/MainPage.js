import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FolderList from './welcome/FolderList';

class Card1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Card1'
    };
  }

  render() {
    return (
      <div>

      <Card style={{margin: 10,width: 500, height: 812}} raised>
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image="https://images.pexels.com/photos/6554/person-holiday-vacation-woman.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Dear Mr. James Wong
          </Typography>
          <Typography component="p">
            Welcome to Bits Interactive Hospitality TV. Enjoy Our IPTV experience.We are dedicated to ensuring that you enjoy your stay with us.
          </Typography>

        <FolderList />

        </CardContent>
        <CardActions>
        <IconButton style={{marginLeft: '-12', marginRight: '20'}} color="inherit" aria-label="Menu">
              <AccountCircle />
            </IconButton>

          <Button size="small" color="primary">
            Help
          </Button>
          <Button size="small" color="primary">
            More
          </Button>

        </CardActions>
      </Card>
    </div>
    );
  }
}

class Card2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Card1'
    };
  }

  render() {
    return (
      <div>

      <Card style={{margin: 5,width: 250, height: 260}} raised>
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image="https://images.pexels.com/photos/261348/pexels-photo-261348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200"
          title="Title2"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            BITS TV
          </Typography>
          
        </CardContent>
        <CardActions>
        <IconButton style={{marginLeft: '-1', marginRight: '10'}} color="inherit" aria-label="Menu">
              <AccountCircle />
            </IconButton>

          <Button size="small" color="primary">
            Help
          </Button>
          <Button size="small" color="primary">
            More
          </Button>

        </CardActions>
      </Card>
    </div>
    );
  }
}

function MainPage(props) {
  const { classes } = props;
  return (
    <div  style={{backgroundColor: '#e2e1e0', height: '100%'}}>

    <Grid container wrap="nowrap"><Grid item><Card1 name="a" /></Grid><Grid item>
    
    <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item xs zeroMinWidth><Card2 name="b" /></Grid>
    </Grid>

    <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item xs zeroMinWidth><Card2 name="b" /></Grid>
    </Grid>
    
        <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item><Card2 name="a" /></Grid>
      <Grid item xs zeroMinWidth><Card2 name="b" /></Grid>
    </Grid>
    
    
    </Grid>
    
    </Grid>

    

    </div>
  );
}

export default MainPage;
