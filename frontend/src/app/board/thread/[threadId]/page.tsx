"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getThreadById } from "../../../dataStore";
import Link from "next/link";

export default function ThreadDetailPage() {
  const params = useParams();
  const router = useRouter();

  const threadId = params?.threadId;

  const [thread, setThread] = useState(() => (typeof threadId === "string" ? getThreadById(threadId) : null));

  useEffect(() => {
    if (typeof threadId !== "string") {
      alert("Thread ID is invalid!");
      router.push("/board");
      return;
    }

    const fetchedThread = getThreadById(threadId);
    if (!fetchedThread) {
      alert("Thread not found!");
      router.push("/board");
    } else {
      setThread(fetchedThread);
    }
  }, [threadId, router]);

  if (!thread) return null;

  return (
    <div>
      <h1 className="text-xl font-bold">{thread.title}</h1>
      <p className="text-sm text-gray-600">
        By {thread.author} on {new Date(thread.createdAt).toLocaleString()}
      </p>
      <div className="mt-2 p-4 bg-white shadow-sm">
        <p>{thread.content}</p>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-lg mb-2">Replies</h2>
        {thread.replies.length === 0 && <p>No replies yet.</p>}
        <ul className="space-y-3">
          {thread.replies.map((reply) => (
            <li key={reply.id} className="p-2 border rounded bg-white">
              <p className="text-sm text-gray-600">
                Reply #{reply.id} by {reply.author} –{" "}
                {new Date(reply.createdAt).toLocaleString()}
              </p>
              <p>{reply.content}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <Link
          href={`/board/thread/${threadId}/reply`}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Write a Reply
        </Link>
      </div>
    </div>
  );
}
