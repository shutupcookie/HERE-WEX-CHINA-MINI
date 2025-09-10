"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, you would typically send the form data to your backend/api.
  };

  return (
    <main style={{ maxWidth: 500, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: "1.5rem", boxShadow: "0 2px 16px rgba(36,55,70,0.08)" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Contact Us</h1>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" className="cta-button" style={{ width: "100%", marginTop: "1rem" }}>
            Submit
          </button>
        </form>
      ) : (
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <h2>Thank you!</h2>
          <p>Your message has been sent.</p>
        </div>
      )}
    </main>
  );
}
