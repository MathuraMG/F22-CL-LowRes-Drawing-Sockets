let socket = io();

//adding confirmation that the connection was created
socket.on("connect", ()=> {
  console.log("connected to the server via sockets")
})


//add the p5 drawing app
function setup() {
  createCanvas(400, 400);
  background(20,123,243);
  fill(124,233,21);
  noStroke();
}

function mouseDragged()
{
  let dataObj = {
    x : mouseX,
    y : mouseY
  }
  socket.emit("data", dataObj);
}


//on getting data from server, draw the painting
socket.on("dataFromServer", (dataObj) => {
  // console.log(dataObj);
  drawPainting(dataObj);
})


function drawPainting(dataObj) {
  circle(dataObj.x, dataObj.y, 20);
}

/*

information flow?
👌 C - click/draw on screen - mouseX, mouseY ("data")
👌 C - send "data" to server -> ".emit"
👌 S - ".on" getting "data", "emit" to all C
C - ".on" getting data, use "data" to draw the information


*/
