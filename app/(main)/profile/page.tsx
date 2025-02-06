'use client';
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return <div>Not logged in</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <div className="space-y-2">
        <p>Email: {session.user?.email}</p>
        <Button onClick={() => signOut()}>Logout</Button>
      </div>
    </div>
  );
}