import React from "react";

const ChatBox = props => {
  const classNames = `card ${props.className} my-2`;
  return (
    <div className={classNames} style={{ width: "70%" }}>
      <div className="card-body">{props.text}</div>
    </div>
  );
};

export default ChatBox;
