import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Black from "../Images/NavbarLogo.svg";

function Navbar() {
  return (
    <div className="parentNav">
      <nav class="navbar navbar-expand-lg navbar-dark  container  ">


        <div class="container-fluid ">
          <Link to="" class="navbar-brand logo ">
            <img src={Black} />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">

            
            <ul class="navbar-nav  ">
              <li class="nav-item ">
                <Link to="" class="nav-link active">
                  {" "}
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Services" class="nav-link">
                  {" "}
                  Services
                </Link>
              </li>

              <li class="nav-item">
                <Link to="" class="nav-link">
                  {" "}
                  About us
                </Link>
              </li>

              <li class="nav-item">
                <Link to="" class="nav-link">
                  {" "}
                  Support
                </Link>
              </li>
            </ul>


          </div>
        </div>


        <div className="Navbutton">
              <button type="button" class="  NavText d-none d-lg-block">
             Contact
              </button>
            </div>
      </nav>

    </div>
  );
}

export default Navbar;
