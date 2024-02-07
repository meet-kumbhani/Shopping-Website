import React, { useState, useEffect } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Cart = ({ cart }) => {
  let [count, setCount] = useState(cart.map(() => 1));

  let increment = (index) => {
    let updatedcount = [...count];
    updatedcount[index]++;
    setCount(updatedcount);
  };

  let decrement = (index) => {
    if (count[index] > 0) {
      let updatedcount = [...count];
      updatedcount[index]--;
      setCount(updatedcount);
    }
  };

  let allitemtotal = cart.reduce((total, item, index) => {
    return total + item.price * count[index];
  }, 0);

  localStorage.setItem("cart", JSON.stringify(cart));

  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("cart"));
    console.log(a);
  });

  return (
    <>
      <section className="cart-part container">
        {cart.map((item, index) => (
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
                    onClick={() => decrement(index)}
                    fontSize="small"
                    className="me-2"
                  />
                  {count[index]}
                  <ControlPointIcon
                    onClick={() => increment(index)}
                    fontSize="small"
                    className="ms-2"
                  />
                </h5>

                <h4>Total:- ₹{item.price * count[index]}</h4>

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
