// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    // Just to show your existing /api/hello
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setApiMessage(data.message);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-2xl font-bold">Welcome to the Frontend</h1>
      <p className="mt-4">
        API says: <span className="font-mono">{apiMessage}</span>
      </p>
      <p className="mt-4">
        Go to the{" "}
        <a href="/board" className="underline text-blue-600">
          Board
        </a>{" "}
        to see threads
      </p>
    </div>
  );
}
