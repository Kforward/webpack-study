import _ from "lodash";
import "./style.css";
import Img from "./img.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

// console.log(toml);
console.log(toml.title);
console.log(toml.owner.name);

// console.log(yaml);
console.log(yaml.title);
console.log(yaml.owner.name);

// console.log(json);
console.log(json.title);
console.log(json.owner.name);

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["hello", "webpack"], " ");
  element.classList.add("hello");

  // const img = new Image();
  // img.src = Img;

  // element.appendChild(img);

  console.log(Data);
  console.log(Notes);

  return element
}

document.body.appendChild(component());