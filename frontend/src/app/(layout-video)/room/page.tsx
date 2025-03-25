'use client'

import LocalStorage from '@/app/hooks/LocalStorage';
import AuthLoading from '@/components/AuthLoading/AuthLoading';
import Jitsit from '@/components/Jitsi/Jitsi';
import Loading from '@/components/Loading/Loading';
import { check_room, validateJWT } from '@/services/auth';
import { redirect, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function RoomComponent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [roomId, setRoomId] = useState<string | null>(null);

    useEffect(() => {

            const reRoute = async () => {
              try{const res = await validateJWT();
              if (!res.ok) {
                router.push("/auth/login");
              }
            }catch(e){router.push("/auth/login");}
            }
            reRoute();
      

        const id = searchParams.get('id');
        console.log("ID RECUPERER DS URL " + id);
        if (id) {
            console.log("id is valid");
            // on regarde si l'id de réunion existe dans la base de donnée
            check_room(id).then(
                (isOk) => {
                    console.log(isOk);
                    // redirection si le numéro existe
                    if (!isOk) {
                            setTimeout(()=>{})
                            router.push('/userPage');
                    }
                    else{
                        setRoomId(id);
                        console.log("ROOM ID SET WITH : ", id);
                    }       
                }
            ).catch(
                (err) => {
                    console.log(err);
                    
                    
                }
            )
        }
    }, [searchParams]);

    if (!roomId) {
        
        return <Loading/>; 
    }
    else{
        return <Jitsit id={roomId}  subject={''} isJoiningRoom={false} />;
    }
}

export default function SearchBar() {
    const[isAuth,setAuth] = useState(false);
    const router = useRouter();
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
     },[])
    if (isAuth){
    return (
        // Ajout de Suspense pour le chargement de la page
        <Suspense fallback={<Loading/>}>
            <RoomComponent />
        </Suspense>
    );
    }else{return <AuthLoading/>}
}
