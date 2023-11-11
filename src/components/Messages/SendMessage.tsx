import { useState } from "react";

// todo: use callback wrap
const SendMessage = (props: { onNewMessage: (message: String, userMessage: Boolean) => void }) => {
  const [value, setValue] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log(value);
    props.onNewMessage(value, true);
    props.onNewMessage("answer", false);
    if (value.trim() === "") {
      return;
    }
    setValue("");
  };

  return (
    <div className="fixed bottom-0 w-full my-20 pr-50">
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
