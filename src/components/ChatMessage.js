import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="rounded-full w-6"
        src="https://preview.redd.it/high-resolution-remakes-of-the-old-default-youtube-avatar-v0-bgwxf7bec4ob1.png?width=640&crop=smart&auto=webp&s=99d5fec405e0c7fc05f94c1e1754f7dc29ccadbd"
        alt="user-icon"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
