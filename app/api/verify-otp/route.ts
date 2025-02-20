import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { otp, email } = await req.json();

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
  return new Response("OTP verified", {
    status: 200,
  });
}
