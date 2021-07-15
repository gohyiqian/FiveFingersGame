'use strict'

// define Canvas
// let canvas = document.createElement("canvas");
// let ctx = canvas.getContext("2d");
// const w = canvas.width = 400;
// const h = canvas.height = 500;
//let redpieces = [];
let gameBlocks = [];

// function startScene() {

// }

// function instructionScene() {

// }

// document.addEventListener("click", function () {
//   ctx.rect(0, 0, w, h);
//   ctx.fill();
// })

// function myGameArea() {
//   document.body.insertBefore(canvas, document.body.childNodes[0]);
//   setInterval(animateGameArea, 1);
// }

// object for canvas element
const myGameCanvas = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 400;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNum = 0;
    // window.setInterval(function, milliseconds);
    //this.interval = setInterval(animateGame, 10); //update every 10th millisec => 100 times per sec
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

// create a class for constructing more components
class component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  update() {
    let ctx = myGameCanvas.context;
    let grd = ctx.createLinearGradient(0, 0, 0, 500);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, this.color);
    ctx.fillStyle = grd;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


function createComponents(num) {
  for (let i = 0; i < num; i++) {
    let w = 50;
    let h = 50;
    let c = ['red', 'blue', 'green', 'yellow', 'purple'];
    let x = [15, 90, 175, 255, 335];
    let y = 10;

    let eachBlock = new component(w, h, c[i], x[i], y)
    gameBlocks.push(eachBlock);
  }
  requestAnimationFrame(animateGame);
}

createComponents(5);
console.log(gameBlocks)

// class instances
// const redGamePiece = new component(50, 50, "red", 15, 10);
// const blueGamePiece = new component(50, 50, "blue", 90, 10);
// const greenGamePiece = new component(50, 50, "green", 175, 10);
// const yellowGamePiece = new component(50, 50, "yellow", 255, 10);
// const purpleGamePiece = new component(50, 50, "purple", 335, 10);

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
    let ctx = myGameCanvas.context;
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
    ctx.closePath();
  }
}

// write a loop for this when free
const line1 = new trackLines(40, 0, 40, 500);
const line2 = new trackLines(120, 0, 120, 500);
const line3 = new trackLines(200, 0, 200, 500);
const line4 = new trackLines(280, 0, 280, 500);
const line5 = new trackLines(360, 0, 360, 500);


// function randomSpeed() {
//   let power = Math.floor(Math.random() * 10)
//   let num = Math.floor(Math.random() * 5 + power)
//   console.log(power)
//   console.log(num)
// }
// randomSpeed()

// let power = '-' + Math.floor(Math.random() * 1000) + 'px'
// console.log(power)


function animateGame() {
  // can improve this random speed
  //let num = Math.floor((Math.random() * 5))
  // let num2 = Math.floor((Math.random() * 6))
  // let num3 = Math.floor((Math.random() * 3))
  // let num4 = Math.floor((Math.random() * 4.5))
  // let num5 = Math.floor((Math.random() * 4))

  // //redGamePiece.y += num;
  // blueGamePiece.y += num2;
  // greenGamePiece.y += num3;
  // yellowGamePiece.y += num4;
  // purpleGamePiece.y += num5;

  myGameCanvas.clear();
  // myGameCanvas.frameNum += 1;

  // if (myGameCanvas.frameNum == 1) {
  //   redpieces.push(new component(50, 50, "red", 15, 10))
  // }
  // for (let i = 0; i < redpieces.length; i++) {
  //   redpieces[i].y += 1;
  //   redpieces[i].update();
  // }

  //redGamePiece.update();
  // blueGamePiece.update();
  // greenGamePiece.update();
  // yellowGamePiece.update();
  // purpleGamePiece.update();


  for (let i = 0; i < gameBlocks.length; i++) {
    gameBlocks[i].y += 1;
    gameBlocks[i].update();
  }

  line1.drawLine();
  line2.drawLine();
  line3.drawLine();
  line4.drawLine();
  line5.drawLine();

  requestAnimationFrame(animateGame);
}
myGameCanvas.start()
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

setInterval(myTimer, 500);

// Add Time
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

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