import React from "react";
import ReactDOM from "react-dom";
import App from "./home/App";
import * as serviceWorker from "./serviceWorker";
import "./less/mainStyle.less";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
