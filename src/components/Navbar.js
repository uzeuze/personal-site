import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar
        className="Navbar"
        collapseOnSelect
        fluid
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer className="Navbar__Link" to="/settings">
              <NavItem>Settings</NavItem>
            </LinkContainer>
            <LinkContainer className="Navbar__Link" to="/profile">
              <NavItem>Profile</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
