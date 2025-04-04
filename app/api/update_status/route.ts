import { prisma } from "@/lib/prisma";

export const POST = async (request: Request) => {
    const { id, status } = await request.json();

    await prisma.service.update({
        where: { id: Number(id) },  
        data: { status: status },
    });

    return Response.json({ message: "Status updated successfully" });
}