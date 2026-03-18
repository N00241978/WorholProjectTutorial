let marilyn;
let img;

function preload() {
  img = loadImage("data/warholPic.jpg");
}

function setup() {
  createCanvas(500, 500);
  rectMode(CORNER);
  ellipseMode(CENTER);
  colorMode(HSB);

  marilyn = new DrawPic(
    img,
    0,
    0,
    500,
    500,
    10,
    0,
    0,
  );

}

function draw() {
  background(0, 0, 100);

  marilyn.bgColor = (marilyn.bgColor + 1) % 360;
  marilyn.fColor = (marilyn.bgColor + 90) % 360;

  marilyn.render();

}


