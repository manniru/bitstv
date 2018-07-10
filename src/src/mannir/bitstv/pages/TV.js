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


class Channel extends React.Component {
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
      <Card style={{margin: 5,width: 250, height: 260}} raised>
        <CardMedia
          style={{height: '100%', width: '100%'}}
          image={this.state.image}
          title={this.state.title}
        />
        </Card>
    </div>
    );
  }
}

function TV(props) {
  const { classes } = props;
  return (
    <div  style={{backgroundColor: '#e2e1e0', height: '100%'}}>

    <Grid container wrap="nowrap">
    
    
    
    <Grid item>
    
    <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Channel name="a" /></Grid>
      <Grid item><Channel name="a" /></Grid>
      <Grid item><Channel name="a" /></Grid>
      <Grid item xs zeroMinWidth><Channel name="b" /></Grid>
    </Grid>

    <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Channel name="a" /></Grid>
      <Grid item><Channel name="a" /></Grid>
      <Grid item><Channel name="a" /></Grid>
      <Grid item xs zeroMinWidth><Channel name="b" /></Grid>
    </Grid>
    
        <Grid container wrap="nowrap" spacing={16}>
      <Grid item><Channel name="a" /></Grid>
      <Grid item><Channel name="a" /></Grid>
      <Grid item><Channel name="a" /></Grid>
      <Grid item xs zeroMinWidth><Channel name="b" /></Grid>
    </Grid>
    
    
    </Grid>
    
    </Grid>

    

    </div>
  );
}

export default TV;
