import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class NavbarContainer extends Component {
  render() {
    return (
      <Navbar {...this.props} />
    );
  }
}

export default NavbarContainer;
