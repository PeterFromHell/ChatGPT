import React from "react";
import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flec flex-col h-screen overflow-hidden">
      {/* Chat */}
      <Chat chatId={id} />

      {/* Chat Input */}
      <ChatInput chatId={id} />
    </div>
  );
};
export default ChatPage;
