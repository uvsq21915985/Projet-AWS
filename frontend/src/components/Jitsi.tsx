import {JitsiMeeting} from '@jitsi/react-sdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



import { PopUpInvite } from './PopUpInvite';
/*
page for creating a meeting

*/ 
export default function Jitsit({id} :{id: string}) {
  const router = useRouter(); // handle change of url
  const [invitePopUp,setInvitePopUp] = useState(false);



  let r = id;
  //let roomId= String(Math.floor( Math.random()* 9000000000000000)); // get a random number id

  // useEffect(()=>{
  //  setRoomId(String(Math.floor( Math.random()* 1000000)));},[]) 
  //useEffect(()=>{setDefaultAutoSelectFamilyAttemptTimeout})

  return <div style={{ display: "flex" }}>
    <div style={{  flex: 1}}><JitsiMeeting 
domain = "localhost:8443" // le domaine du server jitsi
roomName = {id}
configOverwrite = {{
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: true,
    enableEmailInStats: false,
   // brandingRoomAlias: "localhost:3000", // to modify the link given in invite button
    inviteAppName: "myMeet",
    lobby: {
      autoKnock: true,
      enableChat: true
  },
  DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  customToolbarButtons: [
    {
        icon: '',
        id: 'custominvite', // the key
        text: 'inviter un participant'
    }
    ],
    buttonsWithNotifyClick: [
        'custominvite' // expose the click/tap event in the api 
    ]
   
}}
interfaceConfigOverwrite = {{TOOLBAR_BUTTONS: [
    'microphone', 'camera','custominvite', 'closedcaptions', 'desktop', 'fullscreen',
    'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
     'settings', 'raisehand',
    'videoquality',
    'help', 'mute-everyone'
]}}

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
    })
    // when a user click on the invite a participant button there will be an alert
    api.addListener('toolbarButtonClicked',(e)=>{
        setInvitePopUp(true);
        /*if (e.key == 'custominvite'){
            alert("L'inentifiant de la room est : "+ r+ "\nLes participants doivent le saisir à l'adresse suivante : http://localhost:3000/joinRoom")
        }*/
    })
} }

getIFrameRef = { (iframeRef) => { iframeRef.style.height = String(window.innerHeight-5)+"px"; } }




/></div>
{invitePopUp && <div style={{ flex: 1 }}> <PopUpInvite setPopUp={setInvitePopUp} roomId={id}/></div>}


</div>


}