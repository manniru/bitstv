import React, { Component } from 'react';
import StyledCard from './StyledCard';

// const Container = () => [
//   <StyledCard>Card 1</StyledCard>,
//   <StyledCard>Card 2</StyledCard>,
//   <StyledCard>Card 3</StyledCard>,
// ];

// export default Container;


export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      name: 'BitsTV'
    };
  }

  render() {
    return (
      <div>
        <StyledCard>Card 1</StyledCard>
        <StyledCard>Card 2</StyledCard>
        <StyledCard>Card 3</StyledCard>,

      </div>
    );
  }
}