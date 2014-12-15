var rectWidth;
var rectHeight;
var rectX;
var rectY;
var c;                  // pointer to canvas object
var ctx;                // pointer to the 2d context object
var timerID;            // pointer to interval function to stop and start animation
var running = false;    // keeps track of whether or not the animation is running
var movingRight = true; // track which direction the rectangle is moving
var movingDown = true;

function showInstructions() {
    getCanvas();
    ctx.font = "12px Arial";
    ctx.fillText("Press any key to animate a rectangle", 10, 50);
}

function OnKeyPressHandler(event) {
    // Start or stop the animation when a key is pressed
    if (running) {  // stop the animation
        clearInterval(timerID);
        running = false;
        clearCanvas();
        return;
    }
    
    // Start the animation
    running = true;
    clearCanvas();
    setStartingPosition();
    timerID = setInterval(animateRect, 10);  // gets the timer running
}

function getCanvas() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d"); 
}
    
function animateRect() {
    clearCanvas();
    calculateXPosition();
    calculateYPosition();
    drawRectangle();
}

function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
}

function setStartingPosition() {
    rectX = Math.ceil(Math.random() * (c.width - 110));
    rectY = Math.ceil(Math.random() * (c.height - 110));
    rectWidth = Math.ceil((Math.random() * 100) + 8);
    rectHeight = Math.ceil((Math.random() * 100) + 8);
}
    
function calculateXPosition() {
    // Move to the right until we hit the end of the screen, then move back to
    // the left until we hit the end of the screen.
    if (movingRight) {
        rectX++;
        if ((rectX + rectWidth) == c.width){  // hit the right side of the screen - switch directions
            movingRight=false;
        }
        return;
    }
    // we are moving left
    rectX--;
    if (rectX==0){  // hit the left side of the screen - switch directions
        movingRight=true;
    }

}
function calculateYPosition() {
    // Move down until we hit the end of the canvas, then move back up
    // until we hit the top of the canvas
    if (movingDown) {
        rectY++;
        if ((rectY + rectHeight) == c.height){  // hit the bottom of the screen - switch directions
            movingDown=false;
        }
        return;
    }
    // we are moving Up
    rectY--;
    if (rectY==0){  // hit the top of the screen, switch directions
        movingDown=true;
    }

}

function drawRectangle() {
    // draw the rectangle on the canvas
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "red";
    ctx.rect(rectX, rectY, rectWidth, rectHeight);
    ctx.stroke();
}
   

