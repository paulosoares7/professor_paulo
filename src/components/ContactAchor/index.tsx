import Link from "next/link";
import {ReactNode} from "react";

interface ContactAchorProps {
    href: string,
    label: string,
    children: ReactNode
}

export default function ContactAchor({children,href,label}: ContactAchorProps){

    return (
 
        <div className="flex items-center justify-start gap-2 ">
            {children}
            <Link  className="font-medium text-[10pt]" href={href} >{label}</Link>
        </div>
    )
}