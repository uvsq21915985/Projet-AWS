"use client"


import { useEffect, useState } from 'react';
import { getUserName } from '@/services/auth';
import Link from "next/link";

import "./page.css";


/* page displayed when user is connected
it has two button one to join a call and another to create
 a new call where the user will automatically be
the moderator
*/
export default function UserPage() {

    const [username, setUsername] = useState<String>();

    // set the username with validation with the access token
    useEffect( ()=>{

        setStateUser();
    })

    async function setStateUser(){
        let user = await getUserName();
        console.log("USERNAME FOUND : ", user);
        setUsername(user);
    }

    
  return (
    
    <div className="user-container">
          <h1>Bienvenue {username}</h1>
          
            <div className="btn-container-user">
              <Link href={"/videoConference"} className="btn-container-user btn">Lancer un call</Link>
              <Link href={"/joinRoom"} className="btn-container-user btn">Rejoindre un call</Link>
              </div>
            
  </div>
 
  );
}