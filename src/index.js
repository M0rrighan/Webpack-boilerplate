import _ from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash imported by script
  element.innerHTML = _.join(["A Webpack basic configuration exercise"], " ");

  return element;
}

document.body.appendChild(component());
