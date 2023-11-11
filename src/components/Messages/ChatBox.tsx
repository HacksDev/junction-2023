import { MessageData } from "@/pages/messages";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";

const ChatBox = (props: { messages: MessageData[] }) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the end of the chat box after messages update
    if (chatBoxRef.current) {
      const lastMessage = chatBoxRef.current.lastChild as HTMLElement;
      lastMessage.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.messages]); // Trigger the effect whenever messages change

  return (
      <div className="containerWrap pb-32" style={{ backgroundColor: "#EDF8FA" }} ref={chatBoxRef}>
        {props.messages.map((message: MessageData, ind: number) => (
            <Message key={ind} message={message} />
        ))}
      </div>
  );
};

export default ChatBox;