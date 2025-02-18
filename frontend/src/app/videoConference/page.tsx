"use client";

import {JitsiMeeting} from '@jitsi/react-sdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VideoConference() {
  const router = useRouter(); // handle change of url
  let listOfRoom = useState([]);
  let roomId= String(Math.floor( Math.random()* 1000000));

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
  }
}}
interfaceConfigOverwrite = {{
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
      router.push("/userPage");
    }
    )
} }

getIFrameRef = { (iframeRef) => { iframeRef.style.height = '400px'; } }
/>

}
