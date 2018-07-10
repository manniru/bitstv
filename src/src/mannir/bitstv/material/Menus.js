import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import AlarmIcon from '@material-ui/icons/Alarm';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import MovieIcon from '@material-ui/icons/Movie';
import VideoLabel from '@material-ui/icons/VideoLabel';
import ContactPhone from '@material-ui/icons/ContactPhone';
import ImportantDevices from '@material-ui/icons/ImportantDevices';
import PermMedia from '@material-ui/icons/PermMedia';
import FilterDrama from '@material-ui/icons/FilterDrama';
import $ from 'jquery'

// const focusBox = () => {
//     var box = document.getElementById('m2');
//     box.focus();
// }


const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

const p1 = { margin: 0, width: 300, height: 900 }

// $( document ).ready(function() {
//   // $( "#m2" ).focus();
// //   $('#m2').focus(function() {
// //   console.log('m2');
// // });

// });
// //////

class Menus extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'BitsTV'
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }




  moveCaretAtEnd = () => {
    console.log('moveCaretAtEnd')
  }

  _handleKeyDown = (event) => {
    if (event.keyCode)
      // console.log(event.keyCode)
      switch (event.keyCode) {
        case 27:
          this.state.activePopover.hide();
          break;
        default:
          break;
      }
  }


  componentDidMount = () => {
    // window.addEventListener("keydown", this.handleKeyDown);
    // window.addEventListener("keyup", this.handleKeyUp);
    // document.addEventListener("click", this._handleDocumentClick, false);
    // document.addEventListener("keydown", this._handleKeyDown.bind(this));
    $("div[id^='page-']").hide();

  }

  componentWillUnmount = () => {
    // window.removeEventListener("keydown", this.handleKeyDown);
    // window.removeEventListener("keyup", this.handleKeyUp);
    // document.removeEventListener("click", this._handleDocumentClick, false);
    // document.removeEventListener("keydown", this._handleKeyDown.bind(this));
  }

  menuItemTap(somekey) {
    console.log('somekey=' + somekey)
  }


  render() {
    const { classes } = this.props;


    // $("#input:text:visible:first").focus();
    // document.getElementById('#m2').focus();
    //  tabIndex={-1} onKeyDown={event => console.log(event.key)}
    return (
      <div>



        <Paper style={p1}>

          <MenuList id='myid'>
            <MenuItem key={1} className={classes.menuItem} id="m1" value={'welcome'} >
              <ListItemIcon className={classes.icon}><HomeIcon /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Welcome Page" />
            </MenuItem>

            <MenuItem key={2} className={classes.menuItem} id="m2" value={'main'} >
              <ListItemIcon className={classes.icon}><DraftsIcon /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Main Page" />
            </MenuItem>

            <MenuItem key={3} className={classes.menuItem} id="m3" value={'tv'}>
              <ListItemIcon className={classes.icon}><VideoLabel /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="TV Channels" />
            </MenuItem>

            <MenuItem key={4} className={classes.menuItem} id="m4" value={'vod'}>
              <ListItemIcon className={classes.icon}><MovieIcon /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Video on Demand" />
            </MenuItem>

            <MenuItem key={5} className={classes.menuItem} id="m5" value={'amenities'}>
              <ListItemIcon className={classes.icon}><InboxIcon /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Amenities" />
            </MenuItem>

            <MenuItem key={6} className={classes.menuItem} id="m6" value={'guestservices'}>
              <ListItemIcon className={classes.icon}><PersonIcon /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Guest Services" />
            </MenuItem>

            <MenuItem key={7} className={classes.menuItem} id="m7" value={'interactives'}>
              <ListItemIcon className={classes.icon}><PermMedia /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Interactives" />
            </MenuItem>

            <MenuItem key={8} className={classes.menuItem} id="m8" value={'weather'}>
              <ListItemIcon className={classes.icon}><FilterDrama /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Weather" />
            </MenuItem>

            <MenuItem key={9} className={classes.menuItem} id="m9" value={'roomorder'}>
              <ListItemIcon className={classes.icon}><ContactPhone /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Room Order" />
            </MenuItem>

            <MenuItem key={10} className={classes.menuItem} id="m10" value={'housekeeping'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="House Keeping" />
            </MenuItem>

            <MenuItem key={11} className={classes.menuItem} id="m11" value={'samplepage'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Sample Page" />
            </MenuItem>

            <MenuItem key={12} className={classes.menuItem} id="m12" value={'samplepage2'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Sample Page 2" />
            </MenuItem>

            <MenuItem key={13} className={classes.menuItem} id="m13" value={'iframe1'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Testing 1" />
            </MenuItem>

            <MenuItem key={14} className={classes.menuItem} id="m14" value={'iframe2'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Testing 2" />
            </MenuItem>

            <MenuItem key={15} className={classes.menuItem} id="m15" value={'iframe3'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Testing 3" />
            </MenuItem>

            <MenuItem key={16} className={classes.menuItem} id="m16" value={'iframe4'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Testing 4" />
            </MenuItem>

            <MenuItem key={17} className={classes.menuItem} id="m17" value={'iframe5'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Testing 5" />
            </MenuItem>

            <MenuItem key={18} className={classes.menuItem} id="m18" value={'iframe6'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Testing 6" />
            </MenuItem>

            <MenuItem key={19} className={classes.menuItem} id="m19" value={'iframe7'}>
              <ListItemIcon className={classes.icon}><ImportantDevices /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Testing 7" />
            </MenuItem>

          </MenuList>
        </Paper>
      </div>
    );
  }
}

Menus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menus);
