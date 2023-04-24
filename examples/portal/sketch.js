let blurRenderer
let s = 0.0;
let a = 0.0;

var z = 500;
var easing = 0.05;
var targetZ = 0

let x = 0;

function setup() {
  createCanvas(1000, 500, WEBGL);
  pixelDensity(2);
  fbo = createFramebuffer();
}

function draw() {
  a = a + 0.02;
  s = cos(a) * 2;

  var dz = targetZ - z;
  if(abs(dz) > 1) {
    z += dz * easing;
  }

  fbo.draw(() => {
    clear()
    push()
    // background('white')
    noStroke()
    // lights()

    push()
    fill('#51D2F1')
    translate(-150, -45, z);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()


    pop()
  })


  clear()
  background("white");
  push()
  noStroke()


  push()
  fill('#72FA00')
  texture(fbo.depth);
  translate(-75, 45, z);
  rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  circle(0, 0, 100);
  pop()


  push()
  fill('#72FA00')
  texture(fbo.color);
  translate(75, 45, z);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  circle(0, 0, 150);
  pop()

  pop()
}
