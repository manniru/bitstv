import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  
  control: {
    padding: theme.spacing.unit * 2,
  },
});

const p1 = {height: 200, width: 150}

var ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var img1 = 'https://cdn.movieweb.com/img.teasers.posters/FIvHJ0sRccQIzv_381_a/Black-Panther.jpg'

class GuttersGrid extends React.Component {
  state = {
    spacing: '8',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container style={{flexGrow: 1}} spacing={16}>
        <Grid item xs={8}>
          <Grid container justify="center" spacing={Number(spacing)}>
            {ar.map(value => (
              <Grid key={value} item>
                <Paper style={p1} elevation={8} ><img src={img1} alt='Image' width='100%' height='100%' /></Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>


        
      </Grid>
    );
  }
}

// GuttersGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default GuttersGrid;
