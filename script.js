'use strict'

let canvas = document.createElement("canvas");
document.body.insertBefore(canvas, document.body.childNodes[0]);
let ctx = canvas.getContext("2d");
const cw = canvas.width = 380;
const ch = canvas.height = 500;
let gameBlocks = [];
let lines = [];
let startGame = document.getElementById('move');
let newGame = document.getElementById('switch');
let gameStatus;
let inputSong;


startGame.addEventListener('click', function (e) {
  if (startGame.innerHTML == "PRESS TO PLAY DEFAULT SONG" || startGame.innerHTML == "GAME OVER") {
    // checkGame()
    gameStatus = window.setInterval(animateGame, 7);
    document.getElementById("speed").innerHTML = '7 ms';
    //gameStatus = animateGame();
    //document.getElementById('music').play();
    startGame.innerHTML = "PRESS TO PAUSE";
  } else {
    //document.getElementById('music').pause();
    window.clearInterval(gameStatus);
    //window.cancelAnimationFrame(gameStatus)
    startGame.innerHTML = "PRESS TO PLAY DEFAULT SONG";
  }
});


// creating a Grid for starting scene
// draw vertical lines
function createGrid() {
  for (let x = 0; x < ch; x += 38) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, ch);
  }
  //draw horizontal lines
  for (let y = 0; y < ch; y += 50) {
    ctx.moveTo(0, y);
    ctx.lineTo(ch, y);
  }
  ctx.strokeStyle = "lightgrey";
  ctx.setLineDash([10, 5]);
  ctx.stroke();
}
createGrid()

function createText() {
  ctx.font = "20px Georgia";
  let txt = "Press button below to begin!"
  ctx.fillText(txt, (cw - ctx.measureText(txt).width) * 0.5, 250);
}
createText()


let maryHadALittleLamb = [
  'E', '', 'D', '', 'C', '', 'D', '', 'E', '', 'E', '', 'E', '', '', 'D', '', 'D', '', 'D', '', '', 'E', '', 'G', '', 'G', '', '',
  'E', '', 'D', '', 'C', '', 'D', '', 'E', '', 'E', '', 'E', '', 'E', '', 'D', '', 'D', '', 'E', '', 'D', '', 'C', '', '', '', '',
  'E', 'D', 'C', 'D', 'E', 'E', 'E', '', 'D', 'D', 'D', '', 'E', 'G', 'G', '',
  'E', 'D', 'C', 'D', 'E', 'E', 'E', 'E', 'D', 'D', 'E', 'D', 'C', '', '', '',
]

let pianoMan = [
  'G', 'G', 'G', 'G', '', 'F', '', 'E', '', 'F', '', 'E', '', 'C', '',
  'C', 'C', 'C', 'C', '', 'D', 'D', '', 'E', '', 'F', '',
  'G', 'G', 'G', 'G', '', 'F', '', 'E', '', 'F', '', 'E', '', 'C', '',
  'C', 'C', 'C', '', 'F', '', 'E', '', 'C', 'C'
]

let jingleBells = [
  'E', 'E', 'E', '', 'E', 'E', 'E', '', 'E', '', 'G', '', 'C', '', 'D', '', 'E', '',
  'F', 'F', 'F', '', 'F', 'F', '', 'E', 'E', '', 'E', 'E', 'E', '', 'D', 'D', '', 'E', '', 'D', '', 'G', '',
  'E', 'E', 'E', '', 'E', 'E', 'E', '', 'E', '', 'G', '', 'C', '', 'D', '', 'E', '',
  'F', 'F', 'F', '', 'F', 'F', '', 'E', 'E', '', 'E', 'E', '', 'G', 'G', '', 'F', '', 'D', '', 'C'
]

let wakingUpInVegas = [
  'G', 'G', '', 'F', 'F', '', 'E', 'E', '', 'D', 'D', '', 'C', '', 'E', '', 'D', '', 'C', '',
  'C', 'C', '', 'C', 'C', '', 'C', 'C', '', 'C', 'C', 'C', '', 'E', '', 'D', '',
  'G', 'G', '', 'F', 'F', '', 'E', 'E', '', 'D', 'D', '', 'C', '', 'E', '', 'D', '', 'C', '',
  'C', 'C', '', 'C', 'C', '', 'C', 'C', '', 'C', 'C', 'C', '', 'E', '', 'D', '', 'C'
]

let dontStopBelievin = [
  'C', '', 'E', '', 'C', '', 'D', 'D', '', 'E', 'C', 'C', 'C', 'C', '', 'G', 'G', '', 'E', '',
  'D', 'C', '', 'E', '', 'C', '', 'D', 'D', '', 'E', '', 'D', '', 'C', '', 'D', '', 'E', '', 'C'
]

let shutUpandDance = [
  'C', 'C', 'C', '', 'C', '', 'C', '', 'C', '', 'C', 'C', 'C', '', 'C', '', 'C', '', 'D', '',
  'C', 'C', 'C', '', 'C', '', 'C', '', 'C', '', 'C', 'C', '', 'G', 'G', '', 'E', '', 'D', 'C', 'C'
];

let allSongsInOne = [
  'C', '', 'D', '', 'E', '', 'F', '', 'G', '', '', 'G', 'F', 'E', 'D', 'C', '', '', '',
  'E', '', 'D', '', 'C', '', 'D', '', 'E', '', 'E', '', 'E', '', '', 'D', '', 'D', '', 'D', '', '', 'E', '', 'G', '', 'G', '', '',
  'E', '', 'D', '', 'C', '', 'D', '', 'E', '', 'E', '', 'E', '', 'E', '', 'D', '', 'D', '', 'E', '', 'D', '', 'C', '', '', '', '',
  'E', 'D', 'C', 'D', 'E', 'E', 'E', '', 'D', 'D', 'D', '', 'E', 'G', 'G', '',
  'E', 'D', 'C', 'D', 'E', 'E', 'E', 'E', 'D', 'D', 'E', 'D', 'C', '', '', '',
  'E', 'E', 'E', '', 'E', 'E', 'E', '', 'E', '', 'G', '', 'C', '', 'D', '', 'E', '',
  'F', 'F', 'F', '', 'F', 'F', '', 'E', 'E', '', 'E', 'E', 'E', '', 'D', 'D', '', 'E', '', 'D', '', 'G', '',
  'E', 'E', 'E', '', 'E', 'E', 'E', '', 'E', '', 'G', '', 'C', '', 'D', '', 'E', '',
  'F', 'F', 'F', '', 'F', 'F', '', 'E', 'E', '', 'E', 'E', '', 'G', 'G', '', 'F', '', 'D', '', 'C', '', '',
  'G', 'G', '', 'F', 'F', '', 'E', 'E', '', 'D', 'D', '', 'C', '', 'E', '', 'D', '', 'C', '',
  'C', 'C', '', 'C', 'C', '', 'C', 'C', '', 'C', 'C', 'C', '', 'E', '', 'D', '',
  'G', 'G', '', 'F', 'F', '', 'E', 'E', '', 'D', 'D', '', 'C', '', 'E', '', 'D', '', 'C', '',
  'C', 'C', '', 'C', 'C', '', 'C', 'C', '', 'C', 'C', 'C', '', 'E', '', 'D', '', 'C', '', '',
  'C', '', 'E', '', 'C', '', 'D', 'D', '', 'E', 'C', 'C', 'C', 'C', '', 'G', 'G', '', 'E', '',
  'D', 'C', '', 'E', '', 'C', '', 'D', 'D', '', 'E', '', 'D', '', 'C', '', 'D', '', 'E', '', 'C', '', '',
  'C', 'C', 'C', '', 'C', '', 'C', '', 'C', '', 'C', 'C', 'C', '', 'C', '', 'C', '', 'D', '',
  'C', 'C', 'C', '', 'C', '', 'C', '', 'C', '', 'C', 'C', '', 'G', 'G', '', 'E', '', 'D', 'C', 'C', '', '',
  'G', 'G', 'G', 'G', '', 'F', '', 'E', '', 'F', '', 'E', '', 'C', '',
  'C', 'C', 'C', 'C', '', 'D', 'D', '', 'E', '', 'F', '',
  'G', 'G', 'G', 'G', '', 'F', '', 'E', '', 'F', '', 'E', '', 'C', '',
  'C', 'C', 'C', '', 'F', '', 'E', '', 'C', 'C', ''
]

// Create Own Songs Section
let createBtn = document.querySelectorAll("#create");
for (let i = 0; i < createBtn.length; i++) {
  createBtn[i].addEventListener("click", function (event) {
    let buttonInnerHTML = this.innerHTML;
    let target = document.getElementById("createSong");
    let newSpan = document.createElement('span');
    newSpan.setAttribute("id", "createSpan");
    const newContent = document.createTextNode(buttonInnerHTML);
    newSpan.append(newContent);
    target.append(newSpan);
  });
}

inputSong = spliceIntoFive(allSongsInOne, 5)
newGame.addEventListener("click", function (event) {
  if (newGame.innerHTML == "PRESS TO PLAY YOUR SONG" || newGame.innerHTML == "GAME OVER") {
    let newAddedNotes = document.querySelectorAll('#createSpan');

    let newInputSong = [];
    for (let i = 0; i < newAddedNotes.length; i++) {
      newInputSong.push(newAddedNotes[i].innerHTML);
      console.log(newInputSong)
      if (newAddedNotes.innerHTML !== 0) {
        inputSong = spliceIntoFive(newInputSong, 5)
      }
    }
    // gameStatus = window.setInterval(animateGame, 8);
    // document.getElementById("speed").innerHTML = '8 ms';
    newGame.innerHTML = "PRESS TO PAUSE";
  } else {
    // window.clearInterval(gameStatus);
    newGame.innerHTML = "PRESS TO PLAY YOUR SONG";
  }
});

// let nwSong = document.getElementsByTagName('span');
// console.log(nwSong)

// var allSpans = document.getElementsByTagName('span');
// var arrayNumbers = [];

// function pushNewSong() {
//   for (var i = 0; i < allSpans.length; i++) {
//     arrayNumbers.push(allSpans[i].innerHTML);

//     // let test = arrayNumbers.splice(0, 1)
//     // console.log(test)
//   }
//   return arrayNumbers
// }


// function checkGame() {
//   if (newGame.innerHTML !== 0) {
//     console.log("yes is 0")
//   }
// }

// splice songs into arrays of 5 letters
function spliceIntoFive(arr, chunkSize) {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res
}
// let inputSong = spliceIntoFive(allSongsInOne, 5)

// sort the song letters arrays
function prepList(input) {
  let list = [];
  const length = input.length; // this was added
  for (let i = 0; i < length; i++) {
    list.push(addSpace(input));
    input.shift();
  }
  let merged = [].concat.apply([], list);
  console.log(merged);
  //console.log(`# of items in merged: ${merged.length}`)
  return merged;
}

let newSong = prepList(inputSong);
console.log(newSong.length)

function addSpace(arr) {
  let newList = []
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
      // to refresh the x everytime as splice will alter original x
      let x = ['', '', '', '']
      if (arr[i][j] == 'C') {
        x.splice(0, 0, arr[i][j]);
        newList.push(x);
      } else if (arr[i][j] == 'D') {
        x.splice(1, 0, arr[i][j]);
        newList.push(x);
      } else if (arr[i][j] == 'E') {
        x.splice(2, 0, arr[i][j]);
        newList.push(x);
      } else if (arr[i][j] == 'F') {
        x.splice(3, 0, arr[i][j]);
        newList.push(x);
      } else if (arr[i][j] == 'G') {
        x.splice(4, 0, arr[i][j]);
        newList.push(x);
      } else if (arr[i][j] == '') {
        x.push('');
        newList.push(x);
      }
    }
    return newList
  }
}

// create a class for constructing components
class Component {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    //this.incrementer = Math.floor(Math.random() * 50 + 50)
    this.incrementer = 1; //stepsize
  }

  update() {
    this.y += this.incrementer;
    let grd = ctx.createLinearGradient(0, 0, 0, 500);
    grd.addColorStop(0, "transparent");
    grd.addColorStop(0.4, this.color);
    grd.addColorStop(1, this.color);
    ctx.fillStyle = grd;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //ctx.clearRect(this.x, this.y + 10, this.width, this.height);
  }
}

// for test
// function createComponents(num) {
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < 5; j++) {
//       let width = 50;
//       let height = 50;
//       let colors = [
//         ['red', 'transparent', 'transparent', 'transparent', 'transparent'],
//         ['red', 'transparent', 'transparent', 'transparent', 'transparent'],
//         ['red', 'transparent', 'transparent', 'transparent', 'transparent'],
//         ['transparent', 'transparent', 'transparent', 'yellow', 'transparent'],
//         ['transparent', 'transparent', 'transparent', 'transparent', 'purple'],
//         ['transparent', 'transparent', 'transparent', 'transparent', 'purple'],
//         ['transparent', 'transparent', 'green', 'transparent', 'transparent'],
//         ['transparent', 'transparent', 'green', 'transparent', 'transparent'],
//         ['transparent', 'blue', 'transparent', 'transparent', 'transparent'],
//         ['transparent', 'blue', 'transparent', 'transparent', 'transparent'],

//       ];
//       let x = [
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//         [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
//       ];
//       let y = [
//         [0, 0, 0, 0, 0],
//         [-60, -60, -60, -60, -60],
//         [-120, -120, -120, -120, -120],
//         [-180, -180, -180, -180, -180],
//         [-240, -240, -240, -240, -240],
//         [-300, -300, -300, -300, -300],
//         [-360, -360, -360, -360, -360],
//         [-420, -420, -420, -420, -420],
//         [-480, -480, -480, -480, -480],
//         [-540, -540, -540, -540, -540],
//       ];

//       let eachBlock = new Component(x[i][j], y[i][j], width, height, colors[i][j])
//       gameBlocks.push(eachBlock);
//       //console.log(eachBlock)
//     }
//     //requestAnimationFrame(createComponents);
//   }
// }
// createComponents(10);

// Generate ColourList for constructing components
function createColorList(arr) {
  let colors = [];
  for (let i = 0; i < arr.length; i++) {
    //let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    if (arr[i] == 'C') {
      colors.push('red');
    } else if (arr[i] == 'D') {
      colors.push('blue');
    } else if (arr[i] == 'E') {
      colors.push('green');
    } else if (arr[i] == 'F') {
      colors.push('yellow');
    } else if (arr[i] == 'G') {
      colors.push('purple');
    } else if (arr[i] == '') {
      colors.push('transparent');
    }
  }
  return colors;
}

const newColorArr = newSong.map(createColorList);
// console.log(newColorArr)
// console.log(newColorArr.length)

// fixed x positions for every five groups of components
const x_input = [
  [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
  [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
  [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
  [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25],
  [cw * 0.1 - 25, cw * 0.3 - 25, cw * 0.5 - 25, cw * 0.7 - 25, cw * 0.9 - 25]
]

// Generating correct # of xPos for corresponding song length
function fillArray(value, len) {
  let posX = [];
  for (let i = 0; i < len; i++) {
    posX.push(value);
  }
  let merged = [].concat.apply([], posX)
  return merged;
}
const xPos = fillArray(x_input, newSong.length)
// console.log(xPos)

// Generating yPos for constructing components
let startPosY = [0, 0, 0, 0, 0]

function updatePosY(input) {
  return input - 60;
  // minus y-position by 60 for each component
}

function generatePosY() {
  let allPosY = []
  for (let i = 0; i < newSong.length; i++) {
    let newArray = startPosY.map(updatePosY)
    startPosY = newArray
    allPosY.push(newArray)
  }
  return allPosY
}
let yPos = generatePosY(); // nested arrays of all y-coordinates
console.log(yPos)

// create a position to check for ''
function checkPressCondition(input) {
  return input - 450;
}

function generateCorrectPress() {
  let allCorrectPosY = []
  for (let i = 0; i < newSong.length; i++) {
    let newArray = startPosY.map(checkPressCondition)
    startPosY = newArray
    allCorrectPosY.push(newArray)
  }
  return allCorrectPosY
}
let correctPos = generateCorrectPress();
console.log(correctPos);

function createComponents() {
  let width = 50;
  let height = 50;
  for (let i = 0; i < newSong.length; i++) {
    for (let j = 0; j < 5; j++) {
      let eachBlock = new Component(xPos[i][j], yPos[i][j], width, height, newColorArr[i][j])
      gameBlocks.push(eachBlock);
    }
  }
}
createComponents();
// console.log(gameBlocks)
// console.log(gameBlocks.length)

// create a class for constructing tracklines
class TrackLines {
  constructor(x1, y1, x2, y2, strokeStyle) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.strokeStyle = strokeStyle;
  }
  drawLine() {
    ctx.strokeStyle = "grey"
    ctx.beginPath();
    ctx.setLineDash([20, 5, 5, 5]);
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
    ctx.closePath();
  }
}
// constructing 5 tracklines
function createLines(num) {
  for (let i = 0; i < num; i++) {
    let x1 = [cw * 0.2, cw * 0.4, cw * 0.6, cw * 0.8, cw];
    let y1 = 0;
    let x2 = [cw * 0.2, cw * 0.4, cw * 0.6, cw * 0.8, cw];
    let y2 = ch;

    let eachLine = new TrackLines(x1[i], y1, x2[i], y2)
    lines.push(eachLine);
  }
}
createLines(5);

// animate
function animateGame() {
  ctx.clearRect(0, 0, cw, ch);
  for (let i = 0; i < gameBlocks.length; i++) {
    gameBlocks[i].update();
    if (gameBlocks[i].y > ch) {
      gameBlocks[i].y = -60 * newSong.length;
    }
  }
  for (let i = 0; i < lines.length; i++) {
    lines[i].drawLine();
  }
}
console.log(gameBlocks);
// console.log(gameBlocks.length);


// Add Time
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString('it-IT');
}
setInterval(myTimer, 0);

// Add EventListeners
let numOfButtons = document.querySelectorAll("#key").length;
let selectBtn = document.querySelectorAll("#key");


// mouse - click eventlistener
for (let i = 0; i < numOfButtons; i++) {
  document.querySelectorAll("#key")[i].addEventListener("click", function (event) {
    for (let i = 0; i < 1; i++) {
      let buttonInnerHTML = this.innerHTML;
      if (gameBlocks[i].y >= 0.85 * ch || gameBlocks[i].y <= ch) {
        makeCorrectSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        addScore(1)
        // } else if (gameBlocks[i].y > ch) {
        //   makeWrongSound(buttonInnerHTML);

      }
    }
  }, false);
}

// console.log(gameBlocks[0].y);

// keypress eventlistener
document.addEventListener("keydown", (event) => {
  for (let i = 0; i < 1; i++) {
    if (gameBlocks[i].y <= ch) {
      console.log(event.key)
      makeCorrectSound(event.key);
      buttonAnimation(event.key);
      addScore(1);
      event.stopPropagation();
      console.log(`${event.key}: correct`)
      // } else // difficult to track the wrong region as my y keep increasing
      //   makeWrongSound(event.key);
      // addScore(-1);
    }
  }
}, false);


function makeCorrectSound(key) {
  switch (key) {
    case "a":
      let btnA = new Audio("notes/notes_C4.mp3");
      btnA.play();
      break;

    case "s":
      let btnB = new Audio("notes/notes_D4.mp3");
      btnB.play();
      break;

    case "d":
      let btnC = new Audio('notes/notes_E4.mp3');
      btnC.play();
      break;

    case "f":
      let btnD = new Audio('notes/notes_F4.mp3');
      btnD.play();
      break;

    case "g":
      let btnE = new Audio('notes/notes_G4.mp3');
      btnE.play();
      break;

    default:
      console.log(key);
  }
}

function makeWrongSound(key) {
  switch (key) {
    case "a":
      let btnA = new Audio("sounds/wrongSound.mp3");
      btnA.play();
      break;

    case "s":
      let btnB = new Audio("sounds/wrongSound.mp3");
      btnB.play();
      break;

    case "d":
      let btnD = new Audio('sounds/wrongSound.mp3');
      btnD.play();
      break;

    case "f":
      let btnF = new Audio('sounds/wrongSound.mp3');
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

// button when clicked also changes class for 2ms
function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed_" + key);

  setTimeout(function () {
    activeButton.classList.remove("pressed_" + key);
  }, 200);
}

// Adding Score
let score = 0;

function addScore(x) {
  $({
    score: 0
  }).animate({
    score: x
  }, {
    duration: 1000,
    easing: "linear",
    step: function (now, fx) {
      $("#score").html(score + Math.floor(now));
    },
    queue: false,
    complete: function (now, fx) {
      score += x;
    }
  });
  $("#tag").fadeIn({
    duration: 700,
    easing: "linear",
    step: function (now, fx) {
      $(this).css("top", -55 * now + "px");
    }
  }).fadeOut({
    duration: 300,
    step: function (now, fx) {
      $(this).css("top", -55 * (2 - now) + "px");
    }
  });
}