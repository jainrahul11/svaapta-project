import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
    
      <NavLink activeClassName="active" to="/customer">
        customer
      </NavLink>
      <NavLink activeClassName="active" to="/ContactForm">
        ContactForm
      </NavLink>
    </nav>
  );
}
export default Header;