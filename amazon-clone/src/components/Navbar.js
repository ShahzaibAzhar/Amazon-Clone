import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Navbar() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img
            className="navbar__logo"
            src="https://th.bing.com/th/id/R6b35955d07ed7c5e28ad0e6452699845?rik=1uh9eaX77Y6Dmw&pid=ImgRaw"
          ></img>
        </Link>
      </div>
      <div className="navbar__search">
        <input className="navbar__searchinput" type="text" />
        {/* <button className="navbar__searchbtn"> */}
        <SearchIcon className="navbar__searchicon" />
        {/* </button> */}
      </div>
      <div className="navbar__right">
        <Link className="navbar__login__link" to="/login">
          <div className="navbar__accounts">
            <span>Hello, Guest</span>
            <h3>Sign In</h3>
          </div>
        </Link>
        <div className="navbar__orders">
          <span>Returns</span>
          <h3>& Orders</h3>
        </div>
        <Link className="navbar__cart__link" to="/cart">
          <div className="navbar__cart">
            <ShoppingCartOutlinedIcon className="navbar__cart__icon" />
            <div className="navbar__cart__icon__count">
              <span className="navbar__order__count">{basket?.length}</span>
              <span className="navbar__cart__name">Cart</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
