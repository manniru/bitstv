import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

class StyledCard extends Component {
  constructor(props) {
  super(props);
  this.state = { shadow: 1 }
}

  onMouseOver = () => this.setState({ shadow: 3 });

  onMouseOut = () => this.setState({ shadow: 1 });

  render() {
    return (
      <Card 
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        zDepth={this.state.shadow}
      >
        {this.props.children}
      </Card>
    );
  }

}

export default StyledCard;