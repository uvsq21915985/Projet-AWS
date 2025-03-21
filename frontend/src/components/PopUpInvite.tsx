
import { Dispatch, SetStateAction, useState } from "react";
import './popUpInvite.css';

import ReactModal from 'react-modal';



import '../app/globals.css';
export function PopUpInvite(props: { setPopUp: Dispatch<SetStateAction<boolean>> ; invitePopUp: boolean ; roomId: string; } ) {
  //{setPopUp} :{setPopUp: Dispatch<SetStateAction<boolean>>},roomId: string

  let setPopUp = props.setPopUp;
  let roomId  = props.roomId;
  let invite = props.invitePopUp;
  const [isHovering, setIsHovering] = useState(false)
  const [isHoveringRoomId, setIsHoveringRoomId] = useState(false)
  const [isCopied , setIsCopied] = useState(false)
  const [isCopiedRoomId , setIsCopiedRoomId] = useState(false)
  function close(){
    setPopUp(false)
  }

  function copied(){
    setIsCopied(true);
    setTimeout(function() {
      setIsCopied(false)
   }, 1000);
  }
   function copiedRoomId(){
    setIsCopiedRoomId(true);
    setTimeout(function() {
      setIsCopiedRoomId(false)
   }, 1000);
   }
  

  
    return (

      <ReactModal
        isOpen={invite}
        className={"popUpInvite"}
        style={
          { overlay: {backgroundColor: 'rgba(47,47,47, 0.7)'}, content: {}} }
        >
          <div className='inviteTitle'> Inviter des Participants</div>
          <p>Pour inviter des participants vous devez leurs communiquer le roomId qui est de:</p>

          <button className='btn copybtn roomId' 
          style={{ backgroundColor: isCopiedRoomId ? "rgb(0,100,0)" : "rgba(82, 143, 238, 1)"}} // change color for a period of time when button is clicked to inform that info was copied
          onClick={() =>  {navigator.clipboard.writeText(roomId);copiedRoomId()}}
          onMouseEnter={() => setIsHoveringRoomId(true)}
          onMouseLeave={() => setIsHoveringRoomId(false)}
        >
        { isCopiedRoomId ? "room id copié": 
          isHoveringRoomId ? "copier le room id": roomId}
        </button>
        <p> ils devront le saisir à l'adresse suivante pour pouvoir rejoindre la réunion : </p>
                      
          <button className='btn copybtn' 
          style={{ backgroundColor: isCopied ? "rgb(0,100,0)" : "rgba(82, 143, 238, 1)"}} // change color for a period of time when button is clicked to inform that info was copied
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() =>  {navigator.clipboard.writeText('http://projet-aws-iota.vercel.app/joinRoom');copied()}}
        >
        { isCopied ?  "lien copié dans le presse papier"
        : isHovering ? "copier le lien de la réunion": "http://projet-aws-iota.vercel.app/joinRoom"
        }
        </button>
          <button className="btn closebtn" onClick={close}> Fermer</button>
      </ReactModal>
         
 
    
    );
  }