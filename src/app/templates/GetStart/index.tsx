import Btn from "@/components/Button";
import Image from "next/image";
import { CaretCircleDown } from "@phosphor-icons/react/dist/ssr"

import NavigateLinks from "@/components/Navigate";
import guyImage from '../../../public/assets/GUY-STUDING.png'
import SocialMideaCTA from "@/components/SocialMideaCTA";
import useTeacherInformation from "@/hooks/useTeacherInformation";
import useLandingPageInformation from "@/hooks/useLandingPageInformation";
import Link from "next/link";

interface GetStartProps {
  id: string
}

export default function GetStart({id}: GetStartProps) {

  const {text, title} = useLandingPageInformation().getStart
  const {user} = useTeacherInformation()
  return (
        <article id ={id} className=" text-pri-50 h-[36rem] p-0 font-san"> 
          <div className= "h-[32rem] p-8 flex items-center justify-between relative">

            <div className="flex flex-col items-start justify-center gap-2 px-6 w-[42rem] h-full">
              <h1 className=  " text-[50pt] leading-none font-bold">{title}</h1>
              <p className=" text-[16pt] leading-none font-normal mb-8">{text}</p>
              <Btn><NavigateLinks label='Explore nossos planos' href='#plans'></NavigateLinks></Btn>
            </div>
            <div className="flex items-center justify-between gap-3 h-full absolute right-12 top-10 z-50">
              <Image src={guyImage} alt="Guy Studing" className="w-[32.5rem]"/>

            </div>
          </div>
          <div className= " bg-pri-50 h-[4rem] px-12 py-10 flex items-center justify-start relative">
            <div className="flex items-center gap-2">
              <SocialMideaCTA/>
              <p className=" text-pri-500 font-semibold"> | {user.city} - {user.province}</p>
            </div>          
            <button className="w-12 h-12 rounded-full  border-none absolute top-1/4 left-[640px] animate-bounce text-ter-500 duration-200 hover:text-pri-500 " ><Link href='#services'><CaretCircleDown  size={48.5}  /></Link></button>
          </div>
        </article>
    )
  }
  