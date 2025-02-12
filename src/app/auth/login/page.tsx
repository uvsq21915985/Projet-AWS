"use client"

import Link from "next/link";
import "./login.css"
import {  useState } from "react";
import { login } from "@/services/auth";


export default function Login() {

    const [pending, setPending] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string|null>(null);

    const handleSubmit = async (e: FormData) => {
        if (pending) {
            return 
        }
        setPending(true)
        try {
            let res = await login(e);
        } catch (error) {
            setTimeout(() => setError(null), 1500)
            setError("mot de passe ou email erroné !")
        }
        setPending(false)
    }

    return (
      <div className="auth container">
        <div className="auth-wrapper">
        <h1>Connexion</h1>
        <p>Se connecter pour passer des appels d'une autre maniere</p>
        {error && <p className="message msg-error text-center">{error}</p>}
        <form action={handleSubmit} method="post">
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="form-input">
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" autoComplete="false" placeholder="ex: mymeet@gmail.com" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <div className="form-input">
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} name="password" autoComplete="false" id="password" placeholder="votre mot de passe" />
                </div>
            </div>

            <button className={"btn btn-main jc-c ai-c "+(pending ? "disable" : "")} type="submit">{pending ? "Loading..." : "Se connecter"}</button>
            
            <Link href={"/auth/register"}>Pas encore membre ? <span className="clr_main">s&apos;inscrire</span></Link>
        </form>
      </div>
      </div>
    );
  }