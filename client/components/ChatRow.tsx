import React from "react";
import Link from "next/link";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center`}>
      <ChatBubbleLeftIcon className="w-5 h-5" />
      <p className="flex-1 hidden md:inline-flex truncate">New Chat</p>
      <TrashIcon className="w-5 h-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
};

export default ChatRow;
