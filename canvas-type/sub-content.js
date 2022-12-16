export class SubContent {
  constructor(src, ctx) {
    this.ctx = ctx;
    this.isLoaded = false;
    this.imgPos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.image = new Image();
    this.image.src = src;
    this.image.onload = () => {
      this.isLoaded = true;
      this.drawImage();
    };
  }
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    if (this.isLoaded) {
      this.drawImage();
    }
  }

  drawImage() {
    const stageRatio = this.stageWidth / this.stageHeight;
    const imgRatio = this.image.width / this.image.height;

    this.imgPos.width = this.stageWidth / 2;
    this.imgPos.height = this.stageHeight / 2;

    if (imgRatio > stageRatio) {
      this.imgPos.height = Math.round(
        this.image.height * (this.stageWidth / 2 / this.image.width)
      );
      this.imgPos.x = Math.round(this.stageWidth - this.imgPos.width) / 2;
      this.imgPos.y = Math.round(this.stageHeight - this.imgPos.height) / 2;
    } else {
      this.imgPos.width = Math.round(
        this.image.width * (this.stageHeight / 2 / this.image.height)
      );
      this.imgPos.x = Math.round(this.stageWidth - this.imgPos.width) / 2;
      this.imgPos.y = Math.round(this.stageHeight - this.imgPos.height) / 2;
    }

    console.log(
      this.imgPos.x,
      this.imgPos.y,
      this.stageHeight,
      this.imgPos.height
    );
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.imgPos.x,
      this.imgPos.y,
      this.imgPos.width,
      this.imgPos.height
    );
  }
}
