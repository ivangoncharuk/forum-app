'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setApiMessage(data.message);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome to the Frontend</h1>
      <p className="mt-4">API says: {apiMessage}</p>
    </div>
  );
}
