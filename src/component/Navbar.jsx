import React, { useState } from "react";
import "../CSS/Navbar.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import logo from "../Asset/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShortTextIcon from "@mui/icons-material/ShortText";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  const [left, setleft] = useState(false);
  return (
    <div className="navbar_container">
      <div className="upper_navbar_contaiiner">
        <div className="upper_navbar_left_container">
          <select name="" id="" className="upper_navbar_container_dropdown">
            <option value="">Bangalore</option>
            <option value="">Pune</option>
            <option value="">Mangalore</option>
            <option value="">Mysore</option>
            <option value="">Mumbai</option>
            <option value="">Hydrabad</option>
          </select>
          <button className="upper_navbar_container_btn">GO</button>
        </div>
        <div className="upper_navbar_right_container">
          <div className="upper_navbar_right_container_contact">
            <div>
              <LocalPhoneIcon style={{ color: "gray", height: "15px" }} />{" "}
              18001211007
            </div>
            <div>
              <EmailOutlinedIcon style={{ color: "gray", height: "15px" }} />{" "}
              vishalshenoy603@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="lower_navbar_container">
        <div className="lower_navbar_container_logo">
          <img src={logo} alt="" />
          <div className="menu_icon" onClick={() => setleft(!left)}>
            <ShortTextIcon />
          </div>
        </div>
        <div
          className="lower_navbar_right_container"
          style={{ left: left ? "-5%" : "-100%" }}
        >
          <div>Home</div>
          <div>Greener Promise</div>
          <div>Shop Products</div>
          <div>Brands</div>
          <div>Water for Health</div>
          <div>Subscription</div>
          <div>Referral and Loyality</div>
          <div className="lower_navbar_contact">
            <LocalPhoneIcon style={{ color: "gray", height: "15px" }} />{" "}
            18001211007
          </div>
          <div className="lower_navbar_contact">
            <EmailOutlinedIcon style={{ color: "gray", height: "15px" }} />{" "}
            vishalshenoy603@gmail.com
          </div>
          <div className="navbar_icon_container">
            <div className="search">
              <SearchIcon style={{ color: "white", height: "20px" }} />
            </div>
            <div className="profile">
              <PermIdentityOutlinedIcon
                style={{ color: "white", height: "20px" }}
              />
            </div>
            <div className="cart">
              <ShoppingCartOutlinedIcon
                style={{ color: "white", height: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
