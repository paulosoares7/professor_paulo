import Image from "next/image";
import callToActionImage from "../../assets/CTA.png";
import { CaretCircleDown, EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, PhoneCall, TwitterLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Btn from "@/components/Button";
import NavigateLinks from "@/components/Navigate";

export default function ContactUs() {


return (
  <article className=" bg-pri-950 py-8 px-12 text-pri-50 h-full p-0 font-sans ">
    

    <div className=" flex items-center justify-between gap-2 w-full h-[32rem]">
      <div className=" h-4/5 p-0"><Image className=' w-full h-full' src={callToActionImage} alt="CTA"/></div>
      <div className="h-full w-[36rem] flex flex-col items-start gap-4 text-[12pt] ">
        <div className=" w-full h-16 flex flex-col items-start justify-center">
          <h1 className="font-semibold leading-[1pt] mb-2">PAULO SOARES RODRIGUES</h1>
          <span className="font-medium text-[8pt]">
          PROFESSOR DE FÍSICA
          </span>
        </div>
        
        <div>
          <h1 className=  " text-[30pt] font-bold">Vamos Iniciar Sua Jornada</h1>
          <span className="font-medium text-[10pt]">
          Se você está pronto para descomplicar a Física, aprimorar seu entendimento e alcançar seus objetivos acadêmicos, estou aqui para ajudar! Entre em contato para agendar sua primeira aula ou para discutir como posso adaptar meus serviços para atender às suas necessidades específicas.
          </span>
        </div>
        
        <div className="flex flex-col gap-2 items-start ">
          <div className="flex items-center justify-start gap-2 lean">
            <EnvelopeSimple size={28}/>
            <a  className="font-medium text-[10pt]" href="mailto:paulosoaresrodrigues@outlook.com">Enviar email</a>
          </div>
          <div className="flex items-center justify-start gap-2">
            <PhoneCall  size={28}/>
            <a  className="font-medium text-[10pt]" href="tel:+5592985896938">Telefone</a>
          </div>
          <div className="flex items-center justify-start gap-2 mb-10">
            <WhatsappLogo  size={28}/>
            <a  className="font-medium text-[10pt]" href="tel:+5592985896938">Whatsapp</a>
          </div>
          <Btn><NavigateLinks label='Agende Sua Aula Agora' href='./'></NavigateLinks></Btn>
        </div>

      </div>
    </div>
    <div className= " w-full h-14 mt-2 py-1  flex items-center justify-center gap-2 relative text-pri-500">
      <InstagramLogo size={28} />
      <LinkedinLogo size={28} />
      <TwitterLogo size={28} />
      <GithubLogo size={28} />
    </div>
  </article>
  )
}
  