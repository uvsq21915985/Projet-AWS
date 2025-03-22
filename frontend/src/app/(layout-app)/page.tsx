'use client';

import Link from 'next/link';
import './page.css'
import Image from 'next/image'
import { validateJWT } from '@/services/auth';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();
  const handleStartCall = async () => {
    try {
      const response = await validateJWT();

      if (response.ok) {
        router.push('/userPage');
      } else {
        router.push('/auth/login');
      }
    } catch (error) {
      console.log("In homepage : ", error);
      router.push('/auth/login');
    }
  };
  
  return (
    <div className="container hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Appels <span>vidéo</span> et 
            <span> visioconférences</span> pour une experience differente </h1>
            <p>Communiquez, collaborez et célébrez les bons moments où que vous soyez avec My<span>Meet</span></p>
            <div className="btn-blocks">
              <button className="btn outlined outlined-main" onClick={handleStartCall}>Lancer un call</button>
              <Link href="/auth/login"><div className="btn btn-main">Nous rejoindre</div></Link>
            </div>
        
        </div>
        <Image
          src="/hom_hero.png"
          width={500}
          height={500}
          alt="Picture of the hero"
        />
        
      </div>
    </div>
  );
}

