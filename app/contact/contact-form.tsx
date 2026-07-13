"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          email: String(data.get("email") || "").trim(),
          phone: String(data.get("phone") || "").trim(),
          company: String(data.get("company") || "").trim(),
          message: String(data.get("message") || "").trim(),
          website: String(data.get("website") || "").trim(),
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          payload.error ||
            "Something went wrong. Please email info@axismetals.ca or call 416-746-2347.",
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send right now. Please email info@axismetals.ca or call 416-746-2347.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
          />
        </label>
        <label>
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
          />
        </label>
        <label>
          <span>Company</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
          />
        </label>
      </div>
      <label>
        <span>Project details</span>
        <textarea name="message" required rows={6} maxLength={4000} />
      </label>
      {/* Honeypot — leave empty */}
      <label className="hp-field" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      {status === "success" ? (
        <p className="form-status success" role="status">
          Thanks — your message was sent. We will get back to you shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="form-status error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        className="button button-primary"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <span className="arrow-icon diagonal" aria-hidden="true" />
      </button>
    </form>
  );
}
