let blurRenderer

function setup() {
  createCanvas(1000, 500, WEBGL)
  pixelDensity(2)
  blurRenderer = createGaussianBlurRenderer({ antialias: true })
  blurRenderer.setSamples(30)
	blurRenderer.setDof(100)
	blurRenderer.setIntensity(0.05)
}

function draw() {
  const t = millis();
	const flicker = map(noise(t * 0.01), 0, 1, 0.2, 1);
  blurRenderer.draw(() => {
    clear()
    push()
    background(0)
    noStroke()
    ambientLight(82, 69, 84)
		ambientMaterial(255)
		specularMaterial(250)
		pointLight(112*flicker, 210*flicker, 255*flicker, 0, 150, 150);
 

    push()
    fill('#51D2F1')
    translate(-150, -45, 0);
    // rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#000000')
    translate(0, -45, 0);
    rotateZ(frameCount * 0.01);
    // rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#EE4B4B')
    translate(150, -45, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    torus(70, 10);
    blurRenderer.focusHere();
    pop()

    push()
    fill('#FAFA00')
    translate(-75, 45, 0);
    rotateZ(frameCount * 0.01);
    // rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()

    push()
    fill('#72FA00')
    translate(75, 45, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    torus(70, 10);
    pop()


   

    pop()
  })
}
