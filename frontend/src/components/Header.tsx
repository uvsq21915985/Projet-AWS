"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import {  logoutJWT, validateJWT } from "@/services/auth";
import "./header.css";

export default function Header() {
    const [active, setActive] = useState<boolean>(false);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null); // Commencer avec null
    const [isLogin,setIsLogin] = useState<boolean>(false);
    const router = useRouter();

    // Fonction pour vérifier si l'utilisateur est autorisé
    const checkUserAccess = async () => {
        try {
         /*   const storedToken = localStorage.getItem("token") ?? null; // Gérer null proprement
            setToken(storedToken); // Mettre à jour le token dans le state

            if (storedToken) {
                const response = await validate(storedToken);
                const data = await response.json();
                setIsAllowed(data?.is_allowed || false);
            } else {
                setIsAllowed(false);
            }
        } catch (error) {
            console.error("Validation error:", error);
            setIsAllowed(false);
        }*/
            
                const response = await validateJWT();
                const data = await response.json();
                if (response.ok){ setIsAllowed(true);}
                else {
                    console.log("not log in ")
                    setIsAllowed(false);
                }
            
        } catch (error) {
            console.log("not validated not log in")
          //  console.error("Validation error:", error);
            setIsAllowed(false);
        }
    
    };

    // Vérifier le token au premier rendu et écouter les changements
    useEffect(() => {
        checkUserAccess(); // Vérifier immédiatement au chargement du composant

        const handleAuthChange = () => {
            checkUserAccess(); // Mettre à jour le token quand l'événement est déclenché
        };

        window.addEventListener("authChange", handleAuthChange);
        return () => {
            window.removeEventListener("authChange", handleAuthChange);
        };
    }, []);

    // Fonction logout (garde celle que tu veux)
    const handleLogout = async () => {
        try {
            const response = await validateJWT();
            if(response.ok){
                let res = await logoutJWT();
                // Déclencher l'événement authChange pour mettre à jour le state immédiatement
                window.dispatchEvent(new Event("authChange"));
                router.push('/auth/login');
            }
            else{throw Error}
           /* const token = localStorage.getItem("token");
            if (token) {
                await logout(token);
            }
            */
            

        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <header className="container">
            <div className="header_wrapper">
            <Link href="/"> <div className="logo">My<span>Meet</span></div></Link>

                <nav className={active ? "active" : ""}>
                    <Link href="/about">A propos</Link>
                    <Link href="/team">Notre équipe</Link>
                    {isAllowed && (
                        <button onClick={handleLogout} className="btn btn-logout">
                            Se déconnecter
                        </button>
                    )}
                    { !isAllowed && ( <Link href={"/auth/login"} className="btn btn-main">Nous rejoindre</Link>)}
                    { isAllowed && ( <Link href={"/dashboard"} className="btn btn-main">Mon compte</Link>)}
                    
                </nav>

                <div className="nav-btn d-sm" onClick={() => setActive(!active)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}
