var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// Rektangler
c.fillStyle = 'pink';
c.fillRect(150, 100, 250, 300);
c.fillStyle = '#0070a4';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(255, 0, 0, 0.2)';
c.fillRect(300, 50, 100, 100);
c.fillStyle = 'green';
c.fillRect(150, 300, 100, 100);

// Linjer
c.beginPath();
c.moveTo(70, 350);
c.lineTo(350, 100);
c.lineTo(300, 300);
c.lineTo(70, 350);
c.strokeStyle = 'red';
c.fillStyle = 'rgba(0, 255, 0, 0.3)';
c.fill();
c.stroke();


// Sirkel (arc)
c.beginPath();
c.arc(300, 300, 30, 20, 2*Math.PI);
c.strokeStyle = 'blue';
c.fillStyle = 'rgba(0, 0, 250, 0.3)';
c.fill();
c.stroke();

// Mange sirkler

// Mønster
for(var i = 0; i<3; i++){
    c.beginPath();
    c.arc(150+i*2, 150+i*8, 5+i*10, 0, 2*Math.PI);
    c.strokeStyle = 'blue';
    c.stroke();
}

// Tilfeldig

for (var i = 0; i < 100; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    c.beginPath();
    c.arc(x, y, 10, 0, 2 * Math.PI);
    c.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
    c.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.4)';
    c.fill();
    c.stroke();
}
