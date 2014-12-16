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
    ctx.fillText("Press any key to animate a rectangle.", 10, 50);
}

function OnKeyPressHandler(event) {
    
    clearCanvas();
    
    // Start or stop the animation when a key is pressed
    if (!running) {
        // Start the animation
        setStartingPosition();
        // gets the timer running
        timerID = setInterval(animateRect, 10);
    } else {
        // Stop the animation
        clearInterval(timerID);
    }
    
    // reset the running tracker.  
    running = (!running);
}

function getCanvas() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
}
    
function animateRect() {
    clearCanvas();
    setXPosition();
    setYPosition();
    drawRectangle();
}

function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
}

function setStartingPosition() {
    rectX = Math.ceil(Math.random() * (c.width - 110));
    rectY = Math.ceil(Math.random() * (c.height - 110));
    rectWidth = Math.ceil((Math.random() * 50) + 8);
    rectHeight = Math.ceil((Math.random() * 50) + 8);
}
    
function setXPosition() {
    // Increment X up or down depending on our direction
    if (movingRight) rectX++; 
    else rectX--;
    
    // If we've reached the right side then turn around
    if ((rectX + rectWidth) == c.width) movingRight = false;
   
    // If we've reached the left then turn around
    if (rectX == 0) movingRight = true;
}

function setYPosition() {
    // Increment Y up or down depending on our direction
    if (movingDown) rectY++; 
    else rectY--;
    
    // If we've reached the bottom then turn around
    if ((rectY + rectHeight) == c.height) movingDown = false;
   
    // If we've reached the top then turn around
    if (rectY == 0) movingDown = true;

}

function drawRectangle() {
    // draw the rectangle on the canvas
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "blue";
    ctx.rect(rectX, rectY, rectWidth, rectHeight);
    ctx.stroke();
}
   

