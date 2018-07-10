import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
  // these buttons will be aligned to right side of abbBar
  toolbarButtons: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  menuButton: {
    marginRight: 20,
    marginLeft: -12,
  },
};

const Header = ({ classes }) => (
  <AppBar position="static" style={{height: 100}}>
    <Toolbar>
      
      <Typography variant="title" color="inherit">
        Ebahn Technologies Sdn Bhd. BitsTV
      </Typography>
      <span className={classes.toolbarButtons}>
        <IconButton color="inherit" aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Save">
          <SaveIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="More Options">
          <MoreVertIcon />
        </IconButton>
      </span>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
/*
const p1 = { margin: 0, padding: 5, width: 1920, height: 100,} // backgroundColor: 'green'

export default class Header extends Component {
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
              <strong>{this.props.headerTitle}</strong>
        </Typography>
            <Typography component="p">
              Header Contents! 
          </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}
*/

export default withStyles(styles)(Header);
