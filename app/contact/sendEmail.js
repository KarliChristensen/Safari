import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, khwai_okavango, savuti, chobe, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465, // Use 587 for TLS
      secure: true, // true for 465, false for other ports if using TLS
      auth: {
        user: 'booking@shangamera.com', // Your Zoho email
        pass: 'wxzbqb2uocspebd3XhfT', // Your email password or app-specific password
      },
    });

    // Set up email data
    const mailOptions = {
      from: email, // Sender address
      to: 'booking@shangamera.com', // List of recipients
      subject: 'Booking Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nKhwai Okavango: ${khwai_okavango}\nSavuti: ${savuti}\nChobe: ${chobe}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}