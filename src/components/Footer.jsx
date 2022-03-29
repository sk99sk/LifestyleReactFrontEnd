import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link to="#">Business</Link>
                </li>
                <li>
                  <Link to="#">Replacement</Link>
                </li>
                <li>
                  <Link to="#">Support</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="#">Company</Link>
                </li>
                <li>
                  <Link to="#">Team</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Company Name</h3>
              <p>
                Redefine Your Style Statement With Trendy Apparel, Footwear,
                Accessories & More. Shoppable Looks From India's Top Influencers
                At LifeStyle Studio. Shop Now. Latest Trends. 3000+ Brands. 30 Days
                Return. 100% Original Brands. Photo Search. COD available.
              </p>
            </div>
            <br></br>
            <br></br>
            <div className="col item social">
              <Link to="#">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-snapchat"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
          </div>
          <p className="copyright">LifeStyle © 2022</p>
        </div>
      </footer>
    </div>
  );
}
