
function drawShapes()
{
    drawImage();
    drawRectangles();
    drawTriangle();
    drawSmilie();
   
}

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
function drawSmilie() //mozilla.org
{
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext)
    {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle

        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)

        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye

        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye

        ctx.stroke();
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





