import React from "react";
import ChatBox from "./ChatBox";

const ChatView = ({ messageList }) => {
  const returnClasses = type =>
    type === "sent" ? "bg-light" : "bg-secondary text-white float-right";

  return (
    <div className="flex-grow-1 p-2" style={{ overflow: "auto" }}>
      {messageList.map((message, i) => (
        <ChatBox
          key={message + i}
          className={returnClasses(message.type)}
          text={message.message}
        />
      ))}
    </div>
  );
};

export default ChatView;
