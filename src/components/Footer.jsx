import React from "react";

export default function Footer() {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Replacement</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Company Name</h3>
              <p>
                Redefine Your Style Statement With Trendy Apparel, Footwear,
                Accessories & More. Shoppable Looks From India's Top Influencers
                At Myntra Studio. Shop Now. Latest Trends. 3000+ Brands. 30 Days
                Return. 100% Original Brands. Photo Search. COD available.
              </p>
            </div>
            <br></br>
            <br></br>
            <div class="col item social">
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-snapchat"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <p class="copyright">Company Name © 2022</p>
        </div>
      </footer>
    </div>
  );
}
