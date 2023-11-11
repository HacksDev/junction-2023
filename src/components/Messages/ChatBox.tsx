import { MessageData } from "@/pages/messages";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";

const ChatBox = (props: { messages: MessageData[] }) => {
  console.log(props);

  return (
    <div className="containerWrap pb-32" style={{ backgroundColor: "#EDF8FA" }}>
      {props.messages.map((message: MessageData, ind: number) => (
        <Message key={ind} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
