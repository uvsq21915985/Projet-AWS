import {JitsiMeeting} from '@jitsi/react-sdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



import { PopUpInvite } from '@/components/popUpInvite/PopUpInvite';
import { create_reunion, end_reunion , delete_room } from '@/services/auth';
import ReactModal from 'react-modal';
import '../../app/globals.css';
import '@/components/popUpInvite/popUpInvite.css';
/*
page for creating a meeting

*/ 
export default function Jitsit({id} :{id: string}) {
  const [roomId,setRoomId] = useState(id);
  const router = useRouter(); // handle change of url
  const [invitePopUp,setInvitePopUp] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [isReunionCreated,setReunionCreated] = useState(false);
  const [numParticipants, setNumParticipants] = useState<number>(1);
  //let numParticipants = 0;
 
  useEffect(()=>{
    setRoomId(id);
    setStartTime(Date.now());
    ReactModal.setAppElement('body');
  }
    
  ,[])


  function handleWhenAllUserLeft(){
    if (numParticipants ==0 && !isReunionCreated){
      delete_room(roomId);
    }
  }


 

  function setEndTime(arg0: number) {
    throw new Error('Function not implemented.');
  }

  return <div>
    <div>
      <JitsiMeeting 
//domain = "jitsimeetproject.hopto.org:443" // *jitsi domain name
domain = "localhost:8443"
roomName = {roomId}
configOverwrite = {{
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: true,
    lobby: {
      autoKnock: true,
      enableChat: true
  },
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
    'microphone', 'camera', 'custominvite', 'closedcaptions', 'desktop', 'fullscreen',
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
    'microphone', 'camera', 'custominvite', 'closedcaptions', 'desktop', 'fullscreen',
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

  

    api.on('participantRoleChanged', (event)=>{
      if(event.role === 'moderator') {
          api.executeCommand('toggleLobby', true);    
      }
    })
    api.on('videoConferenceJoined',(event)=>{
      setNumParticipants((prev) => prev + 1);
       create_reunion(roomId, Date.now(), numParticipants);
       setReunionCreated(true);
      if (startTime==0)
      setStartTime(Date.now());
    });

    api.on("participantJoined",(event)=>{
      setNumParticipants((prev) => prev + 1);
      setNumParticipants(api.getNumberOfParticipants());

      })
    
    //go back to user page when the conference is ended
    api.on('videoConferenceLeft',()=>{
      setNumParticipants((prev) => prev - 1);
      handleWhenAllUserLeft();
      setEndTime(Date.now());
      console.log("USER IS REDIRECTED");
      const numberOfParticipants = api.getNumberOfParticipants();
      console.log("number of participant " , numberOfParticipants);

      //create the reunion in database
      // if (numParticipants)
      //   end_reunion(roomId,Date.now(),numParticipants);
      end_reunion(roomId,Date.now(),numParticipants);
      router.push("/userPage");
    }
    )

    api.addListener('participantLeft',()=>{
      setNumParticipants((prev) => prev - 1);
      handleWhenAllUserLeft();
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

 <PopUpInvite setPopUp={setInvitePopUp} invitePopUp={invitePopUp} roomId={roomId}/>

</div>


}



