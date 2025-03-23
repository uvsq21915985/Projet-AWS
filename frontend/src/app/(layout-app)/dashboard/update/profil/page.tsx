"use client";

import { FormEvent, useEffect, useState } from "react";
import "./page.css";
import { getUser, updateUser, validateJWT } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function Profil() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validate, setValidate] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);

  async function setUserParamters(){
   
    const user = await getUser();
    console.log("USER : ");
    console.log(user);
    setEmail(user.email);
    setPassword(user.password);
    setUsername(user.username);
  }
  useEffect(()=>{
   setUserParamters();
   const reRoute = async () => {
    try{const res = await validateJWT();
    if (!res.ok) {
      router.push("/auth/login");
    }
  }catch(e){router.push("/auth/login");}
  }
  reRoute();


  },[])

const handleSubmit = async (f: FormEvent<HTMLFormElement>) => {
  f.preventDefault();
  try{
    const e = new FormData(f.currentTarget);
    let res = await updateUser(e);
    if (res.ok){
      setValidate("la mis à jour a été faites avec succès")
      setError(null)
      setTimeout(() => setValidate(null), 3000);
    }else{
      setValidate(null );
      setError("erreur lors de la mise à jour des informations")
      setTimeout(() => setError(null), 3000)
    }
  }catch(err){
    setError("erreur lors de la mise à jour des informations")
      setTimeout(() => setError(null), 3000)
  }
  
}
  
  return (
    <div className="profil-page">
      <div className="title-section">
        <h2>Profil</h2>
        <p>
          Vous trouverez ci-dessous les informations de votre profil pour votre
          compte.
        </p>
      </div>
      <div className="">
        <form onSubmit={handleSubmit}>
        <div className="form-group required">
            <label htmlFor="username" className="form-label">
              Nom d'utilisateur
            </label>
            <div className="form-input">
              <input
                type="text"
                required
                name="username"
                autoComplete="false"
                id="username"
                placeholder={username}
              />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="email" className="form-label">
              Adresse email
            </label>
            <div className="form-input">
              <input
                type="email"
                required
                name="email"
                autoComplete="false"
                id="email"
                placeholder={email}
              />
            </div>
          </div>

          <button className="btn btn-main" type="submit">
            Enregistrer
          </button>
        </form>
        {validate && <p className="msg">{validate}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}