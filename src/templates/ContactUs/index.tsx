import Image from "next/image";
import callToActionImage from "../../../public/assets/CTA.png";
import { EnvelopeSimple, PhoneCall, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Btn from "@/components/Button";
import NavigateLinks from "@/components/Navigate";
import useLandingPageInformation from "@/hooks/useLandingPageInformation";
import useTeacherInformation from "@/hooks/useTeacherInformation";
import ContactAchor from "@/components/ContactAchor";
import SocialMideaCTA from "@/components/SocialMideaCTA";

interface ContactUsProps {
  id: string
}

export default function ContactUs({id}: ContactUsProps) {

  const {text,title} = useLandingPageInformation().contactUs
  const {name,professor,email,numberPhone, whatsAppSchedulingLink} = useTeacherInformation().user

return (
  <article id={id} className=" bg-pri-950 py-8 px-12 text-pri-50 h-full p-0 font-sans ">

    <div className=" flex items-center justify-between gap-2 w-full h-[32rem]">
      <div className=" h-4/5 p-0"><Image className=' w-full h-full' src={callToActionImage} alt="CTA"/></div>
      <div className="h-full w-[36rem] flex flex-col items-start gap-4 text-[12pt] ">
        <div className=" w-full h-16 flex flex-col items-start justify-center">
          <h1 className="font-semibold leading-[1pt] mb-2">{name.toUpperCase()}</h1>
          <span className="font-medium text-[8pt]">{professor.toUpperCase()}</span>
        </div>
        
        <div>
          <h1 className=  " text-[30pt] font-bold">{title}</h1>
          <span className="font-medium text-[10pt]">{text}</span>
        </div>
        
        <div className="flex flex-col gap-2 items-start justify-between h-52 ">
          <div className="flex flex-col gap-2">
            <ContactAchor href={`mailto:${email}`} label={'Enviar email'}  >
              <EnvelopeSimple size={28}/>
            </ContactAchor>
            <ContactAchor href={`tel:${numberPhone}`} label={'Telefone'}  >
              <PhoneCall size={28}/>
            </ContactAchor>
            <ContactAchor href={`${whatsAppSchedulingLink}`} label={'Whatsapp'} >
              <WhatsappLogo size={28}/>
            </ContactAchor>
          </div>

          <Btn><NavigateLinks label='Agende Sua Aula Agora' href={`${whatsAppSchedulingLink}`}></NavigateLinks></Btn>
        </div>

      </div>
    </div>
    <div className= " w-full h-14 mt-2 py-1  flex items-center justify-center gap-2 relative text-pri-500">
      <SocialMideaCTA/>
    </div>
  </article>
  )
}
  