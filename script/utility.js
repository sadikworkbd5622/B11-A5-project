function getElement(id) {
    return document.getElementById(id);
  }
  function createElement(element) {
    document.createElement(element);
  }
  
  function eventHandler(id, fn) {
    getElement(id).addEventListener("click", fn);
  }
  
  function getInnerText(id) {
    return getElement(id).innerText;
  }