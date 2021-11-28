import React from "react";
import { useDispatch } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import { toggleAdd } from "../JS/actions/edit";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active" end>
            Home
          </Link>
        </li>
        <li onClick={dispatch(toggleAdd())}>
          <Link to="/add" activeClassName="active">
            New
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
