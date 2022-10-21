import React from "react";

function Cart(props) {
  const { cartItem, onAdd } = props;
  const itemPrice = cartItem.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  const taxPrice = itemPrice * 0.15;
  const totalPrice = itemPrice + taxPrice;

  return (
    <div className="cart">
      <h2>سلة التسوق</h2>
      <hr />
      <div>{cartItem.length === 0 && <div>سلة التسوق فارغة</div>}</div>

      {cartItem.map((item) => (
        <div className="block">
          <div className="col-2">{item.cName}</div>
          <div className="col-2">
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
            {item.qty}
            <button className="rem">-</button>
            {item.price.toFixed(2)}
          </div>
        </div>
      ))}

      {cartItem.length !== 0 && (
        <>
        <hr/>
          <div className="block">
            <div className="col-2">السعر</div>
            <div className="col-2 text-tight">{itemPrice.toFixed(2)}</div>
          </div>
          <div className="block">
            <div className="col-2"> الضريبة </div>
            <div className="col-2 text-tight">{taxPrice.toFixed(2)}</div>
          </div>
          <div className="block">
            <div className="col-2">السعر الإجمالي</div>
            <div className="col-2 text-tight">{totalPrice.toFixed(2)}</div>
          </div>
          <div>
            <button className="lastButton" onClick={()=> alert('request is done')}>اتمم طلبك الان</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
