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
  const [messages, setMessages] = useState<MessageData[]>([
    {
      userMessage: false,
      text: "Hello! You can write somebody anonimously for support him in his life. Reciever will see only your name and city. Write something in chat and i will resend your message to somebody who needs it!",
    },
  ]);
  return (
    <Layout containerClassName="py-0">
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
