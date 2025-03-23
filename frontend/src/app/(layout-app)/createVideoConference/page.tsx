"use client";

import { useRouter } from "next/navigation";
import "./page.css";
import "./../../globals.css";
import { FormEvent , useEffect, useState } from "react";
import { validateJWT } from "@/services/auth";

export default function JoinRoom() {
  const router = useRouter();
  const [error, setError] = useState<string|null>(null);
  
  useEffect(()=> {

    const reRoute = async () => {
      try{const res = await validateJWT();
      if (!res.ok) {
        router.push("/auth/login");
      }
    }catch(e){router.push("/auth/login");}
    }
    reRoute();
},[])



  const onSubmit = async (f: FormEvent<HTMLFormElement>) => {
    f.preventDefault();
    const formData = new FormData(f.currentTarget);
    if (formData.get("subject")) {
      
          const subject = formData.get("subject")
          router.push("/videoConference?subject="+subject);
      }else{
          setTimeout(() => setError(null), 1500)
            setError("vous devez saisir un sujet")
      }
      
        
    }



  return (
    
    <div className="join-container">
      <h1 className="title">Créer une réunion</h1>
      
      <form onSubmit={onSubmit} method="post" className="join-form">
        <label htmlFor="subject" className="label">
        Veuillez saisir le sujet de la réunion:
        </label>
        <input  style={{ border: error ?"3px solid red": ""}}type="text" name="subject" id="subject" className="input" placeholder="le sujet de la réunion" required/>
        {error && <p className="message-error">{error}</p>}
        <button className="btn-join" type="submit">
          Créer
        </button>
      </form>
      
    </div>
  );
}
