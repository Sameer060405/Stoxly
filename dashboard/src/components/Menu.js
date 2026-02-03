import React , {useState} from "react";

import {Link} from "react-router-dom";
import { useUser } from "./UserContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen ] = useState(false);
  const { user, initials, loading } = useUser();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Get display name - use user's name if available, otherwise fallback
  const displayName = user?.name || "USERID";
  const displayInitials = initials || "U";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li><Link style = {{textDecoration: "none"}} to = "/" onClick = {()=> handleMenuClick(0)}><p className= {selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p></Link></li>
          <li><Link style = {{textDecoration: "none"}} to = "/orders" onClick = {()=> handleMenuClick(1)}><p className= {selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p></Link></li>
          <li><Link style = {{textDecoration: "none"}} to = "/holdings" onClick = {()=> handleMenuClick(2)}><p className= {selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p></Link></li>
          <li><Link style = {{textDecoration: "none"}} to = "/positions" onClick = {()=> handleMenuClick(3)}><p className= {selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p></Link></li>
          <li><Link style = {{textDecoration: "none"}} to = "/funds" onClick = {()=> handleMenuClick(4)}><p className= {selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p></Link></li>
          <li><Link style = {{textDecoration: "none"}} to = "/apps" onClick = {()=> handleMenuClick(5)}><p className= {selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p></Link></li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{displayInitials}</div>
          <p className="username">{displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
