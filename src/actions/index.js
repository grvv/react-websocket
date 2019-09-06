import history from "../history";

// export const login = formValue => async dispatch => {
//     const response = await axios.post("/login", formValue);

//     if (response && response.data.success) {
//       console.log("response", response);

//       dispatch({
//         type: "LOGIN",
//         payload: response.data.token
//       });

//       localStorage.setItem("token", response.data.token);
//       history.replace("/dashboard");
//     }
//   };

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
