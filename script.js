var x, y;
function setup() {
  createCanvas(400, 400);
  x = 40
  y = 40
}

function draw() {
  background(225);

  ellipse(x, y, 40, 40);
  x = x + 1;
  y = y + 1;

  if(x >= 400){
    x = 40;
  }
}