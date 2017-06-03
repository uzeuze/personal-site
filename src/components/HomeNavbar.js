import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

class HomeNavbar extends Component {
  render() {
    return (
      <div className="HomeNavbar">
        <Navbar
          className="HomeNavbar__Navbar"
          collapseOnSelect
          fluid
        >
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">UZE</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem
              className="HomeNavbar__AboutButton"
              onClick={() => {
                this.props.onAboutClick();
              }}
            >
              ABOUT
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default HomeNavbar;
