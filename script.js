// 'use strict'

function startGame() {
    redGamePiece = new component(50, 50, "red", 15, 10);
    blueGamePiece = new component(50, 50, "blue", 90, 10);
    greenGamePiece = new component(50, 50, "green", 175, 10);
    yellowGamePiece = new component(50, 50, "yellow", 255, 10);
    purpleGamePiece = new component(50, 50, "purple", 335, 10);
    line1 = new trackLines(40, 0, 40, 500);
    line2 = new trackLines(120, 0, 120, 500);
    line3 = new trackLines(200, 0, 200, 500);
    line4 = new trackLines(280, 0, 280, 500);
    line5 = new trackLines(360, 0, 360, 500);
    myGameArea.start();
}

let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 400;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function trackLines(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.strokeStyle = "black";
    this.drawLine = function () {
        ctx.beginPath();
        // ctx.lineWidth = "2";
        // ctx.strokeStyle = "black";
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        // ctx.closePath();
    }
}

function updateGameArea() {

    // can improve this random movement
    let num = Math.floor((Math.random() * 1) + 5)
    let num2 = Math.floor((Math.random() * 1) + 6)
    let num3 = Math.floor((Math.random() * 1) + 3)
    let num4 = Math.floor((Math.random() * 1) + 4.5)
    myGameArea.clear();
    redGamePiece.y += num;
    blueGamePiece.y += num2;
    greenGamePiece.y += num3;
    yellowGamePiece.y += num4;
    purpleGamePiece.y += num;
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

startGame()


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
      let tom1 = new Audio("sounds/correctSound.mp3");
      tom1.play();
      break;

    case "s":
      let tom2 = new Audio("sounds/correctSound.mp3");
      tom2.play();
      break;

    case "d":
      let tom3 = new Audio('sounds/correctSound.mp3');
      tom3.play();
      break;

    case "f":
      let tom4 = new Audio('sounds/correctSound.mp3');
      tom4.play();
      break;

    case "g":
      let snare = new Audio('sounds/wrongSound.mp3');
      snare.play();
      break;

    default:
      console.log(key);

  }
}

// some button effects
function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);

}