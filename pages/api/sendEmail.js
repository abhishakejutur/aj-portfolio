// File: pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, service, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'abhishake62232@gmail.com', 
        pass: 'lyzo pqby duwc xbvi', 
      },
    });

    let mailOptions = {
      from: 'abhishake62232@gmail.com',
      to: 'abhishake62232@gmail.com', 
      subject: `AJ-Portfolio - New message from ${firstname} ${lastname}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <div style="background-color: white; border-radius: 8px; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333;">Hey Abhi! You got a new message from ${firstname} ${lastname}.</h2>
            <p style="color: #555;">The user details are below:</p>
            <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
              <tr style="background-color: #f2f2f2;">
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Field</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Details</th>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Name</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${firstname} ${lastname}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Email</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Phone Number</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${phone}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Service</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${service}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Message</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${message}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    };

    let autoReplyOptions = {
      from: 'abhishake62232@gmail.com',
      to: email, 
      subject: `Hey ${firstname}, Thank you for visiting my portfolio!`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <div style="background-color: white; border-radius: 8px; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333;">Hey ${firstname} ${lastname}!</h2><br />
            <p style="color: #555;">
              This is Jutur Abhishake. I hope this email finds you well. Thank you for visiting my portfolio and expressing interest in my ${service} services.
            </p>
            <p style="color: #555;">
              I'm thrilled about the opportunity to collaborate with you on your project. Having reviewed your requirements, I am confident that my skills and experience align well with your needs.
            </p>
            <p style="color: #555;">
              While my primary focus is on ${service}, I also have experience and skills in the following areas, which can be advantageous for our project:
            </p>
            <ul style="color: #555;">
              <li>Next.js</li>
              <li>ASP.NET (MVC, Web API)</li>
              <li>PostgreSQL</li>
              <li>SQL Server</li>
            </ul>
            <p style="color: #555;">
              You can connect with me or explore my portfolio through the following links:
            </p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="https://in.linkedin.com/in/abhishakejutur" style="text-decoration: none;">
                <button style="background-color: #0073b1; border: none; color: white; padding: 12px 24px; font-size: 16px; cursor: pointer; border-radius: 8px; margin-right: 10px; transition: background-color 0.3s ease;">
                  LinkedIn Profile
                </button>
              </a>
              <a href="https://aj-portfolio-five.vercel.app" style="text-decoration: none;">
                <button style="background-color: #28a745; border: none; color: white; padding: 12px 24px; font-size: 16px; cursor: pointer; border-radius: 8px; margin-left: 10px; transition: background-color 0.3s ease;">
                  Visit My Portfolio
                </button>
              </a>
            </div>
            <p style="margin-top: 20px; color: #555;">Best regards,</p>
            <p style="color: #555;">Jutur Abhishake</p>
            <p style="color: #555;">Full Stack Developer</p>
            <p style="color: #555;">+91 7337404176</p>
          </div>
        </div>
        <style>
          a button:hover {
            background-color: #005b8e !important;
            cursor: pointer;
          }
          a button:nth-child(2):hover {
            background-color: #218838 !important;
          }
        </style>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);
      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      console.error('Error sending emails:', error);
      res.status(500).json({ error: 'Error sending emails' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
//<img src="https://drive.google.com/file/d/1Onh-LJdr7gl1VzfGet_lGogBAAB_lkpj/view?usp=sharing" alt="JA" style="width: 150px; height: auto; border-radius: 50%; margin: 20px auto;" /><br />