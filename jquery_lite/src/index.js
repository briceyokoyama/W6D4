const DOMNodeCollection = require("./dom_node_collection.js")

window.$l = function(bigBoi) {
  if (bigBoi instanceof HTMLElement) {
    return new DOMNodeCollection([bigBoi]);
  } else {
    let bigBois = Array.from(document.querySelectorAll(bigBoi));
    return new DOMNodeCollection(bigBois);
  }
  
};