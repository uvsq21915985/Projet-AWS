import { ReactNode, useEffect } from "react";
import "./call.css"

type CallAction = {
    title: string,
    icon: string|ReactNode,
    style?: string,
    event: string,
}


type callParams = {
    code: string,
    groups: boolean,
}

function CallAction({icon, title, style, event}:CallAction){
    const handleClick = () => {
        window.dispatchEvent(new CustomEvent('actionEvent', { detail: {action: event} }));
    }

    return (<div className={"call-action " + (style ?? "")} onClick={handleClick}>
        <span>{icon}</span>
        <p>{title}</p>
    </div>)
}

function SingleCall({actions}: {actions: CallAction[]}) {
    return (
        <div className="call">
            <div className="call-room">
                <div className="current-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span> <span>Vous</span>
                    </div>
                </div>
                <div className="foreign-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span>
                    </div>
                </div>
                <div className="call-actions">
                    {actions.map((a, index) => <CallAction key={index} {...a} />)}
                </div>
            </div>
        </div>
    )
}

function GroupCall({actions}: {actions: CallAction[]}){
    return (<div className="call group">
        <div className="call-room">
            <div className="current-view">
                <div className="caller-badge">
                    <span className="caller-badge-sg">AL</span> <span>Vous</span>
                </div>
            </div>
            <div className="call-actions">
                {actions.map((a, index) => <CallAction key={index} {...a} />)}
            </div>
        </div>
        <div className="other-member">
            <div className="other-member-wrapper">
                <div className="foreign-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span>
                    </div>
                </div>
                <div className="foreign-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span>
                    </div>
                </div>
                <div className="foreign-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span>
                    </div>
                </div>
                <div className="foreign-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span>
                    </div>
                </div>
                <div className="foreign-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span>
                    </div>
                </div>
                <div className="foreign-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span>
                    </div>
                </div>
                <div className="foreign-view">
                    <div className="caller-badge">
                        <span className="caller-badge-sg">AL</span>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export function LoadingCall(){
    return (<div className="call loading-call">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>
        </div>
    </div>)
}




export function Call({code, groups}:callParams){
    const actions: CallAction[] = [
        {
            title: "Agrandir",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-5.56 9l1.93-1.93a.3.3 0 0 1 .5 0L11.79 20ZM12 17.38l-.72-.71a2.41 2.41 0 0 0-3.33 0L4.61 20H3v-7h9ZM2 4.11a1 1 0 0 0 .86-.49A1.05 1.05 0 0 0 3.05 3A1 1 0 0 0 2 2a1 1 0 0 0-1 1v.1a1 1 0 0 0 1 1.01M9.91 4h.19a1 1 0 0 0 0-2h-.19a1 1 0 0 0 0 2M2 8.78a1 1 0 0 0 1-1v-.22a1 1 0 1 0-2 0v.22a1 1 0 0 0 1 1M14.09 2h-.19a1 1 0 0 0 0 2h.19a1 1 0 0 0 0-2M5.91 4h.19a1 1 0 0 0 0-2h-.19a1 1 0 0 0 0 2M22 6.4a1 1 0 0 0-1 1v.21a1 1 0 0 0 2 0V7.4a1 1 0 0 0-1-1M17.12 20h-.24a1 1 0 1 0 0 2h.24a1 1 0 0 0 0-2M21.9 2a1 1 0 0 0-.9 1a1 1 0 0 0 .1.42a1 1 0 0 0 1.9-.31V3a1.09 1.09 0 0 0-1.1-1m.1 8.9a1 1 0 0 0-1 1v.22a1 1 0 0 0 2 0v-.22a1 1 0 0 0-1-1M18.09 2h-.19a1 1 0 0 0 0 2h.19a1 1 0 0 0 0-2M22 20a.9.9 0 0 0-.44.11A1 1 0 0 0 21 21a1 1 0 0 0 1 1a1.09 1.09 0 0 0 1-1.1a1 1 0 0 0-1-.9m0-4.56a1 1 0 0 0-1 1v.22a1 1 0 1 0 2 0v-.26a1 1 0 0 0-1-1Z"/></svg>,
            event: "resize"
        },
        {
            title: "Audio",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3z"/><path d="M5 10a7 7 0 0 0 14 0M8 21h8m-4-4v4"/></g></svg>,
            event: "sound"
        },
        {
            title: "Quitter",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m3.4 16.4l-2.3-2.25q-.3-.3-.3-.7t.3-.7q2.2-2.375 5.075-3.562T12 8t5.813 1.188T22.9 12.75q.3.3.3.7t-.3.7l-2.3 2.25q-.275.275-.638.3t-.662-.2l-2.9-2.2q-.2-.15-.3-.35t-.1-.45v-2.85q-.95-.3-1.95-.475T12 10t-2.05.175T8 10.65v2.85q0 .25-.1.45t-.3.35l-2.9 2.2q-.3.225-.663.2t-.637-.3M6 11.45q-.725.375-1.4.863T3.2 13.4l1 1L6 13zm12 .05V13l1.8 1.4l1-.95q-.725-.65-1.4-1.125T18 11.5m0 0"/></svg>,
            event: "leave",
            style: "bg-danger clr-white"
        },
        {
            title: "Video",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20z"/></svg>,
            event: "video"
        },
        {
            title: "Infos",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 12a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 11 12m0-4a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 11 8m0 8a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 11 16"/></svg>,
            event: "info"
        }
    ];

    useEffect(() => {
        const handleCustomEvent = (event: any) => {
            let {detail} = {...(event as CustomEvent)}

          console.log(detail);
        };
    
        window.addEventListener('actionEvent', handleCustomEvent);
    
        return () => {
          window.removeEventListener('actionEvent', handleCustomEvent);
        };
      }, []);

    return groups ? <GroupCall actions={actions} /> : <SingleCall actions={actions} />
}