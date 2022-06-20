import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./NavBar.css";
import logo from "../assets/logos/Frame 37.png";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" width="107px" height="60px" />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" style={{ textDecoration: "none", color: "red" }}>
            Categories
          </Link>{" "}
        </li>
        <li className="nav-item">
          <Link
            to="/past-editions"
            style={{ textDecoration: "none", color: "red" }}
          >
            Past editions
          </Link>{" "}
        </li>

        <li className="nav-item">
          <Link
            to="/future-editions"
            style={{ textDecoration: "none", color: "red" }}
          >
            Future editions
          </Link>{" "}
        </li>

        <li className="nav-item">
          <Link to="/about" style={{ textDecoration: "none", color: "red" }}>
            About Us
          </Link>{" "}
        </li>

        <li className="nav-item">
          <Link
            to="/donations"
            style={{ textDecoration: "none", color: "red" }}
          >
            Make a donation
          </Link>{" "}
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "blue" }} />
        ) : (
          <FaBars size={30} style={{ color: "blue" }} />
        )}
      </div>
    </div>

    // <div className="navbar">
    //   <div className="logos">
    //     <img src={logo} alt="logo" width="107px" height="60px" />
    //   </div>

    //   <ul className={click ? "nav-menu active" : "nav-menu"}>
    //     <li className="nav-item">
    //       <a
    //         href="/"
    //         style={{
    //           textDecoration: "none",
    //           color: "#0c0114 ",
    //           fontSize: "19px",
    //           fontFamily: "sans-serif",
    //         }}
    //       >
    //         Categories
    //       </a>{" "}
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="/past-editions"
    //         style={{
    //           textDecoration: "none",
    //           color: "#0c0114 ",
    //           fontSize: "19px",
    //           fontFamily: "sans-serif",
    //         }}
    //       >
    //         Past editions
    //       </a>{" "}
    //     </li>

    //     <li className="nav-item">
    //       <a
    //         href="/future-editions"
    //         style={{
    //           textDecoration: "none",
    //           color: "#0c0114 ",
    //           fontSize: "19px",

    //           fontFamily: "sans-serif",
    //         }}
    //       >
    //         Future editions
    //       </a>{" "}
    //     </li>

    //     <li className="nav-item">
    //       <a
    //         href="/about-us"
    //         style={{
    //           textDecoration: "none",
    //           color: "#0c0114 ",
    //           fontSize: "19px",
    //           fontFamily: "sans-serif",
    //         }}
    //       >
    //         About us
    //       </a>{" "}
    //     </li>

    //     <li className="nav-item">
    //       <a
    //         href="/donations"
    //         style={{
    //           textDecoration: "none",
    //           color: "#0c0114 ",
    //           fontSize: "18px",
    //           fontFamily: "sans-serif",
    //         }}
    //       >
    //         Make a donation
    //       </a>
    //     </li>
    //   </ul>

    //   <div className="hamburger" onClick={handleClick}>
    //     {click ? (
    //       <FaTimes size={30} style={{ color: "#fff" }} />
    //     ) : (
    //       <FaBars size={30} style={{ color: "#fff" }} />
    //     )}
    //   </div>

    //   <div>
    //     <button className="login">Log In</button>
    //   </div>

    //   <div>
    //     <button className="sign-up">Create Account</button>
    //   </div>
    // </div>
  );
}
