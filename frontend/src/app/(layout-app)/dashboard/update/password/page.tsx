"use client";

import { FormEvent, useEffect, useState } from "react";
import "./page.css";
import { getUser, updatePassword, updateUser, validateJWT } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function Password() {
  const router = useRouter();
  const [pshow, setPshow] = useState<string>("password");
  const [cPshow, setCpShow] = useState<string>("password");
  const [oldpassword, setOldPassword] = useState<string>('');
  const [newpassword, setNewPassword] = useState<string>('');
  const [validate, setValidate] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);



  useEffect(()=> {

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
    const e = new FormData(f.currentTarget);
   // const user = await getUser();
    const oldp = e.get("password");
    const newp = e.get("newpassword");
   if (!oldp || !newp){
    setError("erreur Veuillez saisir tous les champs")
    return;
   }else{

   
      try{ 
        
        let res = await updatePassword(e);
        if (res.ok){
          setValidate("la mis à jour a été faites avec succès")
          setError(null)
          setTimeout(() => setValidate(null), 3000);
        }else if (res.status==404){
          setValidate(null );
          setError("erreur l'ancien mot de passe ne correspond pas")
          setTimeout(() => setError(null), 3000)
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
}
  
  
  return (
    <div className="passwrd-page">
      <div className="title-section">
        <h2>Mot de passe</h2>
        <p>
          Vous devez renseigner votre mot de passe actuel pour changer de mot de
          passe.
        </p>
      </div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="form-group required">
            <label htmlFor="password" className="form-label">
              Ancien mot de passe
            </label>
            <div className="form-input has-icon">
              <input
                type={pshow}
                required
                name="password"
                autoComplete="false"
                id="password"
                placeholder="votre ancien mot de passe"
              />
              <svg
                className="icon"
                onClick={() => setPshow(pshow == "text" ? "password" : "text")}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3m0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19m0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                />
              </svg>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="newpassword" className="form-label">
              Nouveau du mot de passe
            </label>
            <div className="form-input has-icon">
              <input
                type={cPshow}
                required
                name="newpassword"
                autoComplete="false"
                id="newpassword"
                placeholder="votre nouveau mot de passe"
              />
              <svg
                className="icon"
                onClick={() => setCpShow(pshow == "text" ? "password" : "text")}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3m0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19m0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                />
              </svg>
            </div>
            <small className="form-info">
              Doit contenir au minimum 8 caractères, avec au moins une
              majuscule, un chiffre et un caractère spécial.
            </small>
            {validate && <p className="msg">{validate}</p>}
            {error && <p className="error">{error}</p>} 
          </div>

          <button className="btn btn-main" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
