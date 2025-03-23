"use client";

import Link from "next/link";
import { useState, useEffect, use } from "react";
import { redirect, useRouter } from "next/navigation";
import {  logoutJWT, validateJWT } from "@/services/auth";
import "./header.css";
import LocalStorage from "@/app/hooks/LocalStorage";
import { getInitialLetter } from "@/app/hooks/StringManipullation";


export default function Header(){
    const [active, setActive] = useState<boolean>(false);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null); // Commencer avec null
    const [loading, setLoading] = useState(true);
    const [show,setShow] = useState<boolean>(false);
    const router = useRouter();
    const [auth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState<{username: string, email:string}>({username: "", email: ""});
    

    

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
                if (response.ok){
                    LocalStorage.saveUser(data.user)
                    console.log(data);
                    
                    setUser(data.user);
                
                    setIsAuth(true);
                console.log
                    setIsAllowed(true);
                    
                }
                else {
                    console.log("not log in ")
                    setIsAllowed(false);
                    setIsAuth(false);
                }
                setLoading(false);
            
        } catch (error) {
            console.log("not validated not log in")
          //  console.error("Validation error:", error);
            setIsAllowed(false);
            setIsAuth(false)
            setLoading(false);
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
    const handleLogout = async (e: any) => {
        e.preventDefault()
        try {
            const response = await validateJWT();
            if(response.ok){
                let res = await logoutJWT();
                if(res && res.ok){
                // Déclencher l'événement authChange pour mettre à jour le state immédiatement
                window.dispatchEvent(new Event("authChange"));
                LocalStorage.clear();
                router.push('/auth/login');
                setIsAuth(false);
            }
            }
            else{throw Error}         

        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

  
   // if (loading) return <div>Chargement....</div>
       return ( 

            <header className={!auth ?"container" : "container auth-h"} >
                
               { 

              
               // quand on est pas authentifié
               !auth ?
                <div className="header_wrapper">
                    <div className="logo">My<span>Meet</span></div>
    
                   <nav className={active ? "active" : ""}>
                        <Link href={"/about"}>A propos</Link>
                        <Link href={"/team"}>Notre equipe</Link>
                        <Link href={"/auth/login"} className="btn btn-main">Nous rejoindre</Link>
                    </nav>
    
                    <div className="nav-btn d-sm" onClick={() => setActive(!active)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                :
                // quand on est authentifié
                <div className="header_wrapper">
                <div className="logo">My<span>Meet</span></div>
    
                <nav className={active ? "active" : ""}>
                    <Link href={"/about"}>A propos</Link>
                    <Link href={"/team"}>Notre equipe</Link>
                    <div className="auth_mobile_menu">
                        <div className="line"></div>
                        <div className="auth-profil">
                            <div className="auth_badge">{getInitialLetter(user.email ?? "")}</div>
                            <div>Connecter comme <span>{user.email ?? null}</span></div>
                        </div>
                        <Link href={"/dashboard"}>Dashboard</Link>
                        <Link href={"/createVideoConference"}>Créer une reunion</Link>
                        <Link href={"/dashboard/update/profil"}>modifier Mon profil</Link>
                        <Link href={"/joinRoom"}>Rejoindre une reunion</Link>
                      
                        <Link as={"deconexion"} is="button" onClick={handleLogout} href={"/auth/login"}>Deconexion</Link>
                    </div>
                    <Link href={"/createVideoConference"} className="btn btn-main">Créer une reunion</Link>
    
                    <div className="auth_side">
                        <div className="auth_badge" onClick={() => setShow(!show)}>{getInitialLetter(user.email ?? "")}</div>
                        <div className={show ? "sub_mav show" : "sub_mav"}>
                            <Link href={"/dashboard"}>Dashboard</Link>
                            <Link href={"/dashboard/update/profil"}>modifier Mon profil</Link>
                            <Link href={"/joinRoom"}>Rejoindre une reunion</Link>
                            <div className="line"></div>
                            <Link as={"deconexion"} is="button" onClick={handleLogout} href={"/auth/login"}>Deconexion</Link>
                        </div>
                    </div>
                </nav>
    
                <div className="nav-btn d-sm" onClick={() => setActive(!active)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
                }
            </header>
        )
  
}