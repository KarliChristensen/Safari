import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("sendMail function triggered");
  try {
    const {
      name,
      email,
      phone,
      victoria,
      guidedw,
      message,
      khwai,
      savuti,
      chobe,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: "booking@shangamera.com",
      subject: `Booking from ${name}`,
      html: `
        <p>New booking via website form.</p>
        <p>From: <strong>${name}</strong></p>
        <p>Email: <strong>${email}</strong></p>
        <p>Phone: <strong>${phone}</strong></p>
        <p>People wishing to travel:</p>
        <ul>
          <li>Okavango Delta: <strong>${khwai}</strong> with the optional game walk: ${
        guidedw ? "<strong>included</strong>" : "<strong>not included</strong>"
      }</li>
          <li>Savuti: <strong>${savuti}</strong></li>
          <li>Chobe: <strong>${chobe}</strong></li>
        </ul>
        <p>Optional add-on Victoria Falls: <strong>${
          victoria ? "Yes" : "No"
        }</strong></p>
        <p>Further information: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
