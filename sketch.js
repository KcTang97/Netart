 // 'use strict'

let button;


function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();
  button = select("#flip");
  button.class("button");
  button.mousePressed(buttonPressed);

  // botton.position(500, 500);
}

function draw() {
  // ellipse(mouseX, mouseY, 100);
}

function buttonPressed() {
  let body;
  body = select("body");
  body.style("background-image","url('image/tail.jpg')");
}
