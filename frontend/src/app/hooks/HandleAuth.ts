'use client'

import { validateJWT } from '@/services/auth';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HandleAuth(){
    const[loading, setLoading] = useState(true);
    const [errorPage, setErrorPage] = useState(false);
    const router = useRouter();

    useEffect(()=> {

        const reRoute = async () => {
          try{const res = await validateJWT();
          if (!res.ok) {
            router.push("/auth/login");
           
          }else{ setLoading(false);}
        }catch(e){setErrorPage(true);}
        }
        reRoute();
    },[])

    return {loading: loading,errorPage: errorPage};
}