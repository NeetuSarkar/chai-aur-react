function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHtm;
}

const reactElement = {
  type: "a",
  props: {
    herf: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainConatiner = document.querySelector("#root");

customRender(reactElement, mainConatiner);
