// import { auth } from "@/app/(auth)/api/[...nextauth]/route"
// import { Button } from "@/components/ui/button"
// import { redirect } from "next/navigation"

// export default async function ProfilePage() {
//   const session = await auth()

//   if (!session?.user) {
//     redirect("/login")
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-4">Profile</h2>
//       <p className="mb-4">Email: {session.user.email}</p>
//       <form action="/api/auth/signout" method="POST">
//         <Button type="submit">Logout</Button>
//       </form>
//     </div>
//   )
// }

