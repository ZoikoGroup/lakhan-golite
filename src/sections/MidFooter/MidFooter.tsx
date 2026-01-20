import "./MidFooter.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaThreads,
} from "react-icons/fa6";

export default function MidFooter() {
  return (
    <div className="mid-footer-wrapper">
      <div className="container">
        <div className="row mid-footer align-items-center justify-content-center text-center text-md-start">
          {/* LOGO */}
          <div className="col-12 col-md-6 col-lg-3 mid-item">
            <img src="../logo.png" alt="GoLite Mobile" className="mid-logo" />
          </div>

          {/* QR CODE */}
          <div className="col-12 col-md-6 col-lg-3 mid-item mid-divider">
            <img src="../qrcode.png" alt="QR Code" className="mid-qr" />
          </div>

          {/* APP STORE BUTTONS */}
          <div className="col-12 col-md-6 col-lg-3 mid-item mid-divider app-links">
            <img src="../appstore.svg" alt="App Store" />
            <img src="../playstore.png" alt="Google Play" />
          </div>

          {/* SOCIAL ICONS */}
          <div className="col-12 col-md-6 col-lg-3 mid-item mid-divider social">
            <h6>Connect With Us</h6>
            <div className="social-icons">
              <FaFacebookF />
              <FaXTwitter />
              <FaYoutube />
              <FaInstagram />
              <FaLinkedinIn />
              <FaPinterestP />
              <FaThreads />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
