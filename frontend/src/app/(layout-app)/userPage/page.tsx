"use client";

import { useEffect, useState } from "react";
import { getUser, validateJWT } from "@/services/auth";
import Link from "next/link";
import "./page.css";
import { useRouter } from "next/navigation";

export default function UserPage() {
  const router = useRouter();
  const [username, setUsername] = useState<String>();

  useEffect(() => {
    setStateUser();
  }, []);

  async function setStateUser() {
    let user = await getUser();
    console.log("USERNAME FOUND : ", user);
    setUsername(user.username);
    const reRoute = async () => {
      try{const res = await validateJWT();
      if (!res.ok) {
        router.push("/auth/login");
      }
    }catch(e){router.push("/auth/login");}
    }
    reRoute();
  }

  return (
    <div className="user-container">
      {/* Garde la barre de navigation intacte */}

      {/* Contenu principal */}
      <div className="dashboard-content">
       <div className="welcome-text">Bienvenue  </div>
       <div className="fade-in-class "> {username}</div>

        {/* Phrase unique sous le message de bienvenue */}
        <p className="info-text">
          Restez connectés et échangez sans limites avec <span className="brand">MyMeet</span>.
        </p>

        {/* Boutons */}
        <div className="btn-container">
          <Link href="/createVideoConference" className="btn-primary">
            Lancer un call
          </Link>
          <Link href="/joinRoom" className="btn-secondary">
            Rejoindre un call
          </Link>
        </div>
      </div>
      <img className="logo-meet"src="/vercel.svg" alt="Logo Vercel" />
    </div>
  );
}
