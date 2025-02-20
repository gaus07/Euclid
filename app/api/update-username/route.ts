import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email, username } = await request.json();

    if (!email) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isExist = await prisma.user.findUnique({ where: { email } });

    if (!isExist) {
      return new Response("Invalid Email", {
        status: 400,
      });
    }

    await prisma.user.update({
      where: { email },
      data: { username },
    });

    return Response.json({ messageId: "Created Successfully" });
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
