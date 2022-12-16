import { SubContent } from "./sub-content.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.subContent = [
      new SubContent("./assets/img-01.png", this.ctx),
      new SubContent("./assets/img-02.png", this.ctx),
      new SubContent("./assets/img-03.png", this.ctx),
      new SubContent("./assets/img-04.png", this.ctx),
    ];

    window.addEventListener("resize", this.resize.bind(this), false);
    window.addEventListener("mousemove", this.mouseMove.bind(this));
    this.resize();

    requestAnimationFrame(this.animation.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    for (let i = 0; i < this.subContent.length; i++) {
      const item = this.subContent[i];
      item.resize(this.stageWidth, this.stageHeight, i);
    }
  }

  animation(t) {
    requestAnimationFrame(this.animation.bind(this));
    this.resize();
  }

  mouseMove(e) {
    // console.log(e.clientX, e.clientY);
  }
}

window.onload = () => {
  new App();
};
