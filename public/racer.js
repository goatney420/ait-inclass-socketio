import { io } from '/socket.io/socket.io.esm.min.js';
const socket = io();

const b1 = document.querySelector('.button1');
const b2 = document.querySelector('.button2');
const p1 = document.querySelector('.player1');
const p2 = document.querySelector('.player2');

b1.addEventListener('click', function(event) {
    event.preventDefault();
    socket.emit('move', "player1");
})

b2.addEventListener('click', function(event) {
    event.preventDefault();
    socket.emit('move', "player2");
})

socket.on('move', data => {
    let position1 = data.position1;
    let position2 = data.position2;

    p1.style.position = 'relative';
    p1.style.left = position1 + 'px';
    p2.style.postion = 'relative';
    p2.style.left = position2 + 'px';
})
