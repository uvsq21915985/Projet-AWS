"use client";

import Link from "next/link";
import { useState, useEffect, use } from "react";
import { redirect, useRouter } from "next/navigation";
import {  logoutJWT, validateJWT } from "@/services/auth";
import "./header.css";
import LocalStorage from "@/app/hooks/LocalStorage";
import { getInitialLetter } from "@/app/hooks/StringManipullation";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export default function Header(){
    const [active, setActive] = useState<boolean>(false);
    const [show,setShow] = useState<boolean>(false);
    const router = useRouter();
    const [auth, setIsAuth] = useState<null |boolean>(null);
    const [user, setUser] = useState<{username: string, email:string}>({username: "", email: ""});

    

    // Fonction pour vérifier si l'utilisateur est autorisé
    const checkUserAccess = async () => {
        setShow(false);
        try {
                const response = await validateJWT();
                const data = await response.json();
                console.log("RESPONSE : ", data);
                if (response.ok){
                    LocalStorage.saveUser(data.user)
                    console.log("RESP IS OK",data);                   
                    setUser(data.user);
                    // on déclenche l'evenement quand on a auth qui change                                
                    console.log("AUTH : ", auth);
                    if (auth==null || auth==false){
                       
                        setIsAuth(true); 
                        

                    }
                    
                }
                else {
                    console.log("not log in ");
                    if(auth==null|| auth){
                        console.log("IN AUTH ==NULL OR TRUE WILL BE CHANGED : " , auth);
                        setIsAuth(false);
                        console.log("CHANGED : ", auth);
                    }   
                }
        } catch (error) {
            console.log("not validated not log in");        
            if (auth==null || auth){ 
                setIsAuth(false);
            }
        } 
    };

    // Vérifier l'utilisateur ( avec validateJWT ) au premier chargement de la page et écouter les changements de Auth
    useEffect(() => {
        console.log("USER EFFET TRIGGERED: ", auth);
        checkUserAccess(); // Vérifier immédiatement au chargement du composant
        setActive(false);
       const handleAuthChange = () => {
            console.log("-----------------HANDLE CHANGE------------------")
            checkUserAccess(); // Mettre à jour le token quand l'événement est déclenché
           
        };
       window.addEventListener("authChange", handleAuthChange);
       return () => {
            window.removeEventListener("authChange", handleAuthChange);
        };
        
        
    }, []);

    
    // Fonction logout
    const handleLogout = async (e: any) => {
        e.preventDefault()
        try {
            const response = await validateJWT();
            if(response.ok){
                let res = await logoutJWT();
                if(res && res.ok){
                // Déclencher l'événement authChange pour mettre à jour le state immédiatement
                if (auth){
                    LocalStorage.clear();      
                    setIsAuth(false);
                    window.dispatchEvent(new Event("authChange"));
                    router.push('/auth/login');
                }else{setIsAuth(true);}
                }
            }
            else{throw Error}         

        } catch (error) {
            console.log("Error during logout:", error);
        }
    };
       return ( 
            <header className={!auth ?"container" : "container auth-h"} > 
                <div className="header_wrapper">
                    <div className="logo">My<span>Meet</span></div>
                   <nav className={active ? "active" : ""}>
                       <Link href={"/about"}>A propos</Link> 
                        <Link href={"/team"}>Notre equipe</Link>
                     {(auth!=null) && !auth && <Link href={"/auth/login"} className="btn btn-main">Nous rejoindre</Link>}
                    {(auth!=null) && auth && 
                     <div className="auth_mobile_menu">
                     <div className="line"></div>
                     <div className="auth-profil">
                         <div className="auth_badge">{getInitialLetter(user.email ?? "")}</div>
                         <div>Connecter comme <span>{user.email ?? null}</span></div>
                     </div>
                     <Link href={"/userPage"}>Acceuil</Link>
                     <Link href={"/dashboard"}>Dashboard</Link>
                     <Link href={"/createVideoConference"}>Créer une reunion</Link>
                     <Link href={"/dashboard/update/profil"}>modifier Mon profil</Link>
                     <Link href={"/joinRoom"}>Rejoindre une reunion</Link>
                   
                     <Link as={"deconexion"} is="button" onClick={handleLogout} href={"/auth/login"}>Deconexion</Link>
                 </div>
                     }
                     {(auth==null && <Skeleton width={194} height={40}></Skeleton>)}
                     {(auth!=null) && auth && <Link href={"/createVideoConference"} className="btn btn-main">Créer une reunion</Link> }
                    {(auth!=null) && auth && 
                    <div className="auth_side">
                        <div className="auth_badge" onClick={() => setShow(!show)}>{getInitialLetter(user.email ?? "")}</div>
                        <div className={show ? "sub_mav show" : "sub_mav"}>
                            <Link href={"/userPage"}>Acceuil</Link>
                            <Link href={"/dashboard"}>Dashboard</Link>
                            <Link href={"/dashboard/update/profil"}>modifier Mon profil</Link>
                            <Link href={"/joinRoom"}>Rejoindre une reunion</Link>
                            <div className="line"></div>
                            <Link as={"deconexion"} is="button" onClick={handleLogout} href={"/auth/login"}>Deconexion</Link>
                        </div>
                    </div>
                    }
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

/*   :
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
            </header>*/