import { NextResponse } from "next/server";
import { contactEmail } from "../../site-config";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return badRequest("Invalid request body.");
  }

  // Honeypot filled → pretend success
  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2 || name.length > 120) {
    return badRequest("Please enter your name.");
  }
  if (!emailPattern.test(email) || email.length > 160) {
    return badRequest("Please enter a valid email address.");
  }
  if (message.length < 10 || message.length > 4000) {
    return badRequest("Please include a short project description.");
  }
  if (phone.length > 40 || company.length > 120) {
    return badRequest("One of the fields is too long.");
  }

  const to = process.env.CONTACT_TO_EMAIL || contactEmail;
  const resendKey = process.env.RESEND_API_KEY;
  const formspreeId = process.env.FORMSPREE_FORM_ID;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (resendKey) {
    const from =
      process.env.CONTACT_FROM_EMAIL || "Axis Metals Website <onboarding@resend.dev>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website inquiry from ${name}`,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        {
          error:
            "Message could not be delivered. Please email info@axismetals.ca or call 416-746-2347.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  if (formspreeId) {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, company, message }),
    });

    if (!response.ok) {
      console.error("Formspree error:", await response.text());
      return NextResponse.json(
        {
          error:
            "Message could not be delivered. Please email info@axismetals.ca or call 416-746-2347.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  console.error(
    "Contact form is not configured. Set RESEND_API_KEY or FORMSPREE_FORM_ID.",
  );
  return NextResponse.json(
    {
      error:
        "The contact form is not configured yet. Please email info@axismetals.ca or call 416-746-2347.",
    },
    { status: 503 },
  );
}
