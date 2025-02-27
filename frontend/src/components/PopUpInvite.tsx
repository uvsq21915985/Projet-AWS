
import { Dispatch, SetStateAction } from "react";
import './popUpInvite.css';


export function PopUpInvite(props: { setPopUp: Dispatch<SetStateAction<boolean>>; roomId: string; } ) {
  //{setPopUp} :{setPopUp: Dispatch<SetStateAction<boolean>>},roomId: string

  let setPopUp = props.setPopUp;
  let roomId  = props.roomId;
  function handleClick(){
    setPopUp(false);
  }
    return (
      
          <div className="main">
            <h3 >Inviter des Participant</h3>
              <p>Pour inviter des participants vous devez leurs communiquer le roomId qui est de {roomId}</p>
              <p> ils devront le saisir à l'adresse suivante pour pouvoir rejoindre la réunion : </p>
              <p> http://localhost:3000/joinRoom</p>
            
              <button
               className="btn"
                onClick={handleClick}
                
              >
                Close
              </button>
  
            </div>
         
 
    
    );
  }