import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = ({ cartlength }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-2">
      <Navbar.Brand to="/">
        <img
          alt="logo"
          src="/rk.png"
          width="30"
          height="30"
          className="d-inline-block align-top rounded-circle"
        />{" "}
        RK Collection
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link active">
            Product List
          </Link>
        </Nav>
        <Link to="/cart" className="nav-link">
          <span className="position-absolute translate-middle badge rounded-pill bg-danger">
            {cartlength.length}
          </span>
          <AddShoppingCartIcon /> Cart
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
