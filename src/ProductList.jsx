import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FormControl, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import phoneData from "./phonedata.json";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [phones, setPhones] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPhones(phoneData.phones);
  }, []);

  const handleSearch = () => {
    const filteredPhones = phoneData.phones.filter((phone) =>
      phone.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPhones(filteredPhones);
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="mt-3 d-flex justify-content-between">
          <h3>Showing 1- 28 of 150 Results For "Phone"</h3>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-primary" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </div>
        <Link
          to="/productdetails"
          className="row"
          style={{ textDecoration: "none" }}
        >
          {phones.map((phone) => (
            <div className="col-3" key={phone.id}>
              <Card className="mt-4 w-100">
                <Card.Img
                  variant="top"
                  src={phone.image}
                  width="100%"
                  height="350px"
                  className="p-1"
                />
                <Card.Body>
                  <Card.Title>
                    <p>{phone.name}</p>
                    <p>{phone.model}</p>
                    <p>{phone.ram}</p>
                  </Card.Title>
                  <Card.Text>
                    <h3>Price:- ₹{phone.price}</h3>
                  </Card.Text>
                  <Button variant="outline-primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Link>
      </div>

      {/* {phones.map((phone) => (
          <li key={phone.id}>
            <img src={phone.image} alt={phone.model} />
            <p>
              {phone.brand} {phone.model}
            </p>
            <p>{phone.description}</p>
            <p>${phone.price}</p>
          </li>
        ))} */}
      {/* </div> */}
    </>
  );
};

export default ProductList;
