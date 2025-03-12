"use client";

import { useRouter } from "next/navigation";
import "./page.css";
import { FormEvent } from "react";

export default function JoinRoom() {
  const router = useRouter();

  const onSubmit = async (f: FormEvent<HTMLFormElement>) => {
    f.preventDefault();
    const formData = new FormData(f.currentTarget);
    if (formData.get("roomId")) {
      let roomId = formData.get("roomId");
      console.log("ROOM ID SAIISIE : ",roomId);
      router.push("/room?id=" + roomId);
    }
  };

  return (
    <div className="join-container">
      <h1 className="title">Rejoindre une vidéoconférence</h1>

      <form onSubmit={onSubmit} method="post" className="join-form">
        <label htmlFor="roomId" className="label">
          Veuillez saisir le Room ID :
        </label>
        <input type="text" name="roomId" id="roomId" className="input" placeholder="Entrer l'ID de la salle" />
        <button className="btn-join" type="submit">
          Rejoindre
        </button>
      </form>
    </div>
  );
}
