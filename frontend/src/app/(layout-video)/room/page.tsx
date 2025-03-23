'use client'

import LocalStorage from '@/app/hooks/LocalStorage';
import Jitsit from '@/components/Jitsi/Jitsi';
import Loading from '@/components/Loading/Loading';
import { check_room } from '@/services/auth';
import { redirect, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function RoomComponent() {
    const searchParams = useSearchParams();
    const router = useRouter()
    const [roomId, setRoomId] = useState<string | null>(null);

    useEffect(() => {
        const id = searchParams.get('id');
        console.log("ID RECUPERER DS URL " + id);
        if (id) {
            console.log("id is valid");
            // first check if the id exist in database
            check_room(id).then(
                (isOk) => {
                    console.log(isOk);
                    // redirect if the code is incorect or if the user doest not have the acces to the room
                    if (!isOk) {
                            router.push('/userPage')
                    }
                    // then set it
                    setRoomId(id);
                    console.log("ROOM ID SET WITH : ", id);

                }
            ).catch(
                (err) => {
                    console.log(err);
                    
                    
                }
            )
        }
    }, [searchParams]);

    if (!roomId) {
        // Ajout de Suspense pour le chargement de la page
        return <Loading />; 
    }

    return <Jitsit id={roomId}  subject={''} />;
}

export default function SearchBar() {
    return (
        <Suspense fallback={<Loading />}>
            <RoomComponent />
        </Suspense>
    );
}
