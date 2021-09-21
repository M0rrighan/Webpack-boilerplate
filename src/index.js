import _ from "lodash";
import runOnClick from "./event.js";
import "./style.css";

function component() {
  const element = document.createElement("div");
  const paragraph = document.createElement("p");
  const btn = document.createElement("button");

  // Lodash imported by script
  paragraph.innerHTML = _.join(
    ["A Webpack basic configuration exercise.", "(Div created in index.js)"],
    " "
  );
  btn.innerHTML = "Click to run a function from event.js file";
  btn.onclick = runOnClick;

  element.appendChild(paragraph);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
