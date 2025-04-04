import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const {name, email, contactno, message} = await req.json()
    
    const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT),
          secure: process.env.SMTP_SECURE === 'true', 
          auth: {
            user: process.env.SMTP_USER,  
            pass: process.env.SMTP_PASS,     
          },
    });

    const mail = prisma.service.create({
      data: { name, email, phone: contactno, message }
    })


    if(!mail) 
      return NextResponse.json({ message: "something went wrong" }, { status: 401 })

    const _message = {
      from: `"Euclid" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Euclid - Services",
      text: `Name: ${name}\nEmail: ${email}\nContact No: ${contactno}\nMessage: ${message}`,
    }

    await transporter.sendMail(_message);

    await prisma.service.create({
      data: {
        email,
        message,
        name,
        phone: contactno,
      }
    })


    return NextResponse.json({ message: "submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json({ message: "An error occurred while processing your request" }, { status: 500 })
  }
}

