import {JitsiMeeting} from '@jitsi/react-sdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



import { PopUpInvite } from '../popUpInvite/PopUpInvite';
import { create_reunion, end_reunion , delete_room } from '@/services/auth';
import ReactModal from 'react-modal';
import '../../app/globals.css';
import LocalStorage from '@/app/hooks/LocalStorage';
/*
page for creating a meeting

*/ 
export default function Jitsit(props: {id: string ; subject: string}) {
  const [roomId,setRoomId] = useState('');
  const router = useRouter(); // handle change of url
  const [invitePopUp,setInvitePopUp] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [subject,setSubject] = useState('');
  const [numParticipants, setNumParticipants] = useState<number>(1);
 
  useEffect(()=>{
    setRoomId(props.id);
    setSubject(props.subject);
    setStartTime(Date.now());
    ReactModal.setAppElement('body');
  }
    
  ,[])


  function handleWhenAllUserLeft(){
    if (numParticipants ==0 ){
      end_reunion(roomId,Date.now(),numParticipants);
      console.log("End API CALL@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      delete_room(roomId);

    }
  }



  return <div style={{ display: "flex" }}>
    <div style={{  flex: 1}}><JitsiMeeting 
    domain = "jitsimeetproject.hopto.org:443" // domain of jitsi server
 //domain = "localhost:8443"
roomName = /*{roomId}*/ "111" //FOR TESTING
configOverwrite = {{
    subject:subject, //add subject set by user
    startWithAudioMuted: true,
    disableModeratorIndicator: false,
    startScreenSharing: true,
    lobby: {
      autoKnock: true,
      enableChat: true
  },
  //DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  customToolbarButtons: [
    {
        icon: '',
        id: 'custominvite', // the id
        text: 'inviter un participant',
    }
  ],
  buttonsWithNotifyClick: [
        'custominvite' // expose the click
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
interfaceConfigOverwrite = {{}}


userInfo = {{
  displayName: LocalStorage.getUser().user.username,
  email: LocalStorage.getUser().user.email
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




