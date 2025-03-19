"use client"

import "./page.css";

const teamMembers = [
    {name : "Hedil", github : "https://github.com/uvsq22401570"},
    {name : "Daniel", github : "https://github.com/pena-daniel"},
    {name : "Read", github : "https://github.com/uvsq22404690"},
    {name : "Amine", github : "https://github.com/uvsq21915985"}
]

export default function TeamPage() {
    return (
        // On utilise les conteneurs info/info-wrapper de ./page.css
        <div className="info">
            <div className="info-wrapper">
                <h1>Bienvenue sur la page de notre équipe</h1>
                <h2>Notre équipe :</h2>
                <div>
                {teamMembers.map((member, index) => (
                    <div key={index} className="member">
                        <a 
                            href={member.github} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="github-link"
                        >
                            {member.name}: {member.github}
                        </a>
                    </div>
                ))}   
                </div>
            </div>
        </div>
    );
}