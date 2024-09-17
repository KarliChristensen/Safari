import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("sendMail function triggered");
  try {
    const { name, email, phone, victoria, message, khwai, savuti, chobe } =
      await request.json();

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
      text: `
        New booking via website form.

        From ${name}
        Email: ${email}
        Phone: ${phone}

        Total amount of people wishing to go: Okavango Delta ${khwai}, Savuti: ${savuti}, and Chobe: ${chobe}.

        Optional add-on Victoria Falls: ${victoria ? 'Yes' : 'No'},

        Further information: ${message}
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
