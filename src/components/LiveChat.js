import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(5),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "saif",
        message: liveMessage,
      })
    );
    setLiveMessage("")
  };

  return (
    <div>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage id={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form onSubmit={sumbitHandler}>
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="border border-black mt-2 px-2 ml-2 rounded-lg w-80"
        />
        <button className="px-3 py-1 mx-2 bg-green-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
