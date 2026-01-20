import { NextResponse } from "next/server";

const JSON_SERVER_URL = "http://localhost:4500/users";

export async function GET() {
  return NextResponse.json({ message: "Hello from GET!" });
}

// export async function POST(req) {
//   const body = await req.json();
//   // You could push this to JSON Server here
//   return NextResponse.json({ message: "Post received", data: body });
// }

export async function POST(req) {
  try {
    // Get the body from the request
    const body = await req.json(); // expects { "name": "New User" }

    if (!body.name || body.name.trim() === "") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // 1. Get current users from JSON Server
    const usersRes = await fetch(JSON_SERVER_URL);
    const users = await usersRes.json();

    // 2. Calculate new ID
    const lastId = users.length > 0 ? users[users.length - 1].id : 0;
    console.log("lastId => ", users[users.length - 1]);
    const newUser = { id: Number(lastId) + 1, name: body.name };

    // Send POST request to JSON Server
    // 3. Insert new user
    const response = await fetch(JSON_SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    // Return the newly added user
    return NextResponse.json({ message: "User added", data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}
