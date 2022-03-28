import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="section-footer border-top">
        <div className="container">
          <section className="footer-bottom border-top row">
            <div className="col-md-2">
              <p className="text-muted">LifeStyle.com </p>
            </div>
            <div className="col-md-2">
              <a href="http://localhost:8080/SpringMVCHibernate/products" className="text-muted">Admin</a>
            </div>
            <div className="col-md-8 text-md-center">
              <span className="px-2">info@lifestyle.com</span>
              <span className="px-2">Banglore,India</span>
            </div>
            <div className="col-md-2 text-right text-muted">
              <i className="fab fa-lg fa-cc-visa"></i>
              <i className="fab fa-lg fa-cc-paypal"></i>
              <i className="fab fa-lg fa-cc-mastercard"></i>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
