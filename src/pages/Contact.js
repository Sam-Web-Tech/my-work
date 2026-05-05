import React from "react";

const Contact = () => {
  return (
    <div className="bg-light">

      {/* HERO */}
      <div className="container-fluid bg-dark text-white py-5">
        <div className="container text-center py-5">
          <h1 className="fw-bold display-5">Get In Touch With Us</h1>
          <p className="lead mt-3 text-white-50">
            Premium real estate support for buying, renting, and investment in Abuja & Lagos.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container py-5">

        <div className="row g-4">

          {/* CONTACT INFO */}
          <div className="col-12 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-4 h-100 border">

              <h4 className="fw-bold mb-4">Contact Information</h4>

              <div className="mb-4 d-flex gap-3">
                <i className="bi bi-geo-alt-fill fs-4 text-dark"></i>
                <div>
                  <h6 className="fw-bold mb-1">Office Address</h6>
                  <p className="text-muted mb-0">
                    12 Maitama Avenue, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="mb-4 d-flex gap-3">
                <i className="bi bi-telephone-fill fs-4 text-dark"></i>
                <div>
                  <h6 className="fw-bold mb-1">Phone</h6>
                  <p className="text-muted mb-0">
                    +234 800 123 4567
                  </p>
                </div>
              </div>

              <div className="mb-4 d-flex gap-3">
                <i className="bi bi-envelope-fill fs-4 text-dark"></i>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted mb-0">
                    support@realestatepro.ng
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <i className="bi bi-clock-fill fs-4 text-dark"></i>
                <div>
                  <h6 className="fw-bold mb-1">Working Hours</h6>
                  <p className="text-muted mb-0">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="col-12 col-lg-8">
            <div className="p-4 p-md-5 bg-white shadow-sm rounded-4 border">

              <h4 className="fw-bold mb-4">Send a Message</h4>

              <div className="row g-3">

                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Subject"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control form-control-lg"
                    rows="6"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-dark btn-lg w-100 fw-bold">
                    Send Message
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* OFFICES */}
        <div className="row mt-5 g-4">

          <div className="col-12 col-md-4">
            <div className="p-4 bg-white shadow-sm rounded-4 text-center h-100 border hover-shadow">
              <i className="bi bi-buildings fs-1 text-dark"></i>
              <h5 className="fw-bold mt-3">Abuja HQ</h5>
              <p className="text-muted mb-0">Maitama District, Abuja</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-4 bg-white shadow-sm rounded-4 text-center h-100 border">
              <i className="bi bi-house-door-fill fs-1 text-dark"></i>
              <h5 className="fw-bold mt-3">Lagos Branch</h5>
              <p className="text-muted mb-0">Victoria Island, Lagos</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-4 bg-white shadow-sm rounded-4 text-center h-100 border">
              <i className="bi bi-globe2 fs-1 text-dark"></i>
              <h5 className="fw-bold mt-3">Online Support</h5>
              <p className="text-muted mb-0">24/7 Customer Assistance</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;