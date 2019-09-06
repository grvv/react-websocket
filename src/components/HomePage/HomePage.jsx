import React, { Component } from "react";
import { connect } from "react-redux";
import {
  logout,
  connectedToWs,
  sendMessage,
  messageReceived,
  errorOccurred,
  connectionClosed
} from "./../../actions";
import NoMessages from "./NoMessages";
import ChatView from "./ChatView";

const chatIcon = require("../../images/smartphone.png");
const styleObject = {
  display: "flex",
  height: "100vh",
  flexDirection: "column"
};

class HomePage extends Component {
  state = {
    chatBoxText: ""
  };

  ws = new WebSocket("wss://echo.websocket.org");

  handleInputChange = e => {
    const { value: chatBoxText } = e.target;
    this.setState({ chatBoxText });
  };

  sendMessage = () => {
    const { chatBoxText } = this.state;

    this.ws.send(chatBoxText);
    this.props.sendMessage({ type: "sent", message: chatBoxText });
    this.setState({ chatBoxText: "" });
  };

  componentDidMount() {
    // var ws = new WebSocket("wss://echo.websocket.org");

    this.ws.onopen = () => {
      // connection opened
      // ws.send("something just like this");
      this.props.connectedToWs();
    };

    this.ws.onmessage = e => {
      // a message was received
      // console.log(">> Message received", e.data);
      this.props.messageReceived({ type: "received", message: e.data });
    };

    this.ws.onerror = e => {
      // an error occurred
      // console.log(">> WS - an error occurred", e.message);
      this.props.messageReceived({ message: e.message });
    };

    this.ws.onclose = e => {
      // connection closed
      const { code, reason } = e;

      // console.log(">> WS - connection closed", e.code, e.reason);
      this.props.connectionClosed({ code, reason });
    };
  }

  componentWillUnmount = () => {
    if (this.ws) {
      // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
      this.ws.close(1000, "Manually closed");
    }
  };

  render() {
    const { logout, wsState } = this.props;

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

        {wsState.messageList.length ? (
          <ChatView messageList={wsState.messageList} />
        ) : (
          <NoMessages />
        )}

        <div className="input-group input-group-lg my-2">
          <textarea
            value={this.state.chatBoxText}
            onChange={this.handleInputChange}
            className="form-control"
            style={{ resize: "none" }}
          ></textarea>
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.sendMessage}
            >
              Submit Chat
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ wsState }) => ({ wsState });

const mapDispatchToProps = {
  logout,
  connectedToWs,
  sendMessage,
  messageReceived,
  errorOccurred,
  connectionClosed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
