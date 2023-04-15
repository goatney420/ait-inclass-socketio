import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
const app = express();
const server = createServer(app);
import url from 'url';
import path from 'path';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000);
// server code goes here!
// first listen for connection using io.on
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!

// for es6 modules
/socket.io/socket.io.esm.min.js

let position1 = 0;
let position2 = 0; 

io.on('connection', socket => {
    console.log("connected", socket.id);

    socket.on('move', data => {
        if (data === "player1"){
            position1 += 10;
        }
        else {
            position2 += 10;
        }
        io.emit('move', {position1,position2});
    })
})
server.listen(3000);

