import { getSession } from "@/actions/actions";

export async function GET()  {
    const session = await getSession()
    session.destroy()
    return new Response("Logged out successfully", {
        status: 200,
    });
 }