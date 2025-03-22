"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Jitsit from '@/components/Jitsi';
import {create_room } from "@/services/auth";

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

  useEffect( ()=>{
    const creatingRoom = async () => {
      setLoading(true)
      while (roomId=='' && trials < maxTrails){
      let name = await create_room(Date.now());
          setRoomId(name);
          trials++;
          console.log("trials is" ,trials);
      }
      if (maxTrails == trials){
        setError(true);
      }
      setLoading(false);
  
    }
   // creatingRoom()
   setRoomId(String(Math.floor( Math.random()* 9000000000000000)));
   setLoading(false);
   console.log("")
  },[])



return (
<div>
  {!loading && <Jitsit id={roomId} ></Jitsit> }


</div>
);


}

/*
 { error &&  <p>Erreur lors du chargement veuillez réessayez</p> } 
  { !error && !loading && <Jitsit id={roomId} ></Jitsit> }
  {!error && loading && <div className='call empty-list'><p>Chargement...</p></div>} 

*/


