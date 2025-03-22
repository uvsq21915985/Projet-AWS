
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import './popUpInvite.css';

import ReactModal from 'react-modal';
import { getUser } from '@/services/auth';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.SERVICE_ID  ;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const PUBLIC_KEY = process.env.PUBLIC_KEY;


import '../app/globals.css';
import error from "next/error";
//import { error } from "console";
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
  

  const sendEmail = async(f: FormEvent<HTMLFormElement>) => {
    f.preventDefault();
    const formData = new FormData(f.currentTarget);
    let user = await getUser();
    try{
      // parameters defined in template in emailJS to send emails
    const templateParams = {
        from_name: user.name,
        email: formData.get("email"),
        roomId: roomId,
        link:"https://projet-aws-iota.vercel.app/joinRoom"
    };
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY){
    const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
   
    if (res.status === 200) {
      console.log("Message sent successfully!");

    }
  }else{throw error}
  } catch (error) {
    console.log("Failed to send message. Please try again later.");
  }
}

  
    return (

      <ReactModal
        isOpen={invite}
        className={"popUpInvite"}
        style={
          { overlay: {backgroundColor: 'rgba(47,47,47, 0.7)'}, content: {}} }
        >
          <div className='inviteTitle'> Inviter des Participants</div>
          <h3>En copiant le lien</h3>
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
        <h3>En en voyant un mail</h3>
        <form onSubmit={sendEmail} method="post" className="join-form">
        <div className="same-line-container">
        <label htmlFor="email" className="label">
          Veuillez saisir l'email: 
        </label>
        <input  type="email" name="email" id="email" className="input" placeholder="Entrer l'email de l'utilisateur à inviter" required/>
        <button className="btn emailbtn" type="submit"> envoyer</button>
        </div>
      </form>
          <button className="btn closebtn" onClick={close}> Fermer</button>
      </ReactModal>
         
 
    
    );
  }