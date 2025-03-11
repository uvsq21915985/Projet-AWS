'use client'
 
import { usePathname } from 'next/navigation'

import Link from "next/link";
import './side-bar.css'
import { ReactNode } from "react";

export type MenuItem = {
    title: string,
    icon: string|ReactNode,
    link: string,
    subs?: MenuItem[]
}

export default function SideBar(){
    let menu: MenuItem[] = [
        {
            title: "Dashboard",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444l-7 5.444V19zM7 15h10v2H7z"/></svg>,
            link: "/dashboard"
        },
        {
            title: "Mes reunions",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8 8 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 0 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0M3 10v4h1v-4zm17 0v4h1v-4zM7.76 15.785l1.06-1.696A5.97 5.97 0 0 0 12 15a5.97 5.97 0 0 0 3.18-.911l1.06 1.696A7.96 7.96 0 0 1 12 17a7.96 7.96 0 0 1-4.24-1.215"/></svg>,
            link: "/dashboard/reunions"
        },
        {
            title: "Mon profil",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m2.595 7.811a3.5 3.5 0 0 1 0-1.622l-.992-.573l1-1.732l.992.573A3.5 3.5 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573l1 1.732l-.991.573a3.5 3.5 0 0 1 0 1.622l.991.573l-1 1.732l-.992-.573a3.5 3.5 0 0 1-1.405.812V22.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573l-1-1.732zM18 19.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"/></svg>,
            link: "/dashboard/update/profil"
        },
        {
            title: "Mot de passe",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zM5 10v10h14V10zm6 4h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2zm1-6V7a4 4 0 0 0-8 0v1z"/></svg>,
            link: "/dashboard/update/password"
        }
    ];

    const pathname = usePathname()

    return (<div className="side-bar">
        {menu.map((m, index) => <Link href={m.link} key={index}>
        <div className={(m.link == pathname) ? "menu_content active" : "menu_content"}>{m.icon} <span>{m.title}</span></div></Link>)}
    </div>)
}