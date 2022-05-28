import React from "react";
import "./Navbar.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="navbar__left">
        <Avatar src={require("./azulaLogo.png")} />
      </div> */}
      <div className="navbar__middle">
        {" "}
        <div className="navbar__option">
          {" "}
          <HomeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="navbar__option">
          {" "}
          <CalendarTodayIcon style={{ fontSize: 40 }} />
        </div>
        <div className="navbar__option">
          {" "}
          <ChatBubbleIcon style={{ fontSize: 40 }} />
        </div>
      </div>
      <div className="navbar__right">
        <MenuIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Navbar;
