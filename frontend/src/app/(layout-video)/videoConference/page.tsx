"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Jitsit from '@/components/Jitsi/Jitsi';
import {create_room } from "@/services/auth";
import { Suspense } from 'react'
import Loading from '@/components/Loading/Loading';
import LocalStorage from '@/app/hooks/LocalStorage';

/*
page for creating a meeting

*/ 
export default function VideoConference() {
  const router = useRouter(); // handle change of url
  const [roomId, setRoomId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let trials = 0;
  const maxTrails = 6;

  const creatingRoom = async () => {
    setLoading(true);
    let s_name = ""
    while (s_name == "" && trials < maxTrails){
        s_name= await create_room(Date.now());
        trials++;
        
    }
    if (maxTrails == trials){
      setError(true);
    }else{
      setRoomId(s_name);
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    if (!LocalStorage.isAuth()) {
      router.push('/auth/login')
      return
    }
    creatingRoom();
  },[])




return (
<div>
  {loading && <Loading />}
  {!loading && <Jitsit id={roomId} ></Jitsit>}
</div>
);


}

/*
 { error &&  <p>Erreur lors du chargement veuillez réessayez</p> } 
  { !error && !loading && <Jitsit id={roomId} ></Jitsit> }
  {!error && loading && <div className='call empty-list'><p>Chargement...</p></div>} 

*/


