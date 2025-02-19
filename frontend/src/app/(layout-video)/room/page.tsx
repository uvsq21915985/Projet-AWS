'use client'
 
import Jitsit from '@/components/Jitsi';
import { useSearchParams } from 'next/navigation'
import { useState,useEffect } from 'react'
 
export default function SearchBar() {
  const searchParams = useSearchParams()


  const [roomId, setRoomId] = useState<string>("error");


  useEffect(()=>{
    let id = searchParams.get('id');
    if (id){
        setRoomId(id);
    }
  },[])







  return <Jitsit id={roomId} ></Jitsit>

}
