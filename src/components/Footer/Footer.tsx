import "./Footer.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaThreads,
} from "react-icons/fa6";

const footerLinks = [
  {
    title: "Shop & Devices",
    items: [
      { label: "Prepaid Plans", url: "/prepaid" },
      { label: "Postpaid Plans", url: "/postpaid" },
      { label: "Family & Multi-Line Plans", url: "/family-plans" },
      { label: "Travel Plans", url: "/travel" },
      { label: "International Calls", url: "/international-calls" },
      { label: "Bring Your Own Device (BYOD)", url: "/byod" },
      { label: "Mobile Phones & Accessories", url: "/devices" },
      { label: "Special Offers & Promotions", url: "/promotions" },
    ],
  },
  {
    title: "Customer Support",
    items: [
      { label: "Help Center", url: "/help-center" },
      { label: "My Account", url: "/my-account" },
      { label: "Track Order", url: "/track-order" },
      { label: "Lost SIM", url: "/lost-sim" },
      { label: "SIM Activation", url: "/sim-activation" },
      { label: "Network Status & Outages", url: "/network-status" },
      { label: "Coverage Map", url: "/coverage-map" },
      { label: "Plans & Features Overview", url: "/plans-features" },
      { label: "Contact Us", url: "/contact" },
      { label: "Feedback", url: "/feedback" },
      { label: "International Roaming", url: "/international-roaming" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", url: "/about" },
      { label: "Leadership", url: "/leadership" },
      { label: "Responsibility", url: "/responsibility" },
      { label: "Sustainability", url: "/sustainability" },
      { label: "Community", url: "/community" },
      { label: "Relations with Partners", url: "/partners" },
      { label: "Suppliers", url: "/suppliers" },
      { label: "Careers", url: "/careers" },
      { label: "Newsroom", url: "/newsroom" },
      { label: "Blogs", url: "/blogs" },
    ],
  },
  {
    title: "Legal & Policies",
    items: [
      { label: "Terms & Conditions", url: "/terms" },
      { label: "Privacy Policy", url: "/privacy" },
      { label: "California Consumer Privacy Act (CCPA)", url: "/ccpa" },
      { label: "E911 Disclosure", url: "/e911" },
      { label: "Cookies Policy", url: "/cookies" },
      { label: "Consumer Information", url: "/consumer-info" },
      { label: "Regulatory Information", url: "/regulatory-info" },
      { label: "Billing, Payment, and Roaming Policy", url: "/billing-roaming" },
      { label: "ILD Consumer Agreement", url: "/ild-agreement" },
      { label: "Legal Policies & Agreements", url: "/legal-policies" },
    ],
  },
];

export default function Footer() {
  return (
    <>
{/* MID FOOTER SECTION */}
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

      {/* FOOTER LINKS SECTION */}
      <div className="footer-links">
        <div className="container">
          <div className="row">
            {footerLinks.map((section, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <h6>{section.title}</h6>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.url}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* OFFICE LOCATIONS SECTION */}
      <div className="office-wrapper">
        <div className="office-header">
          For customer support, please contact the office nearest to your location
          or email us at support@golitemobile.com
        </div>

        <div className="container">
          <div className="row office-grid">
            <div className="col-12 col-md-6 col-lg-4">
              <h6>Head Office:</h6>
              <p>1401 21st Street, Suite R Sacramento, CA 95811</p>
              <p>Phone: 1-800-801-9385</p>
              <p>info@golitemobile.com</p>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <h6>Texas Office:</h6>
              <p>5900 Balcones Drive, Suite 100 Austin, TX 78731</p>
              <p>Phone: 1-800-801-9385</p>
              <p>info@golitemobile.com</p>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <h6>Illinois Office:</h6>
              <p>2501 Chatham Rd, Suite R Springfield, IL 62704</p>
              <p>Phone: 1-800-801-9385</p>
              <p>info@golitemobile.com</p>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <h6>Delaware Office:</h6>
              <p>8 The Green, Suite A Dover, DE 19901</p>
              <p>Phone: 302-899-7312</p>
              <p>info@golitemobile.com</p>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <h6>Washington DC Office:</h6>
              <p>1717 N Street NW, Suite 1 Washington, DC 20036</p>
              <p>Phone: 1-800-801-9385</p>
              <p>info@golitemobile.com</p>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <h6>Florida Office:</h6>
              <p>12386 State Road 535, #302 Orlando, FL 32836</p>
              <p>Phone: 1-800-801-9385</p>
              <p>info@golitemobile.com</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* FOOTER BOTTOM SECTION */}
      <div className="footer-bottom">
        © 2025 GoLite Mobile. GoLite Mobile is a trading name for GoLite Mobile Inc.
        All rights reserved.
      </div>
    </>
  );
}
