import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid bg-dark">
        <div className="row py-4">
          <div className="col-12 col-lg-4 ">
            <ul className=" text-center text-white list-unstyled">
              <h4>Get In Touch</h4>

              <li>
                <p>If you are in this website Please Subscribe</p>
              </li>
              <li>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Email"
                />
              </li>

              <button className="footer-btn">Send</button>
            </ul>
          </div>
          <div className="col-12 col-lg-4 ">
            <ul className=" text-center text-white list-unstyled">
              <h4>Contact Us</h4>

              <li>
                <p>
                  <i class="fas fa-map-marker-alt"></i> Car House Limited,1st
                  floor,Lalbug ,Dhaka.
                </p>
                <p>
                  <i class="fas fa-tty"></i> 02847657
                </p>
                <p>
                  <i class="fas fa-phone-volume">0199999999</i>
                </p>

                <p>
                  <i class="fas fa-envelope-open"></i>carland@gamil.com
                </p>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-4 ">
            <ul className="Quick-Links text-center text-white list-unstyled">
              <h4>Quick Links</h4>
              <div className="d-flex justify-content-center link">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="services">Cars</Link>
                </li>
                <li>
                  <Link to="about">Explore</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </div>
            </ul>
            <p className="social">Social networks & feeds</p>
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
