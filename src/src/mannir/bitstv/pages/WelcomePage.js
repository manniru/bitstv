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

class Card3 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Card3'
    };
  }

  render() {
    return (
      <div>

      <Card style={{margin: 5,width: 500, height: 300, backgroundColor: '#3f50b5'}} raised>
        
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
           Bits TV:<br />
           May 15, 2018<br />
           10:11am
          </Typography>
          


        </CardContent>
        <CardActions>
        

          <Button size="small" color="primary">Add  to Calender</Button>
          
          <IconButton style={{marginLeft: '-12', marginRight: '20'}} color="inherit" aria-label="Menu">
              <AccountCircle />
            </IconButton>

        </CardActions>
      </Card>
    </div>
    );
  }
}

class Card4 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Card1'
    };
  }

  render() {
    return (
      <div>

      <Card style={{margin: 5,width: 1090, height: 300}} raised>
        
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Welcome Mr. James Wong
          </Typography>

          <Typography component="p">
          Welcome to Bits Interactive Hospitality TV. Enjoy Our IPTV experience.We are dedicated to ensuring that you enjoy your stay with us.
          </Typography>

          
        </CardContent>
        <CardActions>
        

          
          <Button size="small" color="primary">
            Read System Features
          </Button>

        </CardActions>
      </Card>
    </div>
    );
  }
}

class Card5 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Card1'
    };
  }

  render() {
    return (
      <div>

      <Card style={{margin: 5,width: 1600, height: 500}} raised>
        
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Realtime Message from Front Desk
          </Typography>

          <Typography component="p">
          Welcome to Bits Interactive Hospitality TV. Enjoy Our IPTV experience.We are dedicated to ensuring that you enjoy your stay with us.
          </Typography>


          <FolderList />

          
        </CardContent>
        <CardActions>
        

          
          <Button size="small" color="primary">
            Read System Features
          </Button>

        </CardActions>
      </Card>
    </div>
    );
  }
}

function WelcomePage(props) {
  const { classes } = props;
  return (
    <div  style={{backgroundColor: '#e2e1e0', height: '100%'}}>

    <Grid container wrap="nowrap">
    
    <Grid item><Card3 name="a" /></Grid>
    
    <Grid item>
    
    <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Card4 name="a" /></Grid>
    </Grid>

    
    </Grid>

    </Grid>

            <Grid item><Card5 name="a" /></Grid>


    </div>
  );
}

export default WelcomePage;
