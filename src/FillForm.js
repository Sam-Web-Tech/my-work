import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function FillForm() {
  const navigate = useNavigate();
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleNavigate = () => {
    navigate("/");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current || loading) return;

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_4dtu01j",
        "template_lvmu4i8",
        form.current,
        "6fDkvprczMCqlTR4L",
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <h1 className="mb-4 text-center">Contact Form</h1>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="form-control mb-3"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="form-control mb-3"
            required
          />

          <textarea
            name="message"
            placeholder="Tell us your budget"
            className="form-control mb-3"
            rows="4"
            minLength="10"
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <div className="alert alert-info mt-3 text-center">
            {status}
          </div>
        )}

        {/* Navigation Button */}
        <button
          onClick={handleNavigate}
          className="btn btn-secondary w-100 mt-3 bg-dark"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
}