//Grab the Canvas and Drawing Context
const canvas = document.getElementById('bt');
const ctx = canvas.getContext('2d');
//Create Triangle
ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(300, 220);
ctx.lineTo(0,200);
ctx.lineTo(150, 0);
ctx.closePath();
//Clip to the current path
ctx.clip();

//Create an image element
const bgImg = document.createElement('IMG');
//When the image is loaded (url is fetched), draw it to the canvas
bgImg.onload = function (){
    ctx.drawImage(bgImg, 0, 0);
}
//Specify the src to load the image
bgImg.src = "https://placekitten.com/g/300/300";