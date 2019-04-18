class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(string) {
    if (string === undefined) {
      return this.htmlElements[0].innerHTML
    }
    this.htmlElements.forEach(el => {
      el.innerHTML = string;
    });
  }

  empty() {
    this.html("");
  }

  append(thing) {
    if (thing instanceof HTMLElement) {
      this.htmlElements.forEach(e => {
        e.innerHTML += thing.outerHTML;
      })
    } else if (thing instanceof DOMNodeCollection) {
      this.htmlElements.forEach(e => {
        thing.htmlElements.forEach(t => {
          e.innerHTML += t.outerHTML;
        })
      })
    } else {
      this.htmlElements.forEach(e => {
      e.innerHTML += thing;
      })
    }
  }

  attr(arg1, arg2) {
    if(arg2 === undefined) {
      return this.htmlElements[0].getAttributes(arg1);
    } else {
      this.htmlElements.forEach(el => {
        el.setAttribute(arg1, arg2);
      })
    }
  }

}

module.exports = DOMNodeCollection;