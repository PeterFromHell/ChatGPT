"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");

  const { data: session } = useSession();

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lgtext-sm focus:outline-none">
      <form className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here..."
        />

        <button
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-2 py-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!prompt || !session}
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>{/* module selection*/}</div>
    </div>
  );
};
export default ChatInput;
