import { unauthorized } from 'next/navigation';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, subject, text } = await request.json();
    console.log(email);

    if (!email || !subject || !text) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', 
      auth: {
        user: process.env.SMTP_USER,  
        pass: process.env.SMTP_PASS,     
      },
    });

    const message = {
      from: `"Euclid" <${process.env.SMTP_USER}>`,
      to: email,
      subject: subject,
      text: text,
      // html: html,
    };

    const info = await transporter.sendMail(message);

    return NextResponse.json({ messageId: info.messageId });
  } catch (error) {
    console.log('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}