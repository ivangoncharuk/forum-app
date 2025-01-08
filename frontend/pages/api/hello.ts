import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ message: "HELLO! This is api handler message from frontend/pages/api/hello.ts" });
}
