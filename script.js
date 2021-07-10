'use strict'

// define canvas size
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 500;

ctx.font = "20px Arial";
ctx.textAlign = "center";
ctx.fillText("Yi Qian's Game", canvas.width / 2, canvas.height / 2)




//draw lines
class trackLines {
    constructor(x1, y1, x2, y2) {

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.strokeStyle = "black";

    }
    DrawingLines() {
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.closePath();
    }
}

//x,y,width,height
let Lines = [
    new trackLines(40, 0, 40, canvas.height),
    new trackLines(120, 0, 120, canvas.height),
    new trackLines(200, 0, 200, canvas.height),
    new trackLines(280, 0, 280, canvas.height),
    new trackLines(360, 0, 360, canvas.height)
];


class Square {
    constructor(x, y, color, speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = 50;
        this.speed = speed
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y == 480) {
            this.y = 0 - this.size;
        }
    }
}

let squares = [
    new Square(15, 0, "red", 3),
    new Square(95, 0, "blue", 3),
    new Square(175, 0, "green", 3),
    new Square(255, 0, "yellow", 3),
    new Square(335, 0, "purple", 3)
];

function DrawLines() {

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "black";
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.closePath();
    Lines.forEach(trackLines => trackLines.DrawingLines());
}


//test circle
ctx.beginPath();
ctx.arc(200, 75, 50, 0 * Math.PI, 2 * Math.PI);
ctx.stroke();


DrawLines()
squares.forEach(square => square.draw());