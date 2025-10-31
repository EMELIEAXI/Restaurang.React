import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

import "../Styling/Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Hem", icon: <HomeIcon /> },
    { text: "Om", icon: <InfoIcon /> },
    { text: "Tjänster", icon: <RoomServiceIcon /> },
    { text: "Kontakt", icon: <PhoneRoundedIcon /> },
    { text: "Referenser", icon: <CommentRoundedIcon /> },
  ];

  return (
    <nav id="navbar">
      <div className="nav-logo-container">
        <a href="#home"><img src={Logo} alt="Restaurang Logo" /></a>
      </div>

      <div className="navbar-links-container">
        <a href="#about">Om</a>
        <a href="#services">Tjänster</a>
        <a href="#kontakt">Kontakt</a>
        <a href="#testimonials">Referenser</a>
        <button className="primary-button">Boka nu</button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;