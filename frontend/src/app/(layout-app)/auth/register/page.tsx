"use client"

import Link from "next/link";
import "./register.css"
import { FormEvent, useState } from "react";
import { register } from "@/services/auth";
import { useRouter } from 'next/navigation';


export default function Register() {
        const router = useRouter(); // handle change of url
        const [pending, setPending] = useState<boolean>(false)
        const [email, setEmail] = useState<string>('');
        const [username, setUsername] = useState<string>('');
        const [password, setPassword] = useState<string>('');
        const [error, setError] = useState<string|null>(null);
    
        const handleSubmit = async (f: FormEvent<HTMLFormElement>) => {
            f.preventDefault();
            const e = new FormData(f.currentTarget);
            console.log("RESPONSEFORM" , e);
            console.log("email :", e.get("email"));
            console.log("username :", e.get("username"));
            console.log("password :", e.get("password"));
            if (pending) {
                return 
            }
            setPending(true)

            try {
                console.log("Registration Starting");
                let res = await register(e);
                console.log("RESPONSE" , res);
                console.log("RESPONSE IS OK :" ,res.ok);
                //   redirect('/videoConference');
                if (res.ok){
                    console.log("IN RES OK");
                    console.log("The user has been registered")
                    router.push('/auth/login');
                }
            } catch (error) {
                console.log("LOGIN ERROR", error);
                setTimeout(() => setError(null), 1500)
                setError("mot de passe ou email erroné !")
            }
            setPending(false)
        }

    return (
      <div className="auth container">
        <div className="auth-wrapper">
        <h1>S'inscrire</h1>
        <p>S'inscrire pour passer des appels d'une autre maniere</p>
        {error && <p className="message msg-error text-center">{error}</p>}
        <form onSubmit={handleSubmit} method="post">
            <div className="form-group">
                <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                <div className="form-input">
                    <input type="text" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} id="username" autoComplete="false" placeholder="ex: mymeet" />
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
            <Link href={"/auth/login"}>Deja membre ? <span className="clr_main">se connecter</span></Link>
        </form>
      </div>
      </div>
    );
  }