//variables
var a;
var sR = 100;
var moveAmountR = 0.5;
function drawShapes()
{
    drawImage();
    drawRectangles();
    drawTriangle();
    //startAnimation();
}
//image code
var pic1 = new Image();
pic1.src ="img/fire_PNG6011.png";

function drawImage()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,140,275,120,185);
}
//rectangle code
function drawRectangles()
{

   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#cc0000";
    ctx.fillRect(150,225,105,185);

    var canvas = document.getElementById("myCanvas");
    //this next line is arguably the most important
    var ctx = canvas.getContext("2d");
    //draw rectangle
    ctx.fillStyle = "#134d00";
    ctx.fillRect(0,450,500,200);
}
// triangle code
function drawTriangle()
{
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(150, 225);
        ctx.lineTo(200, 150);
        ctx.lineTo(255, 225);
        ctx.fill();


    }
    if (canvas.getContext)
    {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(255, 350);
        ctx.lineTo(300, 408);
        ctx.lineTo(255, 408);
        ctx.fill();


    }
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(150, 350);
        ctx.lineTo(102, 408);
        ctx.lineTo(150, 408);
        ctx.fill();


    }
}
//circle code
function drawCircle()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");


    ctx.beginPath();
    ctx.strokeStyle="#efeabf";
    ctx.width=2;
    ctx.arc(0,0,sR,0,2*Math.PI);
    ctx.fillStyle="#efeabf";
    ctx.fill();
    ctx.stroke();
}

function initialize()
{
    drawBackground();
    drawCircle();

     var ctx = document.getElementById("myCanvas").getContext("2d");

     //moon
    ctx.beginPath();
    ctx.strokeStyle="#efeabf";
    ctx.width=2;
    ctx.arc(0,0,sR,0,2*Math.PI);
    ctx.fillStyle="#efeabf";
    ctx.fill();
    ctx.stroke();
}

function drawBackground()
{
    var canvas = document.getElementById("myCanvas").getContext("2d");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000033"
}


function startAnimation()
{
  animate();
  initialize();
}

 function animate()
 {
     a = requestAnimationFrame(animate);
     drawBackground();
     moveRight();
     checkMoveRight();
 }

function moveRight()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    sR = sR + moveAmountR;

    //moon
    ctx.beginPath();
    ctx.strokeStyle="#efeabf";
    ctx.width=2;
    ctx.arc(0,0,sR,0,2*Math.PI);
    ctx.fillStyle="#efeabf";
    ctx.fill();
    ctx.stroke();

}
function checkMoveRight()
{
    if (sR > 150 )
    {
        moveAmountR = moveAmountR * (-1);
    }
    if (sR < 90 )
    {
        moveAmountR = moveAmountR * (-1);
    }

}





//function drawLines()
{
    //var canvas = document.getElementById("myCanvas");
    //var ctx =canvas.getContext("2d");
    //ctx.beginPath();
    //ctx.moveTo(0,0);
    //ctx.lineWidth=9;
    //      var canvas = document.getElementById("myCanvas");
    //     var ctx = canvas.getContext("2d");
    //
    //     ctx.beginPath();
    //     ctx.strokeStyle = "FF0000";
    //     ctx.arc(44250,150,40,0,(1/2)*Math.PI,false);
    //     ctx.fillStyle = "#ffff66";
    //     ctx.fill();
    //     ctx.stroke();
    //
    //ctx.lineTo(500,500);
    //ctx.strokeStyle= "FF0000";
    //ctx.stroke();
}

//function drawText()
{
    //var canvas = document.getElementById("myCanvas");
    //var ctx =canvas.getContext("2d");
    //ctx.fillStyle = "#009999 ";
    //ctx.font ="30px Arial";
    //ctx.fillText("BLAH,BLAH,BALH",200,300);
}
//draw an image dynamically





