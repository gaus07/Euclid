import type { SessionOptions } from 'iron-session';

export const sessionOptions: SessionOptions = {
    password: process.env.IRON_SESSION_SECRET!,
    cookieName: 'my-otp-app-session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
    },
};

declare module 'iron-session' {
    interface IronSessionData {
        user?: {
            id: number;
            email: string;
            username?: string;
        };
    }
}