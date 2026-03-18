let marilyn;
let marilyns = [];
let img;
let picAmount = 4;
let picW = 250;
let picH = 250;

function preload() {
  img = loadImage("data/warholPic.jpg");
}

function setup() {
  createCanvas(500, 500);
  rectMode(CORNER);
  ellipseMode(CENTER);
  colorMode(HSB);

  let cols = Math.ceil(Math.sqrt(picAmount));
  let rows = Math.ceil(picAmount / cols);

  let picW = width / cols;
  let picH = height / rows;

  let autoStep = picW / 10;

  for (let i = 0; i < picAmount; i++) {
    let x = (i % cols) * picW;
    let y = Math.floor(i / cols) * picH;

    let marilyn = new DrawPic(img, x, y, picW, picH, autoStep, 0, 0);
    marilyns.push(marilyn);
  }
}

function draw() {
  background(0, 0, 100);

  for (let marilyn of marilyns) {
    marilyn.bgColor = (marilyn.bgColor + 1) % 360;
    marilyn.fColor = (marilyn.bgColor + 90) % 360;

    marilyn.render();
  }

  // noLoop();
}
