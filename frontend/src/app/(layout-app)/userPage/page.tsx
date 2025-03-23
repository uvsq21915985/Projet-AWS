"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/services/auth";
import Link from "next/link";
import "./page.css";

export default function UserPage() {
  const [username, setUsername] = useState<String>();

  useEffect(() => {
    setStateUser();
  }, []);

  async function setStateUser() {
    let user = await getUser();
    console.log("USERNAME FOUND : ", user);
    setUsername(user.username);
  }

  return (
    <div className="user-container">
      {/* Garde la barre de navigation intacte */}

      {/* Contenu principal */}
      <div className="dashboard-content">
        <h2 className="welcome-text">Bienvenue {username}</h2>

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
