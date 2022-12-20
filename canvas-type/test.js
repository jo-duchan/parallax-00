class Test {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.video = document.querySelector("video");

    this.imgPos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animation.bind(this));
  }

  resize() {
    // console.log(this.video.videoWidth);
    // console.dir(this.video);
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    const stageRatio = this.stageWidth / this.stageHeight;
    const imgRatio = this.video.videoWidth / this.video.videoHeight;

    if (imgRatio > stageRatio) {
      this.imgPos.width = Math.round(
        this.video.videoWidth * (this.stageHeight / this.video.videoHeight)
      );

      this.imgPos.x = Math.round(this.stageWidth - this.imgPos.width);
      //   this.imgPos.y = Math.round(this.stageHeight - this.imgPos.height);
    } else {
      this.imgPos.height = Math.round(
        this.video.videoHeight * (this.stageWidth / this.video.videoWidth)
      );
      //   this.imgPos.x = Math.round(this.stageWidth - this.imgPos.width);
      this.imgPos.y = Math.round(this.stageHeight - this.imgPos.height);
    }

    this.ctx.drawImage(
      this.video,
      0,
      0,
      this.video.videoWidth,
      this.video.videoHeight,
      this.imgPos.x,
      this.imgPos.y,
      this.imgPos.width,
      this.imgPos.height
    );
  }

  animation(t) {
    requestAnimationFrame(this.animation.bind(this));
    this.resize();
  }
}

window.onload = () => {
  new Test();
};
