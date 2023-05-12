import React from "react";
import "./styles.scss";
import IMAGE from "./pic/Chads.png";
import LOGO from "./Rectangle 53.svg";

const App = () => {
  const name = "xlj;";
  return (
    <div>
      <span>Hello W!</span>
      <p>
        test {process.env.NODE_ENV} {process.env.name}
      </p>
      <img src={IMAGE} alt="img" />
      <img src={LOGO} alt="img" />
    </div>
  );
};

export default App;
