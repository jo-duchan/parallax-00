import { SubContent } from "./sub-content.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.subContent = [
      new SubContent("/assets/img-01.png", this.ctx),
      new SubContent("/assets/img-02.png", this.ctx),
    ];

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animation.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
    // this.subContent.resize(this.stageWidth, this.stageHeight);
    for (let i = 0; i < this.subContent.length; i++) {
      this.subContent[i].resize(this.stageWidth, this.stageHeight);
      console.log(this.subContent);
    }
  }

  animation(t) {
    requestAnimationFrame(this.animation.bind(this));

    // console.log("hi");
  }
}

window.onload = () => {
  new App();
};
