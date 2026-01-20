import "./Footer.css";

const footerLinks = [
  {
    title: "Shop & Devices",
    items: [
      "Prepaid Plans",
      "Postpaid Plans",
      "Family & Multi-Line Plans",
      "Travel Plans",
      "International Calls",
      "Bring Your Own Device (BYOD)",
      "Mobile Phones & Accessories",
      "Special Offers & Promotions",
    ],
  },
  {
    title: "Customer Support",
    items: [
      "Help Center",
      "My Account",
      "Track Order",
      "Lost SIM",
      "SIM Activation",
      "Network Status & Outages",
      "Coverage Map",
      "Plans & Features Overview",
      "Contact Us",
      "Feedback",
      "International Roaming",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Leadership",
      "Responsibility",
      "Sustainability",
      "Community",
      "Relations with Partners",
      "Suppliers",
      "Careers",
      "Newsroom",
      "Blogs",
    ],
  },
  {
    title: "Legal & Policies",
    items: [
      "Terms & Conditions",
      "Privacy Policy",
      "California Consumer Privacy Act (CCPA)",
      "E911 Disclosure",
      "Cookies Policy",
      "Consumer Information",
      "Regulatory Information",
      "Billing, Payment, and Roaming Policy",
      "ILD Consumer Agreement",
      "Legal Policies & Agreements",
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="footer-links">
      <div className="container">
        <div className="row">
          {footerLinks.map((section, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <h6>{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
