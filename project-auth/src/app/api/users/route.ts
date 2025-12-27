import { NextResponse } from "next/server";
import connectDb from "@/lib/db"; // adjust path if needed
import User from "@/modal/user.modal";

export async function GET() {
  try {
    await connectDb();

    const users =   await User.find({}).lean()

    return NextResponse.json(
     users,
     {status:200}
    );
  } catch (error: any) {
    console.error("DB connection error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "MongoDB connection failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
