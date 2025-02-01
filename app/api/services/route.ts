import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // Here you would typically process the form data,
    // e.g., save to a database, send an email, etc.
    console.log("Received form submission:", body)

    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json({ message: "An error occurred while processing your request" }, { status: 500 })
  }
}

