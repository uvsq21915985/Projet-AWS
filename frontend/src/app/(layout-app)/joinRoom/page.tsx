"use client";

import { useRouter } from "next/navigation";
import "./page.css";
import "../../../app/globals.css";
import { FormEvent , useState } from "react";
import { check_room } from "@/services/auth";

export default function JoinRoom() {
  const router = useRouter();
  const [error, setError] = useState<string|null>(null);

  const onSubmit = async (f: FormEvent<HTMLFormElement>) => {
    f.preventDefault();
    const formData = new FormData(f.currentTarget);
    if (formData.get("roomId")) {
      let roomId = formData.get("roomId");
      console.log("ROOM ID SAIISIE : ",roomId);
      let roomExist = false;

      if (roomId){
        roomExist = await check_room(roomId.toString());
      }
      if (roomExist){
          router.push("/room?id=" + roomId);
      }else{
          setTimeout(() => setError(null), 1500)
            setError("le roomID est erroné !")
      }
      
        
    }
  };

 

  return (
    
    <div className="join-container">
      <h1 className="title">Rejoindre une vidéoconférence</h1>
      
      <form onSubmit={onSubmit} method="post" className="join-form">
        <label htmlFor="roomId" className="label">
          Veuillez saisir le Room ID :
        </label>
        <input  style={{ border: error ?"3px solid red": ""}}type="text" name="roomId" id="roomId" className="input" placeholder="Entrer l'ID de la salle" required/>
        {error && <p className="message-error">{error}</p>}
        <button className="btn-join" type="submit">
          Rejoindre
        </button>
      </form>
      
    </div>
  );
}
