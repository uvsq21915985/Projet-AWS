"use client"

import {LoadingCall, Call} from "@/components/calls/Call";
import { useParams } from "next/navigation";

export default function RoomCall(){
    const {slug} = useParams()
    let callParams = {
        code: (slug as string),
        groups: true
    }

    return (<div className="room">
        <Call {...callParams} />
        {/* <LoadingCall /> */}
    </div>)
}