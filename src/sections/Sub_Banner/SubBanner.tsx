// import "./SubBanner.css";
// export default function SubBanner() {
//   return (
//     <>
//       <div className="container">
//         <section className="section ">
//           <div className="left-sec col-md-6 col-sm-12">
//             <h1>Get our best content in your inbox</h1>
//             <p>
//               All the tips, stories, and resources you could ever need or want
//               straight to your email.
//             </p>
//           </div>
//           <div className="right-sec col-md-6 col-sm-12">
//             <input type="email"  className="inpt" placeholder="Email address.."/>
//             <button type="button" className="s-btn">Submit</button>
//             <p>
//               Your privacy matters! Smaile only uses this info to send content
//               and updates. You may
//             </p>
//             <p>unsubscribe anytime. View our privacy policy for more.</p>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

import "./SubBanner.css";

export default function SubBanner() {
  return (
    <div className="subbanner-wrapper container">
        <section className="subbanner row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="subbanner-left col-12 col-md-6">
            <h2>Get our best content in your inbox</h2>
            <p>
              All the tips, stories, and resources you could ever need or want
              straight to your email.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="subbanner-right col-12 col-md-6">
            {/* FORM ROW */}
            <div className="form-row">
              <input
                type="email"
                className="sub-input"
                placeholder="Email address"
              />
              <button className="sub-btn">Subscribe</button>
            </div>
            {/* PRIVACY TEXT */}
            <p className="privacy-text">
              Your privacy matters! Smaile only uses this info to send content
              and updates. You may unsubscribe anytime. View our privacy policy
              for more.
            </p>
          </div>
        </section>
    </div>
  );
}

