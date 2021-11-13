import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid bg-dark">
        <div className="row py-4">
          <div className="col-12 col-lg-6 ">
            <ul className=" text-center text-white list-unstyled">
              <h4>Get In Touch</h4>

              <li>
                <p>If you are in this webside Please Subscribe</p>
              </li>
              <li>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Email"
                />
              </li>
              <li className="btn service-butthon mt-2">Submit</li>
            </ul>
          </div>

          <div className="col-12 col-lg-6 ">
            <ul className="Quick-Links text-center text-white list-unstyled">
              <h4>Quick Links</h4>
              <div className="d-flex justify-content-center link">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="services">Services</Link>
                </li>
                <li>
                  <Link to="about">About Us</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </div>
            </ul>
            <div className="icon">
              <a href="https://www.facebook.com/">
                {" "}
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="https://www.whatsapp.com/">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
