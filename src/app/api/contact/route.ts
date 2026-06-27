import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  inquiry?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  title?: string;
  company?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const inquiry = body.inquiry?.trim() ?? "";
  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const title = body.title?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!firstName || !lastName || !email || !phone || !message) {
    return NextResponse.json(
      { error: "First name, last name, email, phone, and message are required." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const mailTo = process.env.CONTACT_TO_EMAIL ?? "info@wjbe.com";
  const mailFrom = process.env.CONTACT_FROM_EMAIL ?? smtpUser ?? "no-reply@wjbe.com";

  const missing = [
    !smtpHost ? "SMTP_HOST" : null,
    !smtpUser ? "SMTP_USER" : null,
    !smtpPass ? "SMTP_PASS" : null,
  ].filter(Boolean);

  if (missing.length > 0) {
    return NextResponse.json(
      {
        error: `SMTP configuration is missing: ${missing.join(", ")}. Put them in .env.local and restart the dev server.`,
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `Website contact form: ${firstName} ${lastName}`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><strong>Inquiry</strong></td><td>${escapeHtml(inquiry)}</td></tr>
        <tr><td><strong>First Name</strong></td><td>${escapeHtml(firstName)}</td></tr>
        <tr><td><strong>Last Name</strong></td><td>${escapeHtml(lastName)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Title / Role</strong></td><td>${escapeHtml(title)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
        <tr><td><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, "<br />")}</td></tr>
      </table>
    </div>
  `;

  const text = [
    `Inquiry: ${inquiry}`,
    `First Name: ${firstName}`,
    `Last Name: ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Title / Role: ${title}`,
    `Company: ${company}`,
    `Message: ${message}`,
  ].join("\n");

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    replyTo: email,
    subject,
    text,
    html,
  });

  return NextResponse.json({
    message: "Thanks. Your message has been sent to info@wjbe.com.",
  });
}
