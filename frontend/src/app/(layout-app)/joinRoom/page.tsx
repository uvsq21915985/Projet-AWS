"use client"



import { useRouter } from 'next/navigation';

import './page.css'

/* page displayed when user is connected
it has two button one to join a call and another to create
 a new call where the user will automatically be
the moderator
*/

import { FormEvent } from 'react'


export default function JoinRoom() {
    const router = useRouter();



    // set the username with validation with the access token


    const onSubmit = async (formData: FormData) =>{
        
        
            // we get the roomId
        if (formData.get("roomId")){
            let roomId = formData.get("roomId");
            // redirect to URL with  query string
            router.push("/room?id="+roomId); 

        // handling error need to be implemented
    }
    
    }

    

    
  return (
    <div className='user-container'>
   <h1>Rejoindre une vidéoconférence</h1> 
   <form action={onSubmit} method="post">
        Veuillez saisir le RoomID : 
    <input type="text" name="roomId" />
    <button className='btn' type="submit">Submit</button>
  </form>
  </div>
 
  );
}