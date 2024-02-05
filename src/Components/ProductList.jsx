import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FormControl, Form, Pagination } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import phoneData from "../phonedata.json";
import { Link } from "react-router-dom";

let ProductList = () => {
  const [phones, setPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [search, setSearch] = useState("");
  const [ramfilter, setRamfilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsperpage = 4;

  useEffect(() => {
    setPhones(phoneData.phones);
    setFilteredPhones(phoneData.phones);
  }, []);

  let handleSearch = () => {
    let filterphones = phones.filter((phone) => {
      let phonename = phone.name.toLowerCase().includes(search.toLowerCase());
      let phoneramfilter = ramfilter === "All" || phone.ram === ramfilter;
      return phoneramfilter && phonename;
    });
    setFilteredPhones(filterphones);
    setCurrentPage(1);
  };

  if (filteredPhones.length === 0) {
    return (
      <center className="page_404 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    );
  }

  const indexOfLastPhone = currentPage * itemsperpage;
  const indexOfFirstPhone = indexOfLastPhone - itemsperpage;
  const currentPhones = filteredPhones.slice(
    indexOfFirstPhone,
    indexOfLastPhone
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="py-3 d-flex justify-content-between align-items-center count-search">
          <h3 className="text-white">
            Showing {indexOfFirstPhone + 1} to{" "}
            {Math.min(indexOfLastPhone, filteredPhones.length)} of{" "}
            {filteredPhones.length} Results For "Phone"
          </h3>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Form.Select
              className="me-2"
              value={ramfilter}
              onChange={(e) => setRamfilter(e.target.value)}
            >
              <option value="All">All RAM</option>
              <option value="2GB">2GB</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              <option value="8GB">8GB</option>
            </Form.Select>
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </div>

        <div className="row">
          {currentPhones.map((phone) => (
            <div className="col-md-4 col-lg-3 col-sm-6 mb-4" key={phone.id}>
              <Link
                to={`/productdetails/${phone.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card className="w-100 h-100">
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
                      <h3>Price: ₹{phone.price}</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagiation */}

        <div className="d-flex justify-content-center">
          <Pagination>
            {Array.from({
              length: Math.ceil(filteredPhones.length / itemsperpage),
            }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default ProductList;
