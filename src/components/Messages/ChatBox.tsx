import { MessageData } from "@/pages/messages";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";

const ChatBox = (props: { messages: MessageData[] }) => {
  console.log(props);

  return (
    <div className="containerWrap mb-80">
      {props.messages.map((message: MessageData, ind: number) => (
        <Message key={ind} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
