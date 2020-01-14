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
  <Navbar.Brand href="/">flavor</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/">Cuisines</Link>
     
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      </React.Fragment>
    );
  }
}
 
export default NavBar;