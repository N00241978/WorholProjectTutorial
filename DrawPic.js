class DrawPic {
  constructor(img, x, y, w, h, step, bgColor, fColor) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.step = step ?? 20;
    this.bgColor = bgColor;
    this.fColor = fColor;
  }

  render() {
    fill(this.bgColor, 100, 100);
    rect(this.x, this.y, this.w, this.h);

    if (mouseX <= 0) {
      mouseX = 300;
    }

    console.log(mouseX);

    const mouseXFactor = map(mouseX, 0, this.w, 0.05, 1);
    const mouseYFactor = map(mouseY, 0, this.h, 0.05, 1);

    const tileWidth = this.w / this.img.width;
    const tileHeight = this.h / this.img.height;

    img.loadPixels(); // IMPORTANT: load once per frame

    for (let y = 0; y < this.img.height; y += this.step) {
      for (let x = 0; x < this.img.width; x += this.step) {
        const index = (x + y * this.img.width) * 4;

        const r = this.img.pixels[index];
        const g = this.img.pixels[index + 1];
        const b = this.img.pixels[index + 2];

        const greyscale = round(r * 0.222 + g * 0.707 + b * 0.071);

        const posX = x * tileWidth;
        const posY = y * tileHeight;

        fill(this.fColor, 100, 100);
        noStroke();

        let r2 = 1.1284 * sqrt(tileWidth * tileWidth * (1 - greyscale / 255));

        r2 *= mouseXFactor * 20;

        ellipse(posX, posY, r2, r2);

      }
    }
  }
}
