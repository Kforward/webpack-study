import _ from "lodash";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button")

  element.innerHTML = _.join(["hello", "webpack"], " ");

  btn.innerHTML = '点击我并查看控制台'
  btn.onclick = printMe

  element.appendChild(btn)
  return element
}

document.body.appendChild(component());