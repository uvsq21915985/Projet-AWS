
const pc_config = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302",
        },
    ],
};

let constraints = {
    video: true,
    audio: false,
};

const peerConnection = new RTCPeerConnection(pc_config);



// when a peer gets an offer from an other peer he create an answer with this offer
socket.on("getOffer", (sdp) => {
    console.log("get offer:" + sdp);
    createAnswer(sdp);
});

// when apeer recive an answer he set up the remote stream on peer that joined so that he can get the remote video
socket.on("getAnswer", async (sdp) => {
    console.log("get answer:" , sdp);
    await peerConnection.setRemoteDescription(sdp);
    console.log("set remote done");
});


// when a peer recive a candidate he add this candidate to the peer connection
socket.on("getCandidate", async (candidate) => {
   await  peerConnection.addIceCandidate(candidate);
        console.log("candidate add success");
});


// function to create an offer and send it to the other peer thought the signaling server
async function createOffer() {
    try{
    console.log("create offer");
    let offer =  await peerConnection
        .createOffer({offerToReceiveAudio: true, offerToReceiveVideo: true})
    
    await peerConnection.setLocalDescription(offer);
    // send the offer to the server
    socket.emit("offer", offer);
    }
    catch(error) {
            console.log(error);
    }
};


// function to create an oanswer and send it to the other peer
 async function createAnswer(sdp) {
   try{
    await peerConnection.setRemoteDescription(sdp);
    console.log("answer set remote description success");
    let answer = await peerConnection.createAnswer();
    console.log("create answer");
    await peerConnection.setLocalDescription(answer);
    //send the answer to the remote peer
    socket.emit("answer", answer);        
    }catch(error){
                console.log(error);
    };

};



//initialisation starting the offer exanchange
async function setup() {
    console.log("-----------------------START----------------");
        // get the local video stream 
        // the user get asked camera and microphone authorization.
        let localstream = await navigator.mediaDevices.getUserMedia(constraints);

           
        localVideo.srcObject = localstream;
        //setup the tracks for the local stream to get the video
         localstream.getTracks().forEach(track => {
                    peerConnection.addTrack(track, localstream);
        });

        //when the peer recive his ice candidate he send them to the other peer 
                peerConnection.onicecandidate = e => {
                    if (e.candidate) {
                        console.log("onicecandidate");
                        socket.emit("candidate", e.candidate);
                    }
                };
                peerConnection.oniceconnectionstatechange = e => {
                    console.log(e);
                };
                          
};




//add tracks to get the remote video stream 
peerConnection.ontrack = (event) => {
    console.log("track event recived:" , event);
    console.log("track recived:", event.track);
    console.log("track recived kind:", event.track.kind);
    // we don't add the track if there is already a video
    if (remoteVideo.srcObject) return;
  remoteVideo.srcObject = event.streams[0];

}





//use the validate API to validate the token and displaying the username if the token is validated
async function validateUser(){
    fetch("http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/validate/",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token '+localStorage.getItem("token")
          },
}).then(response =>{
if (!response.ok){
    console.log(response);
    errorMessage.innerHTML = "erreur dans l'authentification";
    return false;
}
else{
    // save the token in the session storage 
    document.getElementById("displayUsername").innerHTML = response.json().user.username;
    return true;
}
});
}

/**
 * function to join a room
 * we get a roomId that the user typed and send it to the server
 * if the room exist the server answer with a "userjoin" and thenn create an offer (see below function)
 * and if the room doesn't exist the server answer with "roomNotFound" (see below)
 */
async function joinRoom(){
   if (validateUser){
    try{
       await setup();
    let roomId = document.getElementById("roomId").value;
    socket.emit("join",{
        room: roomId,
        name: userId,
    });
  

    document.getElementById('message2').innerHTML = "joining a call";

    }
    catch(error) {
        console.log(`getUserMedia error: ${error}`);
    };
}
}

// when a peer has joined an existing room the user create an offer
socket.on("userJoined", () => {
    createOffer();
});

// when a peer try to join a room that doesn't exist
socket.on("roomNotFound",()=>{
    console.log("room not found");
    document.getElementById("roomIdError").innerHTML = " error room with this id doesn't exist";
})



// function to create a room we generate a random roomId and send it to the server that store it in an array (rooms)
async function createRoom(){
   if (validateUser){
    try{
    
    await setup();
    console.log("creating a room");
    let roomId = Math.floor(Math.random() * 1000);
    console.log("roomId created : " , roomId);
    console.log("userId", userId);
    socket.emit("createRoom",{
        room: roomId,
        name: userId,
    });
    document.getElementById('message1').innerHTML = "created room with id" +roomId;

    }catch(err){
        console.log(`getUserMedia error: ${error}`);
    }

   }
}
    
let localVideo = document.getElementById('localVideo');
let remoteVideo = document.getElementById('remoteVideo');

//link the joinRoom function and the join button with id join
document.getElementById("join").addEventListener('click', joinRoom);

//link the createRoom function and the create room button with id join
document.getElementById("create").addEventListener('click', createRoom);