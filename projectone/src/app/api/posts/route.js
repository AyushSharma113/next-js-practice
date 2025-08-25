import { connectDB } from "../../../lib/mongodb";
import Post from "@/modal/post.js";

// Create New Post
export async function POST(req) {
  await connectDB();
  const { title, content } = await req.json();

  const newPost = new Post({ title, content });
  await newPost.save();

  return Response.json({ success: true, post: newPost });
}

// Get All Posts
export async function GET() {
  await connectDB();
  const posts = await Post.find().sort({ createdAt: -1 });
  return Response.json(posts);
}
