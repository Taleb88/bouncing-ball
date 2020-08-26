let boxX = 30; // x location of upper corner
let boxY = 40; // y location of upper corner
let boxWidth = 450;
let boxHeight = 350;
let ballRadius = 12.5;
let boxBoundX = boxWidth + boxX - ballRadius; // right boundary
let boxBoundY = boxHeight + boxY - ballRadius; // bottom boundary
let inboxBoundX = boxX + ballRadius; // left boundary
let inboxBoundY = boxY + ballRadius; // top boundary
let ballX = 60; // x position of ball
let ballY = 75; // y position of ball
let ctx; // canvas context
let ballVX = 6; // initial horizal displacement
let ballVY = 10; // initial vertical displacement

init = () => {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.lineWidth = ballRadius;
    ctx.fillStyle = '#AB0234'; //red
    
    moveBall(); // invoked the first time to move, check, and display the ballect
    setInterval(moveBall,150); // timing event set to 150ms
}

moveBall = () => {
    ctx.clearRect(boxX,boxY,boxWidth,boxHeight); // clear the entire contents of the box
    moveAndCheck(); // perform a check and the move of the ball
    ctx.beginPath();
    ctx.arc(ballX,ballY,ballRadius,0,Math.PI*2,true); // draw of circle at the location of the ball
    ctx.fill();
    ctx.strokeRect(boxX,boxY,boxWidth,boxHeight); // draw rectangle outline    
}

moveAndCheck = () => {
    let nBallX = ballX + ballVX; // tentative next x position
    let nBallY = ballY + ballVY; // tentative next y position

    // if 'x' value is beyond the right wall
    if(nBallX > boxBoundX) {
        ballVX = -ballVX; // if it is, change horizontal displacement
        nBallX = boxBoundX; // set the next to 'x' to be at the exact boundary
    }
    // if x < the left boundary
    if(nBallX < inboxBoundX) {
        nBallX = inboxBoundX; // if it is, set the 'x' value to be at the exact boundary
        ballVX = -ballVX; // change horizontal displacement
    }
    // if y value is beyond the bottom boundary
    if(nBallY > boxBoundY) {
        nBallY = boxBoundY; // set 'y' value to be at the exact boundary
        ballVY = -ballVY; // change vertical displacement
    }
    // if y < the top boundary
    if(nBallY < inboxBoundY) {
        nBallY = inboxBoundY; // if it is, set 'y' to be at the exact boundary
        ballVY = -ballVY; // change vertical displacement
    }
    ballX = nBallX; // 'x' position set to nBallX
    ballY = nBallY; // 'y' position set to nBallY 
}

change = () => {
    // hVelo = horizontal velocity; vVelo = vertical velocity
    ballVX = Number(document.form.hVelo.value); // convert input to number; assign to ballVX
    ballVY = Number(document.form.vVelo.value); // convert input to number; assign to ballVY
    return false;
}