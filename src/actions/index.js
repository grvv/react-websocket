import history from "../history";

export const login = formValue => {
  const fakeJwtToken = JSON.stringify(formValue);

  localStorage.setItem("jwtToken", fakeJwtToken);
  history.replace("/home");

  return {
    type: "LOGIN",
    payload: fakeJwtToken
  };
};

export const logout = () => {
  localStorage.removeItem("jwtToken");
  history.replace("/");

  return {
    type: "LOGOUT"
  };
};

export const connectedToWs = () => ({ type: "WS_CONNECTED" });

export const sendMessage = message => ({
  type: "MESSAGE_SENT",
  payload: message
});

export const messageReceived = message => ({
  type: "MESSAGE_RECEIVED",
  payload: message
});

export const errorOccurred = message => ({
  type: "ERROR_OCCURRED",
  payload: message
});

export const connectionClosed = codeAndReason => ({
  type: "CONNECTION_CLOSED",
  payload: codeAndReason
});
