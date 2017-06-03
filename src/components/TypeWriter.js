import React, { Component } from 'react';

export default class TypeWriter extends Component {
  constructor() {
    super();
    this.state = {
      currentWord: ''
    }
  }

  componentDidMount() {
    this.setState({ currentWord: this.props.data[0] })  
  }

  render() {
    return (
      <span>
        {this.state.currentWord}
        <span>|</span>
      </span>
    );
  }
}
