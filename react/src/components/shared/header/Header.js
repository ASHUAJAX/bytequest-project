import React from "react";
import "./header.css";
import brandImage from "../../../images/navicon.png";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";


function Header() {
  return (
      <>
    <div style={{ paddingBottom: "10px", backgroundColor: "#f1efef    " }}>
      <div className="header">
        <div className="header-inner-div">
          <span>
            <EmailIcon style={{ marginRight: "7px" }} />
            info@byteQuests.com
          </span>{" "}
          <span>
            <CallIcon style={{ transform: "rotateY(180deg)" }} />
            +91 9711999770 , +1833-880-3355
          </span>{" "}
        </div>
      </div>

      {/* //navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={brandImage} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto navbar-ul-parent">
            <li className="nav-item ">
              <a className="nav-link active-nav" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 ">
            <button
              className="btn  my-2 my-sm-0 nav-btn"
              type="submit"
            >
              Contact Us
            </button>
          </form>
        </div>
      </nav>

    
    </div>

 

    </>
  );
}

export default Header;
