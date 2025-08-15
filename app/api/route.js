import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("sendMail function triggered");
  try {
    const {
      name,
      email,
      phone,
      victoria,
      kalahari,
      birds,
      gamev,
      guidedw,
      birdw,
      cano,
      boatc,
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
      to: "null@shangameranull.com",
      subject: `Booking from ${name}`,
      html: `
        <p>New booking via website form.</p>
        <br>
        <p>From: <strong>${name}</strong></p>
        <p>Email: <strong>${email}</strong></p>
        <p>Phone: <strong>${phone}</strong></p>
        <strong><p>People wishing to travel:</p></strong>
        <ul>
          <li>Okavango Delta: <strong>${khwai}</strong>
          <li>Savuti: <strong>${savuti}</strong></li>
          <li>Chobe: <strong>${chobe}</strong>
          </ul>
          <strong>Optional add-ons:</strong>
          <ul>
          <li>Victoria Falls  -  <strong>${victoria ? "Yes" : "No"}</strong></li>
          <li>Kalahari Desert  -  <strong>${kalahari ? "Yes" : "No"}</strong></li>
          <li>Birdwatching Safari  -  <strong>${birds ? "Yes" : "No"}</strong></li>
        </ul>
        <strong><p>Personal preferences:</p></strong> 
        <ul>
          <li>Game viewing - <strong>${gamev ? "Yes" : "No"}</strong></li>
          <li>Guided walks - <strong>${guidedw ? "Yes" : "No"}</strong></li>
          <li>Birdwatching - <strong>${birdw ? "Yes" : "No"}</strong></li>
          <li>Mokoro - <strong>${cano ? "Yes" : "No"}</strong></li>
          <li>Boat cruises - <strong>${boatc ? "Yes" : "No"}</strong></li>
          </ul>
        <strong><p>Further information:</p></strong>
          <p>${message}</p>`,
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
