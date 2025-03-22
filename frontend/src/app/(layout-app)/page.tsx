import './page.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Appels <span>vidéo</span> et 
            <span> visioconférences</span> pour une experience differente </h1>

            <p>Communiquez, collaborez et célébrez les bons moments où que vous soyez avec My<span>Meet</span></p>
            <div className="btn-blocks">
              <div className="btn outlined outlined-main">Lancer un call</div>
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


  
