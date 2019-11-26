import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Cart from './Cart'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

import './Header.css'
// Return Header Component to main Layout
export const Header = props => {
  return (
    <Navbar bg="light" fixed="top" variant="dark">
    <Link className="navbar-brand" to={`/`}><img src={Logo} width="200px"/></Link>
  <Nav className="mr-auto">
    <Link to={`/`} className="nav-link">Home</Link>
  </Nav>
  <Cart />
</Navbar>
  );
};
