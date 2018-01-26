const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
const fart = 0.05;
let temp = 100;
let mouseX = canvas.width/2,
    mouseY = canvas.height/2;


function draw(x, y, radius, color) {
    c.fillStyle = color;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2);
    c.closePath();
    c.fill();
}


c.canvas.addEventListener('mousemove', function(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animate() {
    requestAnimationFrame(animate);
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'rgba(0, 0, 0, 0.02)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    temp += fart;

    for(let i = 1; i<60; i=i+1){
        draw(
            Math.cos(temp+i*temp/25)*10*i + mouseX,
            Math.sin(temp+i*temp/25)*10*i + mouseY,
            3,
            'rgba('+ 2*i+100+','+ i +','+i*5+','+1+')'
        );
    }
    }
animate();