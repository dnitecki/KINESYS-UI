import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { menuItems, subMenu } from "./menuItems";
import KinesysIcon from "../../icons/KinesysIcon.svg";

export default function SideBar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-icon-container">
          <img className="sidebar-icon" src={KinesysIcon} alt="Kinesys Icon" />
        </div>
        <ul className="sidebar-list">
          {menuItems.map((item, index) => (
            <li className="sidebar-item" key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "sidebar-button-active" : "sidebar-button"
                }
                to={item.url}
              >
                <div className="sidebar-item-icon">
                  {<item.icon sx={{ fontSize: 30 }} />}
                </div>
                <div className="item-tooltip">{item.text}</div>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="sidebar-list sidebar-bottom">
          {subMenu.map((item, index) => (
            <li className="sidebar-item" key={index}>
              <NavLink className="sidebar-button" to={item.url}>
                <div className="sidebar-item-icon">
                  {<item.icon sx={{ fontSize: 30 }} />}
                </div>
                <div className="item-tooltip">{item.text}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
