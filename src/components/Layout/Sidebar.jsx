import React from "react";
import "../../css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".sidebar-items");
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navItems.forEach((navItem) => {
          navItem.classList.remove("selected");
        });
        item.classList.add("selected");
      });
    });
  });
  return (
    <>
      <div className="sidebar-main">
        <div className="avatar-main">
          <img src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg" />
          <a>Hi Admin!</a>
        </div>
        <div className="side-items">
            <div className="sidebar-items dashboard-btn">
            <FontAwesomeIcon icon={faUser} />
                <a href="/" className="side-links">DashBoard</a>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <a href="/listings" className="side-links">Listings</a>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <a href="/orders" className="side-links">Orders</a>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <a href="/transactions" className="side-links">Transactions</a>
            </div>
            {/* <a className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <a href="/support" className="side-links">Customer Support</a>
            </a> */}
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <a href="/manageall" className="side-links">Manage Listings</a>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <a href="/blogs" className="side-links">Blogs</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
