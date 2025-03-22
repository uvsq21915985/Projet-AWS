import {JitsiMeeting} from '@jitsi/react-sdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



import { PopUpInvite } from './PopUpInvite';
import { create_reunion, end_reunion } from '@/services/auth';
import ReactModal from 'react-modal';
import '../app/globals.css';
import './popUpInvite.css';
/*
page for creating a meeting

*/ 
export default function Jitsit({id} :{id: string}) {
  const [roomId,setRoomId] = useState(id);
  const router = useRouter(); // handle change of url
  const [invitePopUp,setInvitePopUp] = useState(false);
  const [startTime, setStartTime] = useState(Number);
  const [endTime, setEndTime] = useState(Number);
  const [numParticipants, setNumParticipants] = useState<number>(1);
 
  useEffect(()=>{
    setRoomId(id);
    setStartTime(Date.now());
    ReactModal.setAppElement('body');
  }
    
  ,[])



 
  //let roomId= String(Math.floor( Math.random()* 9000000000000000)); // get a random number id

  // useEffect(()=>{
  //  setRoomId(String(Math.floor( Math.random()* 1000000)));},[]) 
  //useEffect(()=>{setDefaultAutoSelectFamilyAttemptTimeout})

  return <div style={{ display: "flex" }}>
    <div style={{  flex: 1}}><JitsiMeeting 
domain = "jitsimeetproject.hopto.org:443" // le domaine du server jitsi
//domain = "localhost:8443"
roomName = {roomId}
configOverwrite = {{
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: true,
    //enableEmailInStats: false,
   // brandingRoomAlias: "localhost:3000", // to modify the link given in invite button
  //  inviteAppName: "myMeet",
    lobby: {
      autoKnock: true,
      enableChat: true
  },
  //DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  customToolbarButtons: [
    {
        icon: '',
        id: 'custominvite', // the key
        text: 'inviter un participant',
    }
  ],
  buttonsWithNotifyClick: [
        'custominvite' // expose the click/tap event in the api 
  ],
  toolbarButtons: [
    'microphone', 'camera', 'custominvite', 'invite', 'closedcaptions', 'desktop', 'fullscreen',
    'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
     'settings', 'raisehand',
    'videoquality',
    'help', 'mute-everyone'
],
mainToolbarButtons: [
       [ 'microphone', 'camera', 'desktop', 'chat', 'raisehand', 'custominvite', 'participants-pane', 'tileview' ],
       [ 'microphone', 'camera', 'desktop', 'chat', 'raisehand', 'participants-pane', 'tileview' ],
       [ 'microphone', 'camera', 'desktop', 'chat', 'raisehand', 'participants-pane' ],
       [ 'microphone', 'camera', 'desktop', 'chat', 'participants-pane' ],
       [ 'microphone', 'camera', 'chat', 'participants-pane' ],
       [ 'microphone', 'camera', 'chat' ],
       [ 'microphone', 'camera' ]
   ],
   
}}
interfaceConfigOverwrite = {{
  TOOLBAR_BUTTONS: [
    'microphone', 'camera', 'custominvite', 'invite', 'closedcaptions', 'desktop', 'fullscreen',
    'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
     'settings', 'raisehand',
    'videoquality',
    'help', 'mute-everyone'
],
SHOW_JITSI_WATERMARK: false,
}}


userInfo = {{
    displayName: 'displayName',
    email: "email"
}}

onApiReady = { (api) => {

  
    api.on('participantRoleChanged', (event) => {
      if (event.role === 'moderator') {
          api.executeCommand('toggleLobby', true);
          
          // Vérifier si c'est le premier modérateur (donc le créateur)
          // if (!startTime) { 
          //     create_reunion(roomId, Date.now(), numParticipants);
          //     setStartTime(Date.now());
          // }
      }
  });
  
    api.on('videoConferenceJoined',(event)=>{
      create_reunion(roomId, Date.now(), numParticipants);
      setStartTime(Date.now());
    });

    api.on("participantJoined",(event)=>{setNumParticipants(api.getNumberOfParticipants());})
    
    //go back to user page when the conference is ended
    api.on('videoConferenceLeft',()=>{
      setEndTime(Date.now());
      console.log("USER IS REDIRECTED");
      const numberOfParticipants = api.getNumberOfParticipants();
      console.log("number of participant " , numberOfParticipants);

      //create the reunion in database
      // if (numParticipants)
      //   end_reunion(roomId,Date.now(),numParticipants);
      end_reunion(roomId,Date.now(),numParticipants);
      router.push("/userPage");
    })
    // when a user click on the invite a participant button there will be an alert
    api.addListener('toolbarButtonClicked',(e)=>{
        //when the custom invite buttom is clicked
        if (e.key == 'custominvite'){
          setInvitePopUp(true);  
        }
    })
} }

getIFrameRef = { (iframeRef) => { iframeRef.style.height = String(window.innerHeight-5)+"px"; } }




/></div>



 <PopUpInvite setPopUp={setInvitePopUp} invitePopUp={invitePopUp} roomId={id}/>


</div>


}



