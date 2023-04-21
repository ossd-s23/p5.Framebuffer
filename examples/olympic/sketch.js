let blurRenderer
let s = 0.0;
let a = 0.0;

var z = 500;
var easing = 0.05;
var targetZ = 0

function setup() {
  createCanvas(1000, 500, WEBGL);
  pixelDensity(2);
  blurRenderer = createGaussianBlurRenderer({ antialias: true })
}

function draw() {
  a = a + 0.02;
  s = cos(a) * 2;

  var dz = targetZ - z;
  if(abs(dz) > 1) {
    z += dz * easing;
  }

  blurRenderer.draw(() => {
    clear()
    push()
    background('white')
    noStroke()
    lights()

    push()
    fill('#51D2F1')
    translate(-150, -45, z);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#000000')
    translate(0, -45, z);
    rotateZ(frameCount * 0.01);
    // rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#EE4B4B')
    translate(150, -45, z);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#FAFA00')
    translate(-75, 45, z);
    rotateZ(frameCount * 0.01);
    // rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#72FA00')
    translate(75, 45, z);
    // rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()


    pop()
  })
}

function keyPressed() {
  if(keyCode == UP_ARROW)
  {
    console.log('pressed');
    targetZ = z + 200; 
  }

  if(keyCode == DOWN_ARROW)
  {
    console.log('pressed');
    targetZ = z - 200; 
  }
}
