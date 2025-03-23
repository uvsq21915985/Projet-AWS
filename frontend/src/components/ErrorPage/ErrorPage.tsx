
import Link from "next/link";
import "../../app/globals.css";
import "./errorPage.css"



export default function ErrorPage(){




return (<div className="error-page">
<h1>Erreur ! </h1>
<h4>il y a eu une erreur lors du chargement de la conférence</h4>
<div className="btn-menu"><Link href="/userPage" >Retour au menu utilisateur</Link></div>
</div>) }