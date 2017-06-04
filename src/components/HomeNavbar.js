import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeNavbar extends Component {
  render() {
    return (
      <div className="HomeNavbar">
        <div className="HomeNavbar__Brand">
          <Link to="/">UZE</Link>
        </div>
        <a
          className="HomeNavbar__AboutButton"
          onClick={() => {
            this.props.onAboutClick();
          }}>
            ABOUT
        </a>
      </div>
    );
  }
}

export default HomeNavbar;
