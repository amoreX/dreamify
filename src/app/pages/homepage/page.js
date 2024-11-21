"use client"
import { useSession } from "next-auth/react"
export default function Homepage (){
    const {data: session}=useSession();
    return(
        <div>{session?.user?.name}</div>
    )
}