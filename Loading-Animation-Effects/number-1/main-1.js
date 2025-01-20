const loader = document.querySelector(".loader");

function elementCreatorM20(elementN) {
  for (i = 1; i <= 20; i++) {
    const element = document.createElement(elementN);
    element.setAttribute("style", `--i:${i}`);
    loader.appendChild(element);
  }
}

elementCreatorM20("span")
