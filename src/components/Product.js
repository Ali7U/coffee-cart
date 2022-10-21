import React from "react";

function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="coffee">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.cName}</h3>
      <div>{product.price} ريال سعودي</div>
      <div>
        <button onClick={() => onAdd(product)}>اضف للسلة</button>
      </div>
    </div>
  );
}

export default Product;
