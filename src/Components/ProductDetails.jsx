import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import phoneData from "../phonedata.json";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

let ProductDetails = ({ addToCart }) => {
  const [addcart, setaddcart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  let { id } = useParams();
  let phoneDetails = phoneData.phones.find((phone) => phone.id === id);

  useEffect(() => {
    let exist = JSON.parse(localStorage.getItem("cart")) || [];
    let foundItem = exist.find((item) => item.id === phoneDetails.id);
    if (foundItem) {
      setaddcart(true);
      setQuantity(foundItem.quantity);
    }
  }, [phoneDetails.id]);

  if (!phoneDetails) {
    return (
      <img
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt=""
      />
    );
  }

  let handleAddToCart = () => {
    if (!addcart) {
      addToCart({ ...phoneDetails, quantity });
      setaddcart(true);
      let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      let updatedCart = [...existingCart, { ...phoneDetails, quantity }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  let increse = () => {
    setQuantity(quantity + 1);
    updatelocalstorage(quantity + 1);
  };

  let decrese = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updatelocalstorage(quantity - 1);
    }
  };

  let updatelocalstorage = (updatedQuantity) => {
    let existdata = JSON.parse(localStorage.getItem("cart")) || [];
    let updatedcartdata = existdata.map((item) => {
      if (item.id === phoneDetails.id) {
        return { ...item, quantity: updatedQuantity };
      } else {
        return item;
      }
    });
    localStorage.setItem("cart", JSON.stringify(updatedcartdata));
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
                {!addcart ? (
                  <>
                    <button className="buynow-btn me-2">Buy Now</button>
                    <button className="cart-btn" onClick={handleAddToCart}>
                      Add To Cart
                    </button>
                  </>
                ) : (
                  <>
                    <button className="buynow-btn me-2">Buy Now</button>
                    <h6>
                      Quantity:-
                      <RemoveCircleOutlineIcon
                        fontSize="small"
                        className="me-2 ms-2"
                        onClick={decrese}
                      />
                      {quantity}
                      <ControlPointIcon
                        fontSize="small"
                        className="ms-2"
                        onClick={increse}
                      />
                    </h6>
                  </>
                )}
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
