import ReactDom from "react-dom/client";
import App from "./App";
import ClickCounter from "./ClickCounter";

const root = document.querySelector("#root");
const x = (
  <div>
    <App />
    <h1
      aria-valuemax={{
        "fl;kdjaf;dkalfadklfjad;lkfdaslkf;jsdlkafdsklf;asdk;flsdjafl;djaflk;adfalkdjfdslk;fkas;dfkj;dasfasd;kjf;lkjad;lkfjdsf;lks":
          "1",
      }}></h1>
  </div>
);

ReactDom.createRoot(root).render(x);
