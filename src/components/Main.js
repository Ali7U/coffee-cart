import React from "react";
import Product from "./Product";

function Main(props) {
  const { products, onAdd, onRem } = props;
  return (
    <main>
      <h2>جميع انواع القهوة</h2>
      <div className="products">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            onAdd={onAdd}
            onRem={onRem}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
