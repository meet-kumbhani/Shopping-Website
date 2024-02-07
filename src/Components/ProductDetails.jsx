import React, { useState } from "react";
import { useParams } from "react-router-dom";
import phoneData from "../phonedata.json";

let ProductDetails = ({ addToCart }) => {
  const [addcart, setaddcart] = useState(false);

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

  const handleAddToCart = () => {
    if (!addcart) {
      addToCart(phoneDetails);
      setaddcart(true);
      // let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      // let updatedCart = [...existingCart, phoneDetails];
      // localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

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
                <button className="cart-btn" onClick={handleAddToCart}>
                  Add To cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12">
            <div className="discription-part">
              <h2>{phoneDetails.fullname}</h2>
              <h5>Model: {phoneDetails.model}</h5>
              <h5>{phoneDetails.review}</h5>
              <h5>Price: ₹{phoneDetails.price} 10% Off</h5>
              <h5>PackingFee: ₹{phoneDetails.packaging_fee}</h5>

              <h2 className="mt-5">Offers</h2>

              <h5>{phoneDetails.offers}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
