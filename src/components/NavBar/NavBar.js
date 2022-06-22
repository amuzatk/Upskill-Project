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
      <div className="logos">
        <img src={logo} alt="logo" width="107px" height="69px" />
      </div>

      <div className="menus-icon">
        <FaBars className="menus" onClick={handleClick} />
      </div>

      <nav className={click ? "slider active" : "slider"}>
        <ul>
          <div className="closed">
            <FaTimes className="close" onClick={handleClick} />
          </div>

          <li>
            <Link to="/">Categories</Link>{" "}
          </li>
          <li>
            <Link to="/past-editions">Past editions</Link>{" "}
          </li>

          <li>
            <Link
              to="/future-editions"
              //   style={{ textDecoration: "none", color: "#3e0563" }}
            >
              Future editions
            </Link>{" "}
          </li>

          <li>
            <Link
              to="/about"
              //   style={{ textDecoration: "none", color: "#3e0563" }}
            >
              About Us
            </Link>{" "}
          </li>

          <li>
            <Link
              to="/donations"
              //   style={{ textDecoration: "none", color: "#3e0563" }}
            >
              Make a donation
            </Link>{" "}
          </li>

          <li className="green">
            <Link
              to="/login"
              //   style={{ textDecoration: "none", color: "#3e0563" }}
            >
              LogIn
            </Link>{" "}
          </li>

          <li>
            <Link
              to="/sign-up"
              //   style={{ textDecoration: "none", color: "#3e0563" }}
            >
              SignUp
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>

    // <div className="navbar">
    //   <div className="logos">
    //     <img src={logo} alt="logo" width="107px" height="69px" />
    //   </div>
    //   <ul className={click ? "nav-menu active" : "nav-menu"}>
    //     <li className="nav-item">
    //       <Link to="/" style={{ textDecoration: "none", color: "#3e0563" }}>
    //         Categories
    //       </Link>{" "}
    //     </li>
    //     <li className="nav-item">
    //       <Link
    //         to="/past-editions"
    //         style={{ textDecoration: "none", color: "#3e0563" }}
    //       >
    //         Past editions
    //       </Link>{" "}
    //     </li>

    //     <li className="nav-item">
    //       <Link
    //         to="/future-editions"
    //         style={{ textDecoration: "none", color: "#3e0563" }}
    //       >
    //         Future editions
    //       </Link>{" "}
    //     </li>

    //     <li className="nav-item">
    //       <Link
    //         to="/about"
    //         style={{ textDecoration: "none", color: "#3e0563" }}
    //       >
    //         About Us
    //       </Link>{" "}
    //     </li>

    //     <li className="nav-item">
    //       <Link
    //         to="/donations"
    //         style={{ textDecoration: "none", color: "#3e0563" }}
    //       >
    //         Make a donation
    //       </Link>{" "}
    //     </li>

    //     <li className="nav-item">
    //       <Link
    //         to="/login"
    //         style={{ textDecoration: "none", color: "#3e0563" }}
    //       >
    //         LogIn
    //       </Link>{" "}
    //     </li>

    //     <li className="nav-item">
    //       <Link
    //         to="/sign-up"
    //         style={{ textDecoration: "none", color: "#3e0563" }}
    //       >
    //         SignUp
    //       </Link>{" "}
    //     </li>
    //   </ul>
    //   <div className="hamburger" onClick={handleClick}>
    //     {click ? <FaTimes size={45} /> : <FaBars size={45} />}
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
