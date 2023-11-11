import { MessageData } from "@/pages/messages";

const Message = (props: { message: MessageData }) => {
  const message = props.message;
  return (
    <div>
      <div className={`chat ${message.userMessage === true ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.userMessage === true ? "/images/portrait.jpg" : "/images/red_raccoon_box1.jpg"} />
          </div>
        </div>
        <div className="chat-header">{message.userMessage === true ? "You" : "Healther"}</div>
        <div
          className={`chat-bubble ${message.userMessage === true ? "chat-bubble-secondary" : "chat-bubble-primary"}`}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default Message;
