'use strict'

// define Canvas
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
const w = canvas.width = 400;
const h = canvas.height = 500;


// function startScene() {

// }

// function instructionScene() {

// }

// document.addEventListener("click", function () {
//   ctx.rect(0, 0, w, h);
//   ctx.fill();
// })

function myGameArea() {
  document.body.insertBefore(canvas, document.body.childNodes[0]);
  setInterval(animateGameArea, 1);
}

// create a class blueprint for moving components
class component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  update() {
    let grd = ctx.createLinearGradient(0, 0, 0, 500);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, this.color);
    ctx.fillStyle = grd;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


// creating track lines
class trackLines {
  constructor(x1, y1, x2, y2, strokeStyle) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.strokeStyle = "black";
  }
  drawLine() {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
    ctx.closePath();
  }
}

// generating class instances
const redGamePiece = new component(50, 50, "red", 15, 10);
const blueGamePiece = new component(50, 50, "blue", 90, 10);
const greenGamePiece = new component(50, 50, "green", 175, 10);
const yellowGamePiece = new component(50, 50, "yellow", 255, 10);
const purpleGamePiece = new component(50, 50, "purple", 335, 10);

const line1 = new trackLines(40, 0, 40, 500);
const line2 = new trackLines(120, 0, 120, 500);
const line3 = new trackLines(200, 0, 200, 500);
const line4 = new trackLines(280, 0, 280, 500);
const line5 = new trackLines(360, 0, 360, 500);


function randomSpeed() {
  let power = Math.floor(Math.random() * 10)
  let num = Math.floor(Math.random() * 5 + power)
  console.log(power)
  console.log(num)
}
randomSpeed()

let power = '-' + Math.floor(Math.random() * 1000) + 'px'
console.log(power)

// document.getElementById("key").animate([
//   // keyframes
//   {
//     transform: 'translateY(0px)'
//   },
//   {
//     transform: 'translateY(-200px)'
//   }
// ], {
//   // timing options
//   duration: 500,
//   iterations: Infinity
// });


function animateGameArea() {
  // can improve this random speed
  let num = Math.floor((Math.random() * 5))
  let num2 = Math.floor((Math.random() * 6))
  let num3 = Math.floor((Math.random() * 3))
  let num4 = Math.floor((Math.random() * 4.5))
  let num5 = Math.floor((Math.random() * 4))

  redGamePiece.y += num;
  blueGamePiece.y += num2;
  greenGamePiece.y += num3;
  yellowGamePiece.y += num4;
  purpleGamePiece.y += num5;

  ctx.clearRect(0, 0, w, h);
  redGamePiece.update();
  blueGamePiece.update();
  greenGamePiece.update();
  yellowGamePiece.update();
  purpleGamePiece.update();

  line1.drawLine();
  line2.drawLine();
  line3.drawLine();
  line4.drawLine();
  line5.drawLine();
}

myGameArea()
// const element = document.getElementById('key');
// let start;
// function step(timestamp) {
//   if (start === undefined)
//     start = timestamp;
//   const elapsed = timestamp - start;

//   // `Math.min()` is used here to make sure that the element stops at exactly 400px.
//   element.style.transform = 'translateY(' + Math.min(0.1 * elapsed, 400) + 'px)';

//   if (elapsed < 4000) { // Stop the animation after 2 seconds
//     window.requestAnimationFrame(step);
//   }
// }

// window.requestAnimationFrame(step);

let gameScore = 0;



// EventListeners
let numOfButtons = document.querySelectorAll("#key").length;

// mouse-click eventlistener
for (let i = 0; i < numOfButtons; i++) {
  document.querySelectorAll("#key")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML)
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// keypress eventlistener
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "a":
      let btnA = new Audio("sounds/correctSound.mp3");
      btnA.play();
      break;

    case "s":
      let btnB = new Audio("sounds/correctSound.mp3");
      btnB.play();
      break;

    case "d":
      let btnD = new Audio('sounds/correctSound.mp3');
      btnD.play();
      break;

    case "f":
      let btnF = new Audio('sounds/correctSound.mp3');
      btnF.play();
      break;

    case "g":
      let btnH = new Audio('sounds/wrongSound.mp3');
      btnH.play();
      break;

    default:
      console.log(key);

  }
}

// some button effects by changing css class
function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed_" + key);

  setTimeout(function () {
    activeButton.classList.remove("pressed_" + key);
  }, 200);
}