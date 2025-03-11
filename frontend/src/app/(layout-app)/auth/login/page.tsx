"use client"

import Link from "next/link";
import "./login.css"
import {  FormEvent, useState } from "react";
import { loginJWT } from "@/services/auth";
import { useRouter } from 'next/navigation';


export default function Login() {
    const router = useRouter(); // handle change of url
    const [pending, setPending] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string|null>(null);
    

    const handleSubmit = async (f: FormEvent<HTMLFormElement>) => {
        f.preventDefault();
        const e = new FormData(f.currentTarget);
        console.log("RESPONSEFORM" , e);
        console.log("email :", e.get("email"));
        console.log("password :", e.get("password"));
       // redirect('/videoConference');
        if (pending) {
            console.log("PENDING");
            return 
        }
        setPending(true)
        try {
            console.log("LOGIN STARTING");
           // let res = await login(e);
           let res = await loginJWT(e); 
           console.log("RESPONSE" , res);
            console.log("RESPONSE IS OK :" ,res.ok);
         //   redirect('/videoConference');
            if (res.ok){
                router.push('/userPage');
            }
        } catch (error) {
            console.log("LOGIN EROOR", error);
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
        <form onSubmit={handleSubmit}>
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

