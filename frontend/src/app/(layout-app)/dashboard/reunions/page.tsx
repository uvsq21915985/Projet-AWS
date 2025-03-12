"use client";
import { useEffect, useState } from 'react'
import './page.css'
import { get_reunions } from '@/services/auth'

type CallItem = {
    begin_time: string,
    creator: number,
    duration: string,
    end_time: string,
    name: string,
    num_participants: number,
}







function CallItem({call}: {call:CallItem}){
    return (<div className='call-item'>
        <div className="call-item-header">
            <span className="date"> date :{call.begin_time.substring(0,10)}</span>
            <span className="duration">durée: {call.duration}</span>
        </div>
        <div className="call-item-content">
            <div className="item-badge">{ call.creator}</div>
            <div className="code">{call.name}</div>
             <div className="count">{call.num_participants} participant(s)</div>
        </div>
    </div>)
}

export default function Reunions() {
    const [calls, setCalls] = useState<CallItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    //let calls: CallItem[] = [];
    useEffect(()=>{
        const getReunions = async () => { 
            setLoading(true)
            const reunions  = await get_reunions();
            
            let json  = await reunions.json();
            // s'il y a des réunions on les ajoute
            console.log("fghjknlk");
            
            console.log(json);
            
            if (json.length > 0) setCalls(json);
            setLoading(false)
        }
        getReunions();
        
        
    },[]);
    
  return (
    <div>
        <div className="add-line">
            <h2>Mes reunions</h2>
            <div className="btn btn-main">Nouvelle reunion</div>
        </div>
        
        {loading && <div className='call empty-list'>
                <p>Chargement...</p>
              </div>} 
        {!loading && 
        <div className={"calls " + (calls.length == 0 ? "empty-list" : "")}>
            {calls.length == 0 && <>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M195.51 62.66L212.44 44a6 6 0 1 0-8.88-8l-16.93 18.58A94 94 0 0 0 60.49 193.34L43.56 212a6 6 0 0 0 8.88 8l16.93-18.62A94 94 0 0 0 195.51 62.66M46 128a81.93 81.93 0 0 1 132.53-64.51L68.59 184.43A81.7 81.7 0 0 1 46 128m82 82a81.57 81.57 0 0 1-50.53-17.49L187.41 71.57A81.94 81.94 0 0 1 128 210"/></svg>
                <p>Vous n'avez pas encore créé ou participé a aucune reunions</p>
            </>}
            {calls.length != 0 && calls.map((c, index) => <CallItem key={index} call={c} />)}
        </div>}
    </div>
  );
}
