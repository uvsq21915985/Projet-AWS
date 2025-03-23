"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Jitsit from '@/components/Jitsi/Jitsi';
import ErrorPage from '@/components/ErrorPage/ErrorPage';
import {create_room, reRoute, validateJWT } from "@/services/auth";
import { Suspense } from 'react'
import Loading from '@/components/Loading/Loading';
import LocalStorage from '@/app/hooks/LocalStorage';

/*
page pour créer une réunion

*/ 
export default function VideoConference() {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const [roomId, setRoomId] = useState('');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
  const creatingRoom = async () => {
    try{
    setLoading(true);
    const subject = searchParams.get('subject');
    let roomID= await create_room(Date.now());
    if (roomID && subject){   
      setSubject(subject);
      setRoomId(roomID);
      setLoading(false);   
    }else{setError(true);}
    }catch(e){
      setError(true);
    }
  }



  
  useEffect(()=>{
    const a = async () => reRoute();
    creatingRoom();
   
  },[])




return (
<div>
  {error ? <ErrorPage></ErrorPage>:
    loading ? <Loading /> : <Jitsit id={roomId} subject={subject} />
  }
</div>

);


}




/*
 { error &&  <p>Erreur lors du chargement veuillez réessayez</p> } 
  { !error && !loading && <Jitsit id={roomId} ></Jitsit> }
  {!error && loading && <div className='call empty-list'><p>Chargement...</p></div>} 

*/


