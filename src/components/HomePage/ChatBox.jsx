import React from "react";

const ChatBox = props => {
  const classNames = `card ${props.className} my-2`;
  return (
    <div className={classNames}>
      <div className="card-body">This is some text within a card block.</div>
    </div>
  );
};

export default ChatBox;
