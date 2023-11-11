import { Layout } from "@/components/Layout";
import ChatBox from "@/components/Messages/ChatBox";
import SendMessage from "@/components/Messages/SendMessage";

import Link from "next/link";
import { useState } from "react";

export type MessageData = {
  text: String;
  userMessage: Boolean;
};

export default function Messages() {
  const [messages, setMessages] = useState<MessageData[]>([]);
  return (
    <Layout containerClassName="px-4 py-0">
      <div>
        <ChatBox messages={messages} />
        <SendMessage
          onNewMessage={(message, userMessage) => {
            setMessages((prev) => [...prev, { userMessage: userMessage, text: message }]);
          }}
        />
      </div>
    </Layout>
  );
}
