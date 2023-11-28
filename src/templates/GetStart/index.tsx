import Btn from "@/components/Button";
import NavigateLinks from "@/components/Navigate";
import Image from "next/image";
import { InstagramLogo, LinkedinLogo,TwitterLogo,GithubLogo, CaretCircleDown } from "@phosphor-icons/react/dist/ssr"
import guyImage from '../../assets/GUY-STUDING.png'

export default function GetStart() {
    return (
        <article className=" flex flex-col text-pri-50 h-[35rem] p-0 font-san"> 
          <div className= "h-[28rem] p-8 flex items-center justify-between relative">

            <div className="flex flex-col items-start justify-center gap-2 px-6 w-[42rem] h-full">
              <h1 className=  " text-[50pt] leading-none font-bold">Descomplicando a Física</h1>
              <p className=" text-[16pt] leading-none font-normal mb-8">Aprenda de forma fácil e personalizada com um professor particular dedicado ao seu sucesso acadêmico.</p>
              <Btn><NavigateLinks label='Comece Agora' href='./'></NavigateLinks></Btn>
            </div>
            <div className="flex items-center justify-between gap-3 h-full absolute right-12 top-2 z-50">
              <Image src={guyImage} alt="Guy Studing" className="w-[32.5rem]"/>

            </div>
          </div>
          <div className= " flex-1 bg-pri-50 px-12 py-10 flex items-center justify-start gap-2 relative">
            <InstagramLogo size={28} color="#8205f0" />
            <LinkedinLogo size={28} color="#8205f0" />
            <TwitterLogo size={28} color="#8205f0" />
            <GithubLogo size={28} color="#8205f0" />
            <p className=" text-pri-500 font-semibold"> | Manaus - Amazonas</p>
            <button className="w-12 h-12 rounded-full  border-none absolute top-1/2 right-1/2 animate-bounce text-ter-500 duration-200 hover:text-pri-500 "><CaretCircleDown size={48.5}  /></button>
          </div>
        </article>
    )
  }
  