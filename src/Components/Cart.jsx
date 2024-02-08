import React, { useState, useEffect } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Cart = ({ cart, setter }) => {
  let [count, setCount] = useState([]);

  useEffect(() => {
    let savecart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(savecart);
    setter(savecart);
  }, [setter]);

  let increment = (a) => {
    let updatevalues = count.map((item) => {
      if (item.id === a) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatevalues));
    setCount(updatevalues);
    setter(updatevalues);
  };

  let decrement = (a) => {
    let updatevalues = count.map((item) => {
      if (item.id === a && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatevalues));
    setCount(updatevalues);
    setter(updatevalues);
  };

  let allitemtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <section className="cart-part container">
        {cart.map((item) => (
          <div className="row mt-5" key={item.id}>
            <div className="col-md-2 col-lg-2 col-sm-12">
              <img
                src={item.image}
                alt="cart-img"
                width="100%"
                height="200px"
              />
            </div>

            <div className="col-md-10 col-lg-10 col-sm-12">
              <div className="item-details">
                <h5>{item.fullname}</h5>
                <h5>Price:- ₹{item.price}/- Only❣</h5>
                <h5>Variant:- {item.storage}</h5>

                <h5 className="d-flex align-items-center">
                  Quantity:-
                  <RemoveCircleOutlineIcon
                    onClick={() => decrement(item.id)}
                    fontSize="small"
                    className="me-2"
                  />
                  {item.quantity}
                  <ControlPointIcon
                    onClick={() => increment(item.id)}
                    fontSize="small"
                    className="ms-2"
                  />
                </h5>

                <h4>Total:- ₹{item.price * item.quantity}</h4>

                <button className="btn btn-outline-danger rounded-pill">
                  Remove item
                </button>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <h3 className="text-end">Total Amount: ₹{allitemtotal}</h3>
      </section>
    </>
  );
};

export default Cart;
