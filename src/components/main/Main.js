import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Main.css";
const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //=====================
  // get the product data
  //====================
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //===============
  // error message
  //===============
  const error = document.createElement("h3");
  const getErrorMessage = (msg) => {
    error.classList = "error";
    const main = document.getElementById("main");
    error.innerText = msg;
    main.appendChild(error);
    setTimeout(restError, 3000);
  };
  const restError = () => {
    error.style.display = "none";
  };

  // =========================
  // cart button handler
  // ===========================
  let productId = [];
  const getButtonHandler = (data) => {
    const find = products.find((product) => product.id === data.id);
    const addedProduct = cart.filter((product) => product.id === find.id);
    if (addedProduct.length >= 1) {
      getErrorMessage("This Item Already Exists!");
    } else if (cart.length < 4) {
      productId = [...cart, find];
      setCart(productId);
    }
  };
  //=====================
  // empty the cart item
  //=====================
  const emptyCart = () => {
    const arr = [];
    setCart(arr);
  };
  //===========================
  // generate the random number
  //===========================
  const number = () => {
    const rr = Math.floor(Math.random() * 4);
    return rr;
  };
  //========================
  // randomly button showing
  //========================
  const RandomNumber = () => {
    if (cart.length > 3) {
      const randomItem = cart.findIndex(number);
      const findCart = cart[randomItem];
      const newCart = [findCart];
      setCart(newCart);
    } else {
      getErrorMessage("please Select the four items!");
    }
  };
  //================
  // delete item
  //===============
  const deleteItem = (data) => {
    const removeProduct = cart.filter((product) => product.id !== data.id);
    setCart(removeProduct);
  };
  //===============
  // dom render part
  //===============
  return (
    <div id="main" className="main">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} data={product} btn={getButtonHandler} />
        ))}
        <div className="ask-answer">
          <h2>How React Works?</h2>
          <hr />
          <p>
            <b>Answer:</b>
            React is an open source. His whole dome doesn't change him when the
            react works There is change in his dome, only there change. React
            compares the previous DOM to my DOM and if there is a change, he
            just updates the change and does not change anything else.
          </p>
          <h2>How usestate works?</h2>
          <hr />
          <p>
            <b>Answer:</b>
            React always focuses on the state. Any update on its state is
            actually rendered by the DOM to change its UI. React always compares
            its UI with the current state from its previous state. If there is
            any update in the current state then it changes its UI immediately.
          </p>
        </div>
      </div>

      <div className="cart-container">
        <h3>Selected Clothes</h3>
        {cart.map((product) => (
          <Cart data={product} key={product.id} remove={deleteItem} />
        ))}
        <div className="carts-btn">
          <button onClick={RandomNumber} className="choose-btn">
            Choose 1 For Me
          </button>
          <button onClick={emptyCart} className="choose-again">
            Choose Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
