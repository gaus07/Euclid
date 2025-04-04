import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
        const emails = await prisma.service.findMany();
        console.log(emails);
        
        return Response.json({emails});
    } catch (error) {
        return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
}