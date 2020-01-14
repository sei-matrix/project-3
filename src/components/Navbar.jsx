import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form  from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button  from "react-bootstrap/Button";
import Navbar  from "react-bootstrap/Navbar";
import Nav  from "react-bootstrap/Nav";
import {Link} from 'react-router-dom'
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">delish</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/">Cuisines</Link>
      <Link to="/link"> </Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      </React.Fragment>
    );
  }
}
 
export default NavBar;