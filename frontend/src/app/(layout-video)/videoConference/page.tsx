"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Jitsit from '@/components/Jitsi/Jitsi';
import ErrorPage from '@/components/ErrorPage/ErrorPage';
import {create_reunion, create_room, reRoute, validateJWT } from "@/services/auth";
import { Suspense } from 'react'
import Loading from '@/components/Loading/Loading';
import LocalStorage from '@/app/hooks/LocalStorage';
import AuthLoading from '@/components/AuthLoading/AuthLoading';

/*
page pour créer une réunion

*/ 
 function VideoConferenceComponenent() {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const [roomId, setRoomId] = useState('');
  const [subject, setSubject] = useState('');
  const [roomExist, setRoomExist] = useState(false);
  const [error, setError] = useState(false);
 


  useEffect(()=> {


    const creatingRoom = async () => {
      try{
      const subject = searchParams.get('subject');
      let reunion = await create_reunion(Date.now(),1);
      let json = await reunion.json();
      let roomID = json.room_id;
      console.log("ROOD FOUNDID  : " ,roomID);
      if (roomID ){   
        if (subject)
        setSubject(subject);
        setRoomId(roomID);
        setRoomExist(true);   
      }else{setError(true);}
      }catch(e){
        setError(true);
      }
    }
    creatingRoom();
},[])
 



  
  return( <div>{ roomExist ? <Jitsit id={roomId} subject={subject} isJoiningRoom={true} /> : <Loading></Loading>}</div>);



}


export default function VideoConference(){
  const router = useRouter(); 
  const[isAuth,setAuth] = useState(false);

  useEffect(()=> {

    /* on teste si l'utilisateur est authentifié 
      si non il est redirigé vers la page de login /auth/login
      */
      const reRoute = async () => {
       try{
         const res = await validateJWT();
         if (!res.ok) {
           router.push("/auth/login");
         }else{
           setTimeout(()=>{setAuth(true);},1000);
         }
       }catch(e){router.push("/auth/login");}
     }
     reRoute();
    });

    if (isAuth){
      return (<Suspense fallback={<Loading/>}>
          <VideoConferenceComponenent />
          </Suspense>);
    }
    
    else{return <AuthLoading/>}
}




/*
error ? <ErrorPage></ErrorPage>:


 { error &&  <p>Erreur lors du chargement veuillez réessayez</p> } 
  { !error && !loading && <Jitsit id={roomId} ></Jitsit> }

  {!error && loading && <div className='call empty-list'><p>Chargement...</p></div>} 

*/


