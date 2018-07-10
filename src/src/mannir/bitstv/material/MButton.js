import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createStyleSheet } from 'jss-theme-reactor';

// We can inject some CSS into the DOM.
const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

const buttonStyle = createStyleSheet("MyButton", {
  root: {
    backgroundColor: "#f99",
    "&:hover": {
      backgroundColor: "blue"
    }
  }
});

function MButton(props) {
  return (
    <Button className={props.classes.button} style={{margin: 10, height: 100, width: 200}}>
      {props.children ? props.children : 'Button'}
    </Button>
  );
}

MButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MButton);
