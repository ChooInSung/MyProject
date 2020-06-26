var canvas = document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
console.log(canvas);

// var c = canvas.getContext('2d');

// c.fillStyle='rgba(255,0,0,0.9';
// c.fillRect(100,100,100,100);
// c.fillStyle='rgba(0,255,0,0.3';
// c.fillRect(300,100,100,100);
// c.fillStyle='rgba(0,0,255,0.8';
// c.fillRect(100,300,100,100);

// // Line

// c.beginPath();
// c.moveTo(100,250);
// c.lineTo(500,100);
// c.lineTo(500,400);
// c.strokeStyle='#f2d9d4';
// c.stroke();

// //arc circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2, false);
// c.strokeStyle='blue';
// c.stroke();

// for(var i=0;i<300;i++) {
//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2, false);
//     c.strokeStyle='blue';
//     c.stroke();
// }

// circle & move
// var x=Math.random()*window.innerWidth;
// var y=Math.random()*window.innerHeight;
// var radius=Math.PI*2;
// var dx=(Math.random()-0.5)*8;
// var dy=(Math.random()-0.5)*8;
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(x,y,30,0,radius, false);
//     c.strokeStyle='blue';
//     c.stroke();
   
//     x+=dx;
//     y+=dy
//     if(x+radius>window.innerWidth||x-radius<0) {
//         dx=-dx;
//     }
//     if(y+radius>window.innerHeight||y-radius<0) {
//         dy=-dy;
//     }

// }
var c = canvas.getContext('2d');


function Circle(x,y,radius,dx,dy) {
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.stroke();
   
    this.animate = function() {
        requestAnimationFrame(animate);
        c.clearRect(0,0,window.innerWidth,window.innerHeight);
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.stroke();
        this.x+=this.dx;
        this.y+=this.dy;
        if(this.x+this.radius>window.innerWidth||this.x-radius<0) {
            this.dx=-this.dx;
        }
        if(this.y+this.radius>window.innerHeight|| this.y-radius<0) {
            this.dy=-this.dy;
        }
    }
}

var dx=5;
var dy=5;
var radius=30;

var x=Math.random()*window.innerWidth;
var y=Math.random()*window.innerHeight;
var radius=30;

for(var i=0;i<100;i++) {
    var x=Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;
    var circle = new Circle(x,y,radius,dx,dy);
    circle.animate();
}



// var circle = new Circle(x,y,30,dx,dy);
// circle.move;


//     function animate() {
//         requestAnimationFrame(animate);
//         c.clearRect(0,0,window.innerWidth,window.innerHeight);
//         c.beginPath();
//         c.arc(x,y,radius,0,Math.PI*2,false);
//         c.stroke();
//         x+=dx;
//         y+=dy;
//         if(x+radius>window.innerWidth||x-radius<0) {
//             dx=-dx;
//         }
//         if(y+radius>window.innerHeight|| y-radius<0) {
//            dy=-dy;
//         }
//     }
// animate();