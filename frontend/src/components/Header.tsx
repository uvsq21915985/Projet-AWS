"use client"

import Link from "next/link";
import './header.css'
import { useState } from "react";

export default function Header(){
    const [active, setActive] = useState<boolean>(false);
    return (
        <header className="container">
            <div className="header_wrapper">
                <div className="logo">My<span>Meet</span></div>

                <nav className={active ? "active" : ""}>
                    <Link href={"/auth/login"}>A propos</Link>
                    <Link href={"/auth/login"}>Notre equipe</Link>
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