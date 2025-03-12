'use client'
 
import Jitsit from '@/components/Jitsi';
import { setDefaultAutoSelectFamily } from 'net';
import { useSearchParams } from 'next/navigation'
import { useState,useEffect } from 'react'
 
export default function SearchBar() {
  const searchParams = useSearchParams()


  const [roomId, setRoomId] = useState<string>("error");


  useEffect(()=>{
    let id = searchParams.get('id');
    console.log("ID RECUPERER DS URL " +id);
    if (id){
        console.log("id is valid");
        setRoomId(id);
        console.log("ROOD ID SET WITH : " , roomId);

    }
  },[searchParams])






if (roomId !== "error")
  return <Jitsit id={roomId} ></Jitsit>
  // ADD LOADING SREEN

}
