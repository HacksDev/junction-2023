import { useState } from "react";
import { useCallback } from "react";
import { toast } from "react-toastify";

type ButtonState = {
  text: String;
  buttons_text: String[];
};

// todo: use callback wrap
const SendButtonMessage = (props: { onNewMessage: (message: String, userMessage: Boolean) => void }) => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState<number>(0);
  const buttonStates: ButtonState[] = [
    {
      text: "If you want to get some additional information, press the button below.",
      buttons_text: ["activities", "usefull link"],
    },
    {
      text: "If you want to be active, go for a walk.",
      buttons_text: ["no", "okay"],
    },
    {
      text: "I see, you don't want to go for a walk. Maybe you would like to see a movie?",
      buttons_text: ["yes", "no"],
    },
    {
      text: "Good, i know a movie just for you. It is called “Garfield”.",
      buttons_text: ["Good, I will see it", "Brr, it is boring!"],
    },
  ];

  const handleSendButtonMessage = async (e: any, value: String) => {
    e.preventDefault();
    props.onNewMessage(value, true);

    setNumber(number + 1);
    props.onNewMessage(buttonStates[(number + 1) % buttonStates.length].text, false);
  };

  const handleClick = useCallback(() => {
    toast.info("It is demo conversation, this tree of dialog will be implemented in the future, try another button", {
      theme: "colored",
      toastId: 1,
    });
  }, []);

  return (
    <div className="fixed bottom-0 pt-3 pb-40  w-full flex items-center " style={{ backgroundColor: "#EDF8FA" }}>
      <form
        onSubmit={(e: any) => {
          handleSendButtonMessage(e, buttonStates[number % buttonStates.length].buttons_text[0]);
        }}
      >
        <button type="submit" className="btn btn-secondary mx-3">
          {buttonStates[number % buttonStates.length].buttons_text[0]}
        </button>
      </form>
      <button type="submit" onClick={handleClick} className="btn btn-secondary mx-3">
        {buttonStates[number % buttonStates.length].buttons_text[1]}
      </button>
    </div>
  );
};

export default SendButtonMessage;
