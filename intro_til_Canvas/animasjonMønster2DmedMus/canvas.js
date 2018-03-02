var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var fart = 0.05;
var temp = 0;
var musX = canvas.width/2;
var musY = canvas.height/2;
var red = 255;
var green = 0;
var blue = 100;
var img = new Image();
img.src = "https://vignette.wikia.nocookie.net/mkwikia/images/5/51/Thomas-Helmet-icon.png";

c.canvas.addEventListener('mousemove', function (e) {
    musX = e.clientX;
    musY = e.clientY;
});
c.canvas.addEventListener('click', function () {
   red = Math.round(Math.random()*255);
   green = Math.round(Math.random()*255);
   blue = Math.round(Math.random()*155)+100;
});

function animate() {
    requestAnimationFrame(animate);

    c.fillStyle = 'rgba(0, 0, 0, 0.05)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.font = "30px Arial";
    c.fillStyle = 'rgba(255,255,255,0.5)';
    c.fillText("Informasjonsteknologi 1", musX-150, musY);
    c.drawImage(img, musX-50, musY-130, 100, 100);

    temp = temp + fart;
    for (var i = 0; i < 40; i++) {
        var x = Math.cos(Math.log(temp)+i*temp/25)* 10*i + musX;
        var y = Math.sin(Math.log10(temp)+i*temp/25)* 10*i + musY;
        var radius = 2;
        var r = red-Math.round(Math.random()*i*10);
        var g = 0;
        var b = blue-Math.round(Math.random()*i*20);
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
        c.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1';
        c.fill();
        c.stroke();
    }
}
animate();
