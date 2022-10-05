import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import Auth from "../../utils/auth";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const navStyle = {
  color: "#66ccff",
};

const imgStyle = {
  height: "40px",
  width: "40px",
};

const activeLink = {
  fontWeight: "bold",
};

const barStyle = {
  width: "100%",
  padding: "15px",
};

function Navigation(props) {
  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <a className="navbar-brand" style={navStyle} href="/"> Eat-And-Go </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about" style={navStyle}>Welcome</Nav.Link>
                <Nav.Link href="/resturants" style={navStyle}>Resturants</Nav.Link>
                <Nav.Link href="/posts" style={navStyle}>Discussion</Nav.Link>
                <a href="/" className="nav-link" onClick={() => Auth.logout()} style={navStyle}>Logout</a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

    } else {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <a className="navbar-brand" style={navStyle} href="/">  Eat-And-Go </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about" style={navStyle}>Welcome</Nav.Link>
                <Nav.Link href="/resturants" style={navStyle}>Resturants</Nav.Link>
                <Nav.Link href="/posts" style={navStyle}>Discussion</Nav.Link>
                <Nav.Link href="/signup" style={navStyle}>Signup</Nav.Link>
                <Nav.Link href="/login" style={navStyle}>Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark"
      style={barStyle}
    >
      <div className="navbar-nav">{showNav()}</div>
    </nav>
  );
}

export default Navigation;
