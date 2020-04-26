import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footers mt-5">
    <div className="footer-top footers">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 footer-info">
            <h3 className="text-dark1">Freelancer</h3>
            <p className="text-dark1">
              We are trying to connect small and large farmers to sell their
              quality product to the diffent places.
            </p>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4 className="text-dark1">Useful Links</h4>
            <ul>
              <li>
                <a href="#" className="text-dark1">Home</a>
              </li>
              <li>
                <a href="/Home#services" className="text-dark1">About us</a>
              </li>
              <li>
                <a href="/Home#services" className="text-dark1">Services</a>
              </li>
              <li>
                <a href="#" className="text-dark1">Terms of service</a>
              </li>
              <li>
                <a href="#" className="text-dark1">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-contact">
            <h4 className="text-dark1">Contact Us</h4>
            <p className="text-dark1">
              A108 Adam Street <br></br>
              New York, NY 535022<br></br>
              United States<br></br>
              <strong className="text-dark1">Phone:</strong> +1 5589 55488 55<br></br>
              <strong className="text-dark1">Email:</strong> info@example.com<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        © Copyright <strong>Freelancer</strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by{" "}
        <a href="https://bootstrapmade.com/">
          /ABCD<i className="fa fa-heart"></i>
        </a>
      </div>
    </div>
  </footer>
  );
}
