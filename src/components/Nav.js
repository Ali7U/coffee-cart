import React from "react";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

function Nav(props) {
const {countCart} = props

  return (
    <nav>
      <div className="icon">
        <h2> بيت القهوة {<FiCoffee />}</h2>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to={"/"}>الصفحة الرئيسية</Link>
          </li>
          <li>
            <Link to={"/cart"}>سلة التسوق
            {countCart.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
