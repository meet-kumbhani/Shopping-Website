import React from "react";
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="mx-2">
        Navbar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="container-fluid">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/product">Link</Nav.Link>
          <Nav.Link href="#">Disabled</Nav.Link>
        </Nav>
        <Link to="/cart">
          <AddShoppingCartIcon />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
