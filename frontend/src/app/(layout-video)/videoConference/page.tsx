"use client";

import {JitsiMeeting} from '@jitsi/react-sdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Jitsit from '@/components/Jitsi';
/*
page for creating a meeting

*/ 
export default function VideoConference() {
  const router = useRouter(); // handle change of url
  let listOfRoom = useState([]);
  let roomId= String(Math.floor( Math.random()* 9000000000000000)); // get a random number id
/*
  // useEffect(()=>{
  //  setRoomId(String(Math.floor( Math.random()* 1000000)));},[]) 
  //useEffect(()=>{setDefaultAutoSelectFamilyAttemptTimeout})

  return <JitsiMeeting 
domain = "localhost:8443"
roomName = {roomId}
configOverwrite = {{
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: true,
    enableEmailInStats: false,
    lobby: {
      autoKnock: true,
      enableChat: true
  },
  DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
    TOOLBAR_BUTTONS: [
      'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
      'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
       'settings', 'raisehand',
      'videoquality','invite',
      'help', 'mute-everyone'
  ]
}}
userInfo = {{
    displayName: 'displayName',
    email: "email"
}}

onApiReady = { (api) => {

  

    api.on('participantRoleChanged', (event)=>{
      if(event.role === 'moderator') {
          api.executeCommand('toggleLobby', true);    
      }
    })
    //go back to user page when the conference is ended
    api.on('videoConferenceLeft',()=>{
      console.log("USER IS REDIRECTED");
     // router.prefetch("/userPage"); // to have layout  ( when using push it doesn't work)
      router.push("/userPage");
    }
    )
} }

getIFrameRef = { (iframeRef) => { iframeRef.style.height = String(window.innerHeight)+"px"; } }
/>
*/
return <Jitsit id={roomId} ></Jitsit>

}


