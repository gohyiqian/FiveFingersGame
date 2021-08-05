![Guitar Image](/images/artboard.jpg)

# Five Notes Songs

[Try the Game Here](https://gohyiqian.github.io/GA-Project1/)

## An Overview

Hello!

Five Keys Songs is specially designed for people who do not have much music talent, like myself, but aspire to be able to play some simple piano notes to impress your friends and family. Songs that can be played using just 5 keys, namely 'C','D','E','F' and 'G', are being selected for this game so that anyone with no piano background can pick it up easily!

This game is a simple adaptation of the popular _Guitar Hero_ and _Piano Tiles_ games.
Players will time the descending target and receive points when they keypress 'A','S','D','F','G' or mouseclick at the correct timing.

The game is created using custom functions of HTML canvas element.
Canvas is an HTML element that allows a user to create graphics, on the fly, using Javascript. It can be used to create animations, interactive graphics, and browser games.
One thing to note is that the coordinate system for canvas starts from the top left.

Basic Animation Steps using canvas elements:

1. Draw the shapes to be animated
2. Define motion of shapes (transform in y-direction)
3. Clear the canvas using _clearRect_ function to remove previous frame
4. Update the canvas. To constantly update the canvas, we need to define a drawing loop using JavaScript timing function such as _setInterval_, _setTimeout_ or _requestAnimationFrame_ functions

## Motivation

Most of the Piano Tiles or Guitar Hero games most of us played before generate the tiles or blocks in a _randomised manner_. My attempt is to be able to _dictate the position_ of every single tiles or blocks played so the user can click each incoming tiles in sequence and play a song like playing a piano.

## Explanation

The input song will be an array containing the five keys 'C','D','E','F' and 'G' in various order. I have included ' ' as a way to space out the transition between notes. Most of the time are spent on sorting the input song arrays into a format that allow me to properly display the position of the components on the canvas.

#### Wireframe for Browser:

![Explanation Image](/images/Wireframe_browser.png)

#### Wireframe for Phone:

![Explanation Image](/images/Wireframe_phone.png)

#### Example of Input songs array:

```
let wakingUpInVegas = [
  'G', 'G', '', 'F', 'F', '', 'E', 'E', '', 'D', 'D', '', 'C', '', 'E', '', 'D', '', 'C', '',
  'C', 'C', '', 'C', 'C', '', 'C', 'C', '', 'C', 'C', 'C', '', 'E', '', 'D', '',
  'G', 'G', '', 'F', 'F', '', 'E', 'E', '', 'D', 'D', '', 'C', '', 'E', '', 'D', '', 'C', '',
  'C', 'C', '', 'C', 'C', '', 'C', 'C', '', 'C', 'C', 'C', '', 'E', '', 'D', '', 'C'
]
```

#### Sorted songs:

Using splice(), push(), shift(), concat() functions to sort.

```
0: (5) ["", "", "", "", "G"]
1: (5) ["", "", "", "", "G"]
2: (5) ["", "", "", "", ""]
3: (5) ["", "", "", "F", ""]
4: (5) ["", "", "", "F", ""]
5: (5) ["", "", "", "", ""]
6: (5) ["", "", "E", "", ""]
7: (5) ["", "", "E", "", ""]
```

#### Sorted y_Pos in sets of 5:

```
0: (5) [-60, -60, -60, -60, -60]
1: (5) [-120, -120, -120, -120, -120]
2: (5) [-180, -180, -180, -180, -180]
3: (5) [-240, -240, -240, -240, -240]
4: (5) [-300, -300, -300, -300, -300]
5: (5) [-360, -360, -360, -360, -360]
6: (5) [-420, -420, -420, -420, -420]
7: (5) [-480, -480, -480, -480, -480]
```

#### Fixed x_Pos in sets of 5:

```
0: (5) [13, 89, 165, 241, 317]
1: (5) [13, 89, 165, 241, 317]
2: (5) [13, 89, 165, 241, 317]
3: (5) [13, 89, 165, 241, 317]
4: (5) [13, 89, 165, 241, 317]
5: (5) [13, 89, 165, 241, 317]
6: (5) [13, 89, 165, 241, 317]
7: (5) [13, 89, 165, 241, 317]
```

#### Example Block components:

```
0: Component {x: 13, y: -60, width: 50, height: 50, color: "transparent", …}
1: Component {x: 89, y: -60, width: 50, height: 50, color: "transparent", …}
2: Component {x: 165, y: -60, width: 50, height: 50, color: "transparent", …}
3: Component {x: 241, y: -60, width: 50, height: 50, color: "transparent", …}
4: Component {x: 317, y: -60, width: 50, height: 50, color: "purple", …}
5: Component {x: 13, y: -120, width: 50, height: 50, color: "transparent", …}
6: Component {x: 89, y: -120, width: 50, height: 50, color: "transparent", …}
7: Component {x: 165, y: -120, width: 50, height: 50, color: "transparent", …}
8: Component {x: 241, y: -120, width: 50, height: 50, color: "transparent", …}
9: Component {x: 317, y: -120, width: 50, height: 50, color: "purple", …}
10: Component {x: 13, y: -180, width: 50, height: 50, color: "transparent", …}
11: Component {x: 89, y: -180, width: 50, height: 50, color: "transparent", …}
12: Component {x: 165, y: -180, width: 50, height: 50, color: "transparent", …}
13: Component {x: 241, y: -180, width: 50, height: 50, color: "transparent", …}
14: Component {x: 317, y: -180, width: 50, height: 50, color: "transparent", …}
15: Component {x: 13, y: -240, width: 50, height: 50, color: "transparent", …}
16: Component {x: 89, y: -240, width: 50, height: 50, color: "transparent", …}
17: Component {x: 165, y: -240, width: 50, height: 50, color: "transparent", …}
18: Component {x: 241, y: -240, width: 50, height: 50, color: "yellow", …}
19: Component {x: 317, y: -240, width: 50, height: 50, color: "transparent", …}
20: Component {x: 13, y: -300, width: 50, height: 50, color: "transparent", …}
21: Component {x: 89, y: -300, width: 50, height: 50, color: "transparent", …}
22: Component {x: 165, y: -300, width: 50, height: 50, color: "transparent", …}
23: Component {x: 241, y: -300, width: 50, height: 50, color: "yellow", …}
24: Component {x: 317, y: -300, width: 50, height: 50, color: "transparent", …}
25: Component {x: 13, y: -360, width: 50, height: 50, color: "transparent", …}
26: Component {x: 89, y: -360, width: 50, height: 50, color: "transparent", …}
27: Component {x: 165, y: -360, width: 50, height: 50, color: "transparent", …}
28: Component {x: 241, y: -360, width: 50, height: 50, color: "transparent", …}
29: Component {x: 317, y: -360, width: 50, height: 50, color: "transparent", …}
30: Component {x: 13, y: -420, width: 50, height: 50, color: "transparent", …}
31: Component {x: 89, y: -420, width: 50, height: 50, color: "transparent", …}
32: Component {x: 165, y: -420, width: 50, height: 50, color: "green", …}
33: Component {x: 241, y: -420, width: 50, height: 50, color: "transparent", …}
34: Component {x: 317, y: -420, width: 50, height: 50, color: "transparent", …}
35: Component {x: 13, y: -480, width: 50, height: 50, color: "transparent", …}
36: Component {x: 89, y: -480, width: 50, height: 50, color: "transparent", …}
37: Component {x: 165, y: -480, width: 50, height: 50, color: "green", …}
38: Component {x: 241, y: -480, width: 50, height: 50, color: "transparent", …}
39: Component {x: 317, y: -480, width: 50, height: 50, color: "transparent", …}
```

#### Image for illustration:

![Explanation Image](/images/explain.jpg)

#### Ultimately I ended up with nested arrays for xPos, yPos, colors, which is used to create the components:

```
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
```

#### animateGame Function:

```
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
```

#### Button and music:

```
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
```

## Completed Task

- [x] Create a canvas and add 5 buttons
- [x] Add mouse-click & keypress eventlisteners
- [x] Add corresponding colors when button is activated
- [x] Add some piano music effects when button is activated
- [x] Sort and match all xPos, yPos and colors of components
- [x] Add songs that is broken down into 5 notes
- [x] Add gradient transistion for the components as it moves down
- [x] Add requestAnimationFrame or setInterval function to loop animations

## Some Future To-Do List

- [ ] Resolve the create song portion
- [ ] Resolve the threshold for 'correct' button hit
- [ ] Add scoring based of # of correct timing of activating the buttons
- [ ] Add progress bar
- [ ] Add increasing speed as score increases
- [ ] Add ability to save game

#### Motivation Quote:

> If you want it,
> work for it.
