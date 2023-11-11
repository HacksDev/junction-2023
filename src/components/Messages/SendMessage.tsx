import { useState } from "react";

// todo: use callback wrap
const SendMessage = (props: { onNewMessage: (message: String, userMessage: Boolean) => void }) => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState<number>(0);
  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log(value);
    props.onNewMessage(value, true);
    const anwer_messages: String[] = [
      'Thank you for your message! I will resend it to somebody. Vasya from Zaltsburg wrote message for you too: "Have a nice day!"',
      'Mark from London wrote you: "Look at yourself, you are wonderful!"',
      'Angella wrote message to you from Australia: "I like you!"',
    ];
    if (number >= anwer_messages.length) {
      props.onNewMessage("You don't have new messages yet, but you can still write some message for somebody!", false);
    } else {
      props.onNewMessage(anwer_messages[number], false);
      setNumber(number + 1);
    }
    if (value.trim() === "") {
      return;
    }
    setValue("");
  };

  return (
    <div className="fixed bottom-0 w-full mb-20 pr-50 bg-white ">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none rounded-r-none"
          type="text"
        />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
