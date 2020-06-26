var canvas = document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

var mouse = {
    x:undefined,
    y:undefined
}

var maxRadius=40;
// var minRadius=2;

var colorArray = [
    '#ffaa33',
    '#ggffaa',
    '#00ff00',
    '#4411aa',
    '#ff1100',
]

window.addEventListener('mousemove', 
function(event) {
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse);
})

window.addEventListener('resize', function() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    init();
});

function Circle(x,y,radius,dx,dy) {
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
    this.minRadius=radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
        c.stroke();
        c.fillStyle=this.color;
        c.fill();
    }

    this.update = function() {

        if(this.x+radius>window.innerWidth||this.x-radius<0) {
            this.dx=-this.dx;
        }
        if(this.y+radius>window.innerHeight||this.y-radius<0) {
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;

        //interactivity
       if(mouse.x - this.x<50&&mouse.x-this.x>-50
        &&mouse.y-this.y<50&&mouse.y-this.y>-50) {
           if(this.radius<maxRadius) {
            this.radius +=1;
           }
       } else if(this.radius>this.minRadius) {
           this.radius-=1;
       }

        this.draw();
    }
}
var circleArray=[];
function init() {
    circleArray=[];
    for(var i=0;i<400;i++) {
        var x=Math.random()*window.innerWidth;
        var y=Math.random()*window.innerHeight;
        var dx=Math.random()-0.5;
        var dy=Math.random()-0.5;
        var radius=Math.random()*10+1;
        circleArray.push(new Circle(x,y,radius,dx,dy));
}
}

// console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);

    for(var i=0;i<circleArray.length;i++) {
        circleArray[i].update();
    }
}

animate();
init();

