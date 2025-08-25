import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    console.log("yeah it is connected bro");
    return NextResponse.json(
      { message: "MongoDB connection successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route failed to connect to DB:", error);
    return NextResponse.json(
      { message: "MongoDB connection failed!", error: error.message },
      { status: 500 }
    );
  }
}
