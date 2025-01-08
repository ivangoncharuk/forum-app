// src/app/board/new/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addThread } from "../../dataStore";

export default function NewThreadPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required!");
      return;
    }
    const newThread = addThread(title, author, content);
    router.push(`/board/thread/${newThread.id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create a New Thread</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            className="border w-full px-2 py-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Thread Title"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Name (optional)</label>
          <input
            type="text"
            className="border w-full px-2 py-1"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Anonymous"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Content</label>
          <textarea
            className="border w-full px-2 py-1"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Say something..."
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Post
        </button>
      </form>
    </div>
  );
}
