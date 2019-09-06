const initialState = {
  isUserLoggedIn: false,
  authToken: null
};

export default (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isUserLoggedIn: true,
        authToken: action.payload
      };
    case "LOGOUT":
      return initialState;
    default:
      const token = localStorage.getItem("jwtToken") || null;

      return {
        isUserLoggedIn: !!token,
        authToken: token
      };
  }
};
