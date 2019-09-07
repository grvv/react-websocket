import React from "react";

const PageNotFoundImage = require("../images/404-error.png");

const Error404 = ({ history }) => {
  const goToDashboard = () => history.push("/");

  return (
    <div className="text-center mt-5">
      <img src={PageNotFoundImage} alt="Page Not Found" />
      <h1 className="text-center font-weight-light mt-3">Page Not Found!</h1>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={goToDashboard}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error404;
