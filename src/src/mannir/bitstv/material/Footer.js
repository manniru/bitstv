import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const p1 = { margin: 0, padding: 5 }

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      name: 'BitsTV'
    };
  }

  render() {
    return (
      <div>
        <div>
          <Paper style={p1} elevation={4}>
            <Typography variant="headline" component="h3">
              Footer Title
        </Typography>
            <Typography component="p">
              Footer Contents
          </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}