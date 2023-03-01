import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    <div className="border-gray-700 border chatRow">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </div>
  );
};
export default NewChat;
