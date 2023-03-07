import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";

type Data = {
  answer: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  // chatGPT query
  const response = query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that!",
  };

  res.status(200).json({ answer: "John Doe" });
}
