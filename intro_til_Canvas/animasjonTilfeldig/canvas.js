var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function animate() {

    requestAnimationFrame(animate);

    c.fillStyle = 'rgba(0, 0, 0, 0.04)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 10; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        c.beginPath();
        c.arc(x, y, y/20, 0, 2 * Math.PI);
        c.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
        c.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.4)';
        c.fill();
        c.stroke();
    }
}

animate();
