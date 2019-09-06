import React, { Component } from "react";
import ChatBox from "./ChatBox";
import { connect } from "react-redux";
import { logout } from "./../../actions";

const chatIcon = require("../../images/smartphone.png");
const styleObject = {
  display: "flex",
  height: "100vh",
  flexDirection: "column"
};

class HomePage extends Component {
  // state = {  }
  render() {
    const { logout } = this.props;

    console.log(this.props)

    return (
      <div className="container" style={styleObject}>
        <nav className="navbar navbar-light bg-light w-100">
          <h5 className="navbar-text m-0 p-0">
            <img src={chatIcon} alt="Chat Icon" className="mr-3" />
            React Chat
          </h5>

          <button type="button" className="btn btn-primary" onClick={logout}>
            Logout
          </button>
        </nav>

        <div className="flex-grow-1 p-2" style={{ overflow: "auto" }}>
          <ChatBox className="bg-light" />
          <ChatBox className="bg-secondary text-white" />
        </div>

        <div className="input-group input-group-lg my-2">
          <textarea
            className="form-control"
            style={{ resize: "none" }}
          ></textarea>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Submit Chat
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(HomePage);
