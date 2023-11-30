import useTeacherInformation from "@/hooks/useTeacherInformation";
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


export default function SocialMideaCTA (){

    const {
        instagram,
        linkedIn,
        twitter,
        github
    } = useTeacherInformation().socialMidea
    
    return (
        <div className="text-pri-500 flex items-center justify-between gap-2">
            <Link href={instagram}><InstagramLogo size={28} /></Link>
            <Link href={linkedIn}><LinkedinLogo  size={28} /></Link>
            <Link href={twitter}><TwitterLogo size={28} /></Link>
            <Link href={github}><GithubLogo size={28} /></Link>
        </div>
    )
}