import "./Footer.css";

export function OfficeLocations() {
  return (
    <div className="office-wrapper">
      <div className="office-header">
        For customer support, please contact the office nearest to your location
        or email us at support@golitemobile.com
      </div>

      <div className="container">
        <div className="row office-grid">
          <div className="col-12 col-md-4">
            <h6>Head Office</h6>
            <p>1401 21st Street, Suite B, Sacramento, CA 95811</p>
            <p>Phone: 1-800-301-9385</p>
            <p>info@golitemobile.com</p>
          </div>

          <div className="col-12 col-md-4">
            <h6>Texas Office</h6>
            <p>5900 Balcones Drive, Suite 100 Austin, TX 78731</p>
            <p>Phone: 1-800-301-9385</p>
            <p>info@golitemobile.com</p>
          </div>

          <div className="col-12 col-md-4">
            <h6>Illinois Office</h6>
            <p>2501 Calumet Rd, Suite B Springfield, IL 62704</p>
            <p>Phone: 1-800-301-9385</p>
            <p>info@golitemobile.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
