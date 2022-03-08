import React from "react";
import "./Navbarmini.css";
import MenuIcon from "@material-ui/icons/Menu";

function NavbarMini() {
  return (
    <div className="navbarmini">
      <div className="navbarmini__menu">
        <li className="navbarmini__list0">
          <div className="navbarmini__icon">
            <a href="#">
              <MenuIcon />
            </a>
          </div>
          <div className="navbarmini__iconname">All</div>
        </li>
        <li className="navbarmini__list1">
          <a href="#">Today's Deals</a>
        </li>
        <li className="navbarmini__list2">
          <a href="#">Buy Again</a>
        </li>
        <li className="navbarmini__list3">
          <a href="#">Customer Service</a>
        </li>
        <li className="navbarmini__list4">
          <a href="#">Browsing History</a>
        </li>
        <li className="navbarmini__list5">
          <a href="#">Shahzaib's Amazon.com</a>
        </li>
        <li className="navbarmini__list6">
          <a href="#">Registry</a>
        </li>
        <li className="navbarmini__list7">
          <a href="#">Gift Cards</a>
        </li>
        <li className="navbarmini__list8">
          <a href="#">Sell</a>
        </li>
      </div>
    </div>
  );
}

export default NavbarMini;
