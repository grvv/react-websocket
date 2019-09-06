const initialState = {
  connected: false,
  messageList: [],
  errorOccurred: {
    message: "",
    condition: false
  },
  connectionClosed: {
    code: "",
    reason: "",
    condition: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "WS_CONNECTED":
      return { ...state, connected: true };
    case "MESSAGE_SENT":
      return { ...state, messageList: [...state.messageList, action.payload] };
    case "MESSAGE_RECEIVED":
      return { ...state, messageList: [...state.messageList, action.payload] };
    case "ERROR_OCCURRED":
      return {
        ...state,
        errorOccurred: { condition: true, message: action.payload }
      };
    case "CONNECTION_CLOSED":
      return {
        ...state,
        connectionClosed: { condition: true, ...action.payload }
      };
    default:
      return { ...state };
  }
};
