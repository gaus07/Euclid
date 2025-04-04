import { prisma } from "@/lib/prisma";
import { generateOTP } from "@/lib/utils";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isAuthorized = await prisma.user.findUnique({
      where: { email, isVarified: true },
    });

    if (!isAuthorized) {
      return new Response("You are not authorized", {
        status: 400,
      });
    }
    
    await prisma.verificationToken.deleteMany({ where: { email } });

    const token = generateOTP();
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    await prisma.verificationToken.create({
      data: { email, token, expires },
    });

    await fetch("http://localhost:3000/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        text: `Your OTP is ${token}`,
        subject: "Your OTP for admin access",
      }),
    });


    return Response.json({ message: "Verification code sent" });
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
