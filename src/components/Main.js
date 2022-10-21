import React from "react";
import Product from "./Product";

function Main(props) {
  const { products, onAdd } = props;
  return (
    <main>
      <h2>جميع انواع القهوة</h2>
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.id} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}

export default Main;
