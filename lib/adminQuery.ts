import { prisma } from "@/lib/prisma";

export const AcceptRequest = async (email: string) => {
  const verified = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      isVarified: true,
    },
  });
  if (verified) {
      console.log(verified);
    return true;
  }
  return false;
};
