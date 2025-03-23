"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Jitsit from '@/components/Jitsi/Jitsi';
import ErrorPage from '@/components/ErrorPage/ErrorPage';
import {create_reunion, create_room, reRoute, validateJWT } from "@/services/auth";
import { Suspense } from 'react'
import Loading from '@/components/Loading/Loading';
import LocalStorage from '@/app/hooks/LocalStorage';

/*
page pour créer une réunion

*/ 
 function VideoConferenceComponenent() {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const [roomId, setRoomId] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=> {

    const reRoute = async () => {
      try{
        const res = await validateJWT();
        console.log('VALIDATE TOKEN RESP: ' + res);
      if (!res.ok) {
        router.push("/auth/login");
      }
    }catch(e){router.push("/auth/login");}
    }
    reRoute();
    const creatingRoom = async () => {
      try{
      setLoading(true);
      const subject = searchParams.get('subject');
      let reunion = await create_reunion(Date.now(),1);
      let json = await reunion.json();
      let roomID = json.room_id;
      console.log("ROOD FOUNDID  : " ,roomID);
      if (roomID ){   
        if (subject)
        setSubject(subject);
        setRoomId(roomID);
        setLoading(false);   
      }else{setError(true);}
      }catch(e){
        setError(true);
      }
    }
    creatingRoom();
},[])
 



  
  return( <div>{ !loading ? <Jitsit id={roomId} subject={subject} /> : <Loading></Loading>}</div>);



}


export default function VideoConference(){
  return (<Suspense fallback={<Loading />}>
      <VideoConferenceComponenent />
      </Suspense>);
}




/*
error ? <ErrorPage></ErrorPage>:


 { error &&  <p>Erreur lors du chargement veuillez réessayez</p> } 
  { !error && !loading && <Jitsit id={roomId} ></Jitsit> }

  {!error && loading && <div className='call empty-list'><p>Chargement...</p></div>} 

*/


