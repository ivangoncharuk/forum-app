// src/app/board/page.tsx
"use client";
export const dynamic = "force-client";

import Link from "next/link";
import { getThreads } from "../dataStore";
import { useState, useEffect } from "react";

export default function BoardPage() {
  const [threads, setThreads] = useState(() => getThreads());

  // If we prefer to keep getThreads server-side only, we could do a fetch in useEffect,
  // but here we’re just reading the in-memory store for simplicity.
  useEffect(() => {
    setThreads(getThreads());
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Board</h1>
      <div className="mb-4">
        <Link
          href="/board/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Thread
        </Link>
      </div>
      <ul className="space-y-3">
        {threads.map((thread) => (
          <li key={thread.id} className="p-4 bg-white rounded shadow">
            <Link href={`/board/thread/${thread.id}`} className="block">
              <h2 className="text-lg font-bold">{thread.title}</h2>
              <p className="text-sm text-gray-600">
                By {thread.author} - {new Date(thread.createdAt).toLocaleString()}
              </p>
              <p className="mt-2 text-gray-800 line-clamp-1">{thread.content}</p>
              <p className="text-xs text-gray-500 mt-2">
                Replies: {thread.replies.length}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
