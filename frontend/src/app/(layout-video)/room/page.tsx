'use client'

import Jitsit from '@/components/Jitsi/Jitsi';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function RoomComponent() {
    const searchParams = useSearchParams();
    const [roomId, setRoomId] = useState<string | null>(null);

    useEffect(() => {
        const id = searchParams.get('id');
        console.log("ID RECUPERER DS URL " + id);
        if (id) {
            console.log("id is valid");
            setRoomId(id);
            console.log("ROOM ID SET WITH : ", id);
        }
    }, [searchParams]);

    if (!roomId) {
        // Ajout de Suspense pour le chargement de la page
        return <div>Loading room...</div>; 
    }

    return <Jitsit id={roomId} />;
}

export default function SearchBar() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RoomComponent />
        </Suspense>
    );
}
