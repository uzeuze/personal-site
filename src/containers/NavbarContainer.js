import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, logout } from '../actions';
import Navbar from '../components/Navbar';

class NavbarContainer extends Component {
  render() {
    return (
      <Navbar {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  const { isAuth } = state.auth;

  return {
    isAuth
  }
}

// Navbar link active is not working if pure is not set to false
// TODO: find an alternative solution and remove pure option
export default connect(mapStateToProps, { login, logout }, null, {
  pure: false
})(NavbarContainer);
