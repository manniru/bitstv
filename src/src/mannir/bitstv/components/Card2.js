import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Card2 extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
      <Card style={{maxWidth: 300}}>
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image="https://images.pexels.com/photos/784251/pexels-photo-784251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400"
          title="Main"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Main Page
          </Typography>
          </CardContent>
      </Card>

      <br />

      <Card style={{maxWidth: 300}}>
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
          title="TV"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            TV Channel
          </Typography>
          </CardContent>
      </Card>

      <br />

      <Card style={{maxWidth: 300}}>
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
          title="VODTV"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Video on Demand
          </Typography>
          </CardContent>
      </Card>

    </div>
    );
  }
}
