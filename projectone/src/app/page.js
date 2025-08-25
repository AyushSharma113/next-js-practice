"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  // Fetch posts
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Add new post
  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");

    // Refresh list
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Blog App</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="submit">Add Post</button>
      </form>

      {/* Posts */}
      <div style={{ marginTop: 30 }}>
        {posts.map((post) => (
          <div
            key={post._id}
            style={{ border: "1px solid #ccc", margin: "10px 0", padding: 10 }}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
