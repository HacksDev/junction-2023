import { useState } from "react";

// todo: use callback wrap
const SendMessage = (props: { onNewMessage: (message: String, userMessage: Boolean) => void }) => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState<number>(0);
  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    props.onNewMessage(value, true);
    const anwer_messages: String[] = [
      'Thank you for your warm wishes! You just made someone a bit happier. Michael from Salzburg wrote a message to you too: "Have a nice day! Smile more!',
      'Mark from London wanted to tell you: "Look at yourself, you are wonderful! You can cope with all the difficulties"',
      'There is also one message from Angela, Australia: "I believe in you! Never stop dreaming big."',
    ];
    if (number >= anwer_messages.length) {
      props.onNewMessage(
        "You don't have new messages yet, but you can still write some kind words to somebody!",
        false,
      );
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
    <div className="fixed bottom-0 w-full pt-3 pb-20 pr-50" style={{ backgroundColor: "#EDF8FA" }}>
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
