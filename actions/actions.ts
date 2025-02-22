"use server"

import { sessionOptions } from "@/lib/sessionOptions";
import { getIronSession, IronSessionData } from "iron-session";
import { cookies } from "next/headers";

export async function getSession() {
  const session = await getIronSession<IronSessionData>(await cookies(), sessionOptions);
  return session;
}

export async function getUser() { 
    const session = await getSession();
    return session.user;
}

export async function logout() {
    const session = await getSession()
    session.destroy()
    return true;
}