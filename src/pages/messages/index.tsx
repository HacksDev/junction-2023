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
      text: "Now is the perfect time to write a couple of nice and encouraging words for a person who copes with similar health difficulties🤗.\nToday your support will go to Alexis, Ottawa (asthma).\nIf you don’t feel like doing it, just press ‘Skip’.",
    },
  ]);
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
