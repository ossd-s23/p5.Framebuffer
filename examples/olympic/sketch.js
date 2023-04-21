let blurRenderer

function setup() {
  createCanvas(1000, 500, WEBGL)
  pixelDensity(2)
  blurRenderer = createGaussianBlurRenderer({ antialias: true })
}

function draw() {
  blurRenderer.draw(() => {
    clear()
    push()
    background(255)
    noStroke()
    lights()
 

    push()
    fill('#51D2F1')
    translate(0, 0, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#000000')
    translate(150, 0, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#EE4B4B')
    translate(300, 0, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#FAFA00')
    translate(75, 90, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#72FA00')
    translate(225, 90, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()


   

    pop()
  })
}
