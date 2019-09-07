import React from "react";
const emptyMessageBox = require("../../images/empty-box.png");

const NoMessages = () => {
  return (
    <div className="flex-grow-1 p-2 text-center">
      <img src={emptyMessageBox} className="mt-5" alt="No Messages" />
      <h1 className="text-center font-weight-light mt-3">No Messages...</h1>
    </div>
  );
};

export default NoMessages;
