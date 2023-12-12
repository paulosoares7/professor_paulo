import Btn from "@/components/Button";
import Image from "next/image";
import { CaretCircleDown } from "@phosphor-icons/react/dist/ssr"

import NavigateLinks from "@/components/Navigate";
import guyImage from '../../../../public/assets/GUY-STUDING.png'
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
    <article id ={id} className=" h-screen sm:h-[38rem] p-0 flex flex-col font-sans text-pri-50  "> 
      <div className= "sm:h-[32rem] flex flex-col items-center justify-between mt-4 sm:py-8 sm:px-14 lg:flex-row ">

        <div 
          className=" py-4 text-center b
          flex flex-col items-center justify-start gap-2 
          sm:w-[42rem] lg:justify-center lg:items-start lg:h-full lg:text-left"
        >
          <h1 className=  "w-full text-[22pt] leading-none font-bold md:text-[42pt]  lg:text-[50pt]" >{title}</h1>
          <p className=" text-[12pt] leading-none font-normal mb-12 sm:mb-8 md:text-[14pt] lg:text[16pt]">{text}</p>
          <Btn><NavigateLinks href='#plans'><span className= "p-2">Explore nossos planos</span></NavigateLinks></Btn>
        </div>
        <div className=" w-[20rem] h-[20rem]  lg:min-w-[25.5rem] lg:min-h-[25.5rem] xl:min-w-[32.5rem] xl:min-h-[32.5rem] flex items-center justify-center relative ">
          <Image src={guyImage} width={1920} height={1920}alt="Guy Studing" className="absolute top-[47px] sm:top-[17px] md:top-[-15px] lg:top-[105px] xl:top-[72px] z-10" />

        </div>
      </div>
      <div className= " bg-pri-50 px-14 py-8 flex items-center justify-center lg:justify-start relative">
        <div className="flex items-center gap-2">
          <SocialMideaCTA/>
          <p className=" hidden lg:block text-pri-500 font-semibold"> | {user.city} - {user.province}</p>
        </div>          
        <button className="hidden lg:block w-12 h-12 rounded-full  border-none absolute top-1/4 left-1/2 animate-bounce text-ter-500 duration-200 hover:text-pri-500 " ><Link href='#services'><CaretCircleDown  size={48.5}  /></Link></button>
      </div>
    </article>
  )
}
  