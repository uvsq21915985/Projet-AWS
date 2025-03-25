'use client';


import {JitsiMeeting} from '@jitsi/react-sdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



import { PopUpInvite } from '../popUpInvite/PopUpInvite';
import { create_reunion, end_reunion , delete_room } from '@/services/auth';
import ReactModal from 'react-modal';
import '../../app/globals.css';
import LocalStorage from '@/app/hooks/LocalStorage';
import { userAgent } from 'next/server';
import Loading from '../Loading/Loading';
/*
page pour créer un meeting
*/ 
export default function Jitsit(props: {id: string ; subject: string , isJoiningRoom: boolean}) {
  const [roomId,setRoomId] = useState('');
  const router = useRouter(); 
  const [invitePopUp,setInvitePopUp] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [subject,setSubject] = useState('');
  const [numParticipants, setNumParticipants] = useState<number>(1);
  const [userName,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [loading,setLoading] = useState(true);
  const [numParticipantMax,setNumParticipantsMax] = useState<number>(1);
  const [isJoining,setJoining] = useState(false);
 
  useEffect(()=>{
    setRoomId(props.id);
    setSubject(props.subject);
    setJoining(props.isJoiningRoom);
    setStartTime(Date.now());
    ReactModal.setAppElement('body'); // pour pouvoir afficher le Modal popUpInvite
    if (LocalStorage.isAuth()){
      let u = LocalStorage.getUser();
      setUsername(u.user);
      setEmail(u.email);
    }
   
  }
    
  ,[])

  
  return<div >
    { loading && <Loading/>}
    <div style={{display: loading ? "none"  :"inline"}}>
    <JitsiMeeting 
    domain = "jitsimeetproject.hopto.org:443" // domaine du serveur jitsi
  //  domain = "localhost:8443"
    roomName = {roomId}
    configOverwrite = {{
    subject:subject, //ajoute les sujet de la réunion
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
        id: 'custominvite', // l() id
        text: 'inviter un participant',
    }
  ],
  buttonsWithNotifyClick: [
        'custominvite' 
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
  displayName: userName,
  email: email
}}
// api jitsi permettant de
onApiReady = { (api) => {

  setTimeout(()=>{setLoading(false);},1500);
    api.on('participantRoleChanged', (event)=>{
      if(event.role === 'moderator') {
          api.executeCommand('toggleLobby', true);    
      }
    })
    api.on('videoConferenceJoined',(event)=>{
      setNumParticipants((prev) => prev + 1);
      setNumParticipantsMax((prev) => prev + 1);
       create_reunion( Date.now(), numParticipants);
      })

    api.on("participantJoined",(event)=>{
      setNumParticipants((prev) => prev + 1);
      setNumParticipantsMax((prev) => prev + 1);
      })
    
    //on revient à la page d'utilisateur quand la reunion est fini
    api.on('videoConferenceLeft',()=>{
      setNumParticipants((prev) => prev - 1);
      // si on rejoint une réunion on créer pas de réunion dans la bdd
      if (!isJoining){
        end_reunion(roomId,Date.now(),numParticipantMax);
      }
      router.push("/userPage");
    }
    )

    api.addListener('participantLeft',()=>{
      setNumParticipants((prev) => prev - 1);
      console.log("num Participant : " , numParticipants);
     // end_reunion(roomId,Date.now(),numParticipants);
    })

    // quand un utilisateur appuie sur un boutton l'event est déclenché
    api.addListener('toolbarButtonClicked',(e)=>{
        /*quand on clique sur le bouton custominvite qui est crée on affiche un pop-up qui
        permet d'inviter un participant
        */
        if (e.key == 'custominvite'){
          setInvitePopUp(true);  
        }
    })
} }

getIFrameRef = { (iframeRef) => { iframeRef.style.height = String(window.innerHeight-5)+"px"; } }




/>
</div>

 <PopUpInvite setPopUp={setInvitePopUp} invitePopUp={invitePopUp} roomId={roomId}/>

</div>

  


}




