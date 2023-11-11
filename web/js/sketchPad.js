class SketchPad {
  constructor(container, size = 400) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = size;
    this.canvas.height = size;
    this.canvas.style = `
        background-color: white;
        box-shadow: 0px 0px 10px 2px black ;
        `;
    container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");
    this.path = [];
    this.isDrawing = false;
    this.#addEventListeners();
  }
  #addEventListeners() {
    this.canvas.onmousedown = (e) => {
      const mouse = this.#getMouse(e);
      this.path = [mouse];
      this.isDrawing = true;
    };
    this.canvas.onmousemove = (e) => {
      if (!this.isDrawing) return;
      const mouse = this.#getMouse(e);
      this.path.push(mouse);
      console.log(this.path.length);
      this.#redraw();
    };
    this.canvas.onmouseup = () => {
      this.isDrawing = false;
    };
  }
  #redraw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    draw.path(this.ctx, this.path);
  }
  #getMouse = (e) => {
    const rect = this.canvas.getBoundingClientRect();
    return [
      Math.round(e.clientX - rect.left),
      Math.round(e.clientY - rect.top),
    ];
  };
}
