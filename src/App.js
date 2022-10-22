import React, { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import data from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const { products } = data;
  const [cartItem, setCartItem] = useState([]);

  const onAdd = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const onRem = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav countCart={cartItem} />

        <Routes>
          <Route
            path="/cart"
            element={<Cart cartItem={cartItem} onAdd={onAdd} onRem={onRem} />}
          />
          <Route
            path="/"
            element={<Main products={products} onAdd={onAdd} onRem={onRem} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Nav /> */}
      {/* <Main  /> */}
    </div>
  );
}

export default App;
