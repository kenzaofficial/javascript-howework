window.addEventListener("DOMContentLoaded", function () {
  class Options {
    constructor(height = 20, width, bg, fontSize, textAlign) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    createDiv(anyText) {
      const newDiv = document.createElement("div");
      newDiv.textContent = anyText;
      newDiv.style.cssText = `height: ${this.height}px;width: ${this.width}px;background:${this.bg};font-size:${this.fontSize}px;text-align:${this.textalign}`;
      document.body.appendChild(newDiv);
      newDiv.classList.add("intro");
    }
  }
  const newElement = new Options(400, "violet", 50, "center");
  newElement.createDiv("123");
  console.log(newElement);
});
