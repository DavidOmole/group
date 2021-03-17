import React from "react";

import "./header.styles.scss";
import notifications from "../../assets/notifications.svg";
import search from "../../assets/notifications.svg";
// import Searchbar from "../searchbar/searchbar.component";
import chat from "../../assets/chat_bubble.svg";
import SearchBar from "../searchbar/searchbar.component";

const Header = () => (
  <header className="header">
    <div className="header__left">
      <SearchBar />
      <a href="/#" className="header__link">
        Find Network
      </a>
      <a href="/#" className="header__link">
        Resources
      </a>
      <a href="/#" className="header__link">
        Privacy Policy
      </a>
    </div>

    <div className="header__right">
      <img src={chat} alt="" className="header-item header__notifications" />
      <img src={notifications} alt="" className="header__notifications" />
    </div>
    {/* <Searchbar /> */}
  </header>
);

export default Header;
