import { prisma } from "@/lib/prisma";
import { sessionOptions } from "@/lib/sessionOptions";
import { getIronSession } from "iron-session";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: NextApiResponse) {
  const { otp, email } = await request.json();

  if (!otp || !email) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  const isVerified = await prisma.verificationToken.findUnique({
    where: { email, token: otp },
  });

  if (!isVerified) {
    return new Response("Invalid OTP", {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return new Response("User does not exist", {
      status: 400,
    });
  }

  const session = (await getIronSession(
    request,
    response,
    sessionOptions
  )) as any;

  session.user = { email: user.email, id: user.id, username: user.username };
  // await session.save();
  console.log(session);
  

  return new Response("Logged in successfully", {
    status: 200,
  });
}
