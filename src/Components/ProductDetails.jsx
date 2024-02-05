import React from "react";
import { useParams } from "react-router-dom";
import phoneData from "../phonedata.json";

let ProductDetails = () => {
  let { id } = useParams();

  let phoneDetails = phoneData.phones.find((phone) => phone.id === id);

  if (!phoneDetails) {
    return (
      <img
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt=""
      />
    );
  }

  return (
    <>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-sm-12">
            <div className="image-part">
              <img
                src={phoneDetails.image}
                alt=""
                width={"70%"}
                height={"550px"}
              />

              <div className="buttons d-flex mt-4">
                <button className="buynow-btn me-2">Buy Now</button>
                <button className="cart-btn">Add To cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12">
            <div className="discription-part">
              <h2>{phoneDetails.fullname}</h2>
              <h5>Model: {phoneDetails.model}</h5>
              <h5>{phoneDetails.review}</h5>
              <h5>Price: ₹{phoneDetails.fullprice}</h5>
              <h5>PackingFee: ₹{phoneDetails.packaging_fee}</h5>

              <h3 className="mt-5">Offers</h3>

              <h5>{phoneDetails.offers}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
