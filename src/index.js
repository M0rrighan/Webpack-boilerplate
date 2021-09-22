//import _ from "lodash";
import runOnClick from "./event.js";
import "./style.css";

function component() {
  const element = document.querySelector("h1");
  element.innerText = "A Webpack basic configuration exercise";

  return element;
}

component();

function button() {
  const btn = document.createElement("button");
  btn.innerHTML = "Click to run a function from event.js file";
  btn.onclick = runOnClick;
  return btn;
}

document.body.appendChild(button());

// if (module.hot) {
//   module.hot.accept();
// }
