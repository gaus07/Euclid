// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateOTP} from '@/lib/utils';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            // return NextResponse.json({ message: 'User not found' }, { status: 404 });
            await prisma.user.create({ data: { email } });
        }

        await prisma.verificationToken.deleteMany({ where: { email } });

        const token = generateOTP();
        const expires = new Date(Date.now() + 10 * 60 * 1000);
        await prisma.verificationToken.create({
            data: { email, token, expires },
        });

        // await sendEmail(email, token);
        await fetch('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, text: `Your OTP is ${token}`, subject: 'Your OTP for admin access' }),
        })

        return Response.json({ message: 'Verification code sent' });
    } catch (error) {
        // console.log(error);
        return Response.json({ message: 'An error occurred' }, { status: 500 });
    }
}