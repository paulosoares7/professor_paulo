import Image from "next/image";
import callToActionImage from "../../../../public/assets/CTA.png";
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
  <article id={id} className=" bg-pri-950 py-2 md:py-8 px-4 md:px-12 text-pri-50 p-0 font-sans ">

    <div className=" flex flex-col md:flex-row items-center justify-around gap-2 w-full ">

      <div className=" hidden  md:block h-full p-0"><Image className=' w-full h-full' src={callToActionImage} alt="CTA"/></div>
      <div className="h-full w-[36rem] hidden md:flex flex-col items-start gap-4 text-[12pt] ">
        <div className=" w-full h-16 flex flex-col items-start content-center">
          <h1 className="font-semibold leading-[1pt] mb-2">{name.toUpperCase()}</h1>
          <span className="font-medium text-[8pt]">{professor.toUpperCase()}</span>
        </div>
        
        <div>
          <h1 className=  " text-[30pt] font-bold">{title}</h1>
          <span className="font-medium text-[10pt]">{text}</span>
        </div>
        
        <div className="flex flex-col gap-2 items-start justify-between h-52 ">
          <div className="flex flex-col gap-2 mb-8">
            <ContactAchor href={`mailto:${email}`} label={'Enviar email'}  >
              <EnvelopeSimple size={28}/>
            </ContactAchor>
            <ContactAchor href={`tel:${numberPhone}`} label={'Telefone'}  >
              <PhoneCall size={28}/>
            </ContactAchor>
            <ContactAchor href={whatsAppSchedulingLink} label={'Whatsapp'} >
              <WhatsappLogo size={28}/>
            </ContactAchor>
          </div>
          <NavigateLinks href={whatsAppSchedulingLink}><Btn>Agende Sua Aula Agora</Btn></NavigateLinks>
          <div className= " w-full h-14 mt-2 py-2  flex items-center justify-start gap-2 relative text-pri-500">
            <SocialMideaCTA/>
          </div>
        </div>

      </div>

      <div className="flex md:hidden flex-col items-center gap-4 text-[12pt] ">
        
        <div className=" flex-1 text-center flex flex-col items-center justify-center">
          <h1 className=  " text-[24pt] font-bold">{title}</h1>
          <div className=" w-80 h-80 p-0"><Image className=' w-full h-full' src={callToActionImage} alt="CTA"/></div>
          <span className="font-medium text-[10pt]">{text}</span>
        </div>
        
        <div className=" mt-4 flex flex-col gap-4 items-center justify-between">
       
          <div  className="w-full flex items-center flex-1 justify-between gap-4">
            <div className="flex flex-1 flex-col gap-4 justify-between">
              <div className=" h-8 flex flex-col gap-1 justify-center  leading-[10pt] ">
                <h1 className="font-semibold">{name.toUpperCase()}</h1>
                <span className="font-medium text-[8pt]">{professor.toUpperCase()}</span>
              </div>
              <NavigateLinks  href={whatsAppSchedulingLink}><Btn>Agende Sua Aula Agora</Btn></NavigateLinks>
            </div>
            <div className="flex flex-col  gap-2">
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
          </div>
          <div className= " w-full h-14 py-2  flex items-center justify-center gap-2 relative text-pri-500">
            <SocialMideaCTA/>
          </div>
        </div>

      </div>
    </div>
    
  </article>
  )
}
  