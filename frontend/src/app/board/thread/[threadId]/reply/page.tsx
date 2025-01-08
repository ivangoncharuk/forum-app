"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { addReply } from "../../../../dataStore";

export default function ReplyPage() {
  const params = useParams();
  const router = useRouter();

  // Type guard for threadId
  const threadId = params?.threadId;

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure threadId is valid
    if (typeof threadId !== "string") {
      alert("Invalid thread ID!");
      router.push("/board");
      return;
    }

    if (!content.trim()) {
      alert("Reply content cannot be empty!");
      return;
    }

    const reply = addReply(threadId, author, content);
    if (!reply) {
      alert("Thread not found!");
      router.push("/board");
      return;
    }

    router.push(`/board/thread/${threadId}`);
  };

  // If threadId is invalid, display a fallback message
  if (typeof threadId !== "string") {
    return (
      <div>
        <h1 className="text-xl font-bold mb-4">Invalid Thread</h1>
        <p className="text-red-500">Unable to determine the thread to reply to.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Reply to Thread #{threadId}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
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
          <label className="block mb-1 font-semibold">Comment</label>
          <textarea
            className="border w-full px-2 py-1"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts..."
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Post Reply
        </button>
      </form>
    </div>
  );
}
