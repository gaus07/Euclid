import { getSession } from "@/actions/actions";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
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

  const session = await getSession();

  session.user = {id: user.id, email: user.email, username: user.username};
  await session.save();
  

  return new Response("Logged in successfully", {
    status: 200,
  });
}