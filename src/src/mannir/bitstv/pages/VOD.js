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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const c1 = {maxWidth: 300, margin: 10}
const p1 = {padding: 5, textAlign: 'center', color: 'blue'}


class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'CNN Channel',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png',
    };
  }

  render() {
    return (
      <div>
      <Card style={c1}
      // onMouseOver={ (e) => this.onMouseOver1(e, '1') }
      // onMouseOut={ (e) => this.onMouseOut1(e, '1') }
      raised={this.state.raised1}
      
      >
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image="https://cdn.movieweb.com/img.teasers.posters/FIvHJ0sRccQIzv_381_a/Black-Panther.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Black Panther
          </Typography>
          <Typography component="p">
            Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
          <IconButton aria-label="Share"><ShareIcon /></IconButton>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">More</Button>


        </CardActions>
      </Card>
    </div>
    );
  }
}

function VOD(props) {
  const { classes } = props;
  return (
    <div  style={{backgroundColor: '#e2e1e0', height: '100%'}}>

    <Grid container wrap="nowrap">
    
    
    
    <Grid item>
    
    <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Movie name="a" /></Grid>
      <Grid item><Movie name="a" /></Grid>
      <Grid item><Movie name="a" /></Grid>
      <Grid item xs zeroMinWidth><Movie name="b" /></Grid>
    </Grid>

    <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Movie name="a" /></Grid>
      <Grid item><Movie name="a" /></Grid>
      <Grid item><Movie name="a" /></Grid>
      <Grid item xs zeroMinWidth><Movie name="b" /></Grid>
    </Grid>
    
        <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Movie name="a" /></Grid>
      <Grid item><Movie name="a" /></Grid>
      <Grid item><Movie name="a" /></Grid>
      <Grid item xs zeroMinWidth><Movie name="b" /></Grid>
    </Grid>
    
    
    </Grid>
    
    </Grid>

    

    </div>
  );
}

export default VOD;
