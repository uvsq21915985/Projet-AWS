"use client"

import Link from "next/link";
import "./register.css"
import { useState } from "react";
import { register } from "@/services/auth";


export default function Login() {
        const [pending, setPending] = useState<boolean>(false)
        const [email, setEmail] = useState<string>('');
        const [firstname, setFirstname] = useState<string>('');
        const [lastname, setLastname] = useState<string>('');
        const [password, setPassword] = useState<string>('');
        const [error, setError] = useState<string|null>(null);
    
        const handleSubmit = async (e: FormData) => {
            if (pending) {
                return 
            }
            setPending(true)
            try {
                let res = await register(e);
            } catch (error) {
                setTimeout(() => setError(null), 1500)
                setError("Certain champ sont mal rempli !")
            }
            setPending(false)
        }

    return (
      <div className="auth container">
        <div className="auth-wrapper">
        <h1>S'inscrire</h1>
        <p>S'inscrire pour passer des appels d'une autre manière</p>
        {error && <p className="message msg-error text-center">{error}</p>}
        <form action={handleSubmit} method="post">
            <div className="form-group">
                <label htmlFor="firstname" className="form-label">Nom</label>
                <div className="form-input">
                    <input type="text" name="firstname" required value={firstname} onChange={(e) => setFirstname(e.target.value)} id="firstname" autoComplete="false" placeholder="ex: mymeet" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="lastname" className="form-label">Prénom</label>
                <div className="form-input">
                    <input type="text" name="lastname" required value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastname" autoComplete="false" placeholder="ex: mymeet" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="form-input">
                    <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} id="email" autoComplete="false" placeholder="ex: mymeet@gmail.com" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <div className="form-input">
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} name="password" autoComplete="false" id="password" placeholder="votre mot de passe" />
                </div>
            </div>

            <button className={"btn btn-main jc-c ai-c "+(pending ? "disable" : "")} type="submit">{pending ? "Loading..." : "S'inscrire"}</button>
            <Link href={"/auth/login"}>Déjà membre ? <span className="clr_main">se connecter</span></Link>
        </form>
      </div>
      </div>
    );
  }