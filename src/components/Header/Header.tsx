"use client"

import Link from "next/link";
import './header.css'
import { useState } from "react";

export default function Header({auth = null}: any){
    const [active, setActive] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    if (!auth) {
        return (
            <header className="container">
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
            </header>
        )
    }

    return (<header className="container auth">
        <div className="header_wrapper">
            <div className="logo">My<span>Meet</span></div>

            <nav className={active ? "active" : ""}>
                <Link href={"/about"}>A propos</Link>
                <Link href={"/team"}>Notre equipe</Link>
                <Link href={"/reunion/new"}>Créer une reunion</Link>
                <div className="auth_mobile_menu">
                    <div className="line"></div>
                    <div className="auth-profil">
                        <div className="auth_badge">DJ</div>
                        <div>Connecter comme <span>Daniel</span></div>
                    </div>
                    <Link href={"/dashboard"}>Dashboard</Link>
                    <Link href={"/dashboard/profil"}>Mon profil</Link>
                    <Link href={"/api/auth/logout"}>Deconexion</Link>
                </div>
                <Link href={"/reunion/new"} className="btn btn-main">Créer une reunion</Link>

                <div className="auth_side">
                    <div className="auth_badge" onClick={() => setShow(!show)}>DJ</div>
                    <div className={show ? "sub_mav show" : "sub_mav"}>
                        <Link href={"/dashboard"}>Dashboard</Link>
                        <Link href={"/dashboard/profil"}>Mon profil</Link>
                        <div className="line"></div>
                        <Link href={"/api/auth/logout"}>Deconexion</Link>
                    </div>
                </div>
            </nav>

            <div className="nav-btn d-sm" onClick={() => setActive(!active)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>)
}