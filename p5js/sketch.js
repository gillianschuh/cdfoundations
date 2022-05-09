function setup() {
  createCanvas(windowWidth-16, windowHeight-16);
  background(220);

}

function draw() {
  ellipse(10,10,10,10);
  ellipse(mouseX,mouseY,10,10);
  ellipse(width/2,height/2,10,10);
  for ( let y = 0 ; y < height ; i+=30 ) {
    for ( let i = 0 ; i < width ; i+=30 ) {
      ellipse( i, 20, 20, 20);
  }
}
