
const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

const port = 8080;
const server = http.createServer(app);
const io = socketio(server, {
    cors: { origin: "*", // allow all access needs to be changed
        methods: ["GET" , "POST"]
    } 
});

// list of all current rooms
let rooms = {};

io.on('connect_error', (err) => {
    console.error(`Connection error: ${err.message}`);
    // Implement reconnection logic or user notifications here
  });
io.on("connection", socket => {

// create a room , adding room to array with the user that created it
    socket.on("createRoom", data => {
        console.log("creating room on server side");
        try{
        const roomId = data.room;
        socket.join(roomId);
        rooms[roomId] = [{name: data.name}];
        }catch(err){
            console.log(err);
        }
    

    });

      // let a new user join to the room
    socket.on("join", data => {
        const roomId = data.room;
        
        // if room found / exist already send to peer a message that he is joining the room
        if (rooms[roomId]) {

            socket.join(roomId);
            rooms[roomId].push({name: data.name});
            io.sockets.to(roomId).emit("userJoined");
        console.log("[joined] room:" + data.room + " name: " + data.name);
        
        } else {
           
            // when room not found 
            console.log("room not found");
            io.sockets.to(roomId).emit("roomNotFound");
            /**
             * handle error
             */
        }

         
    
    
    });

  
     //when an offer is recived send from a peer send the offer to the other peer.
     

    
    socket.on("offer", offer => {
        socket.broadcast.emit("getOffer", offer);
        console.log("offer recived: " + offer);
    });

    // when athe server recive an answer send the answer to the other peer
    socket.on("answer", answer => {
        socket.broadcast.emit("getAnswer", answer);
        console.log("answer: " , answer);
    });

// when athe server recive a candidate send the answer to the other peer
    socket.on("candidate", candidate => {
        socket.broadcast.emit("getCandidate", candidate);
        console.log("candidate: " + socket.id);
    });


    // when the user disconect ( close tab )
    socket.on("disconnect", () => {
        console.log( " disconected");
    });
});

// on which port the server listen
server.listen(port, function(){
    console.log("ecoute le port  ", port);


})

