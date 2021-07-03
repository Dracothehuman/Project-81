var canvas=document.getElementById("canlasva");
ctx=canvas.getContext("2d");

var color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();




var color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

var color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(340, 210, 40, 0, 2*Math.PI);
ctx.stroke();

var color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(430, 210, 40, 0, 2*Math.PI);
ctx.stroke();

var color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(295, 250, 40, 0, 2*Math.PI);
ctx.stroke();

var color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(385, 250, 40, 0, 2*Math.PI);
ctx.stroke();

