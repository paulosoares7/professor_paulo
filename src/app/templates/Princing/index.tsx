import PlansCards from "@/components/PlansCards";
import usePlans from "@/hooks/usePlans";
import useTeacherInformation from "@/hooks/useTeacherInformation"; 
import Link from "next/link";


interface PrincingProps {
  id: string
}


export default function Princing({id}: PrincingProps) {
const {plans} = usePlans()
const {whatsAppSchedulingLink} = useTeacherInformation().user

return (
  <article id={id} className=" bg-pri-50 py-8 px-12 text-pri-500  p-0 font-sans flex flex-col justify-between items-center gap-4">
    <div className="w-60 text-center p-4">
      <h1 className="text-[16pt] font-semibold">Planos</h1>
    </div>
    <div className="flex-1 flex  flex-col lg:flex-row items-center justify-center gap-6 text-pri-50 ">
      {plans.map( (plan) => (
        
      <PlansCards
      
        plan={plan.name} 
        type= {plan.type}
        isRecommended={plan.isRecommended}
        price={plan.price}
        per={plan.per}
        amountClass={plan.amountClass}
        timerStart={plan.timerStart}
        timerEnd={plan.timerEnd}
        supportMaterial={plan.supportMaterial}
        suportCall={plan.suportCall}
        description={plan.description}
        whatsAppCTA={plan.whatsAppCTA}
        key={plan.id}
      />
        
      ))}
    </div>
    <div className="text-center md: text-[10pt]">
      <span>Não encontrou um plano que lhe interessou? Entre em contato conosco <Link className='text-ter-500 font-semibold' href={whatsAppSchedulingLink}>aqui</Link>.</span>
    </div>
    </article>
    )
  }
  