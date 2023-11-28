import PlansCards from "@/components/PlansCards";



export default function Princing() {


const plans = [
  {
 
    id: 0,
    name: "Inercial",
    type: 'Básico',
    recommended: false,
    price: 90,
    per: "Aula",
    amountClass: 1,
    timerStart: 1,
    timerEnd: 1,
    supportMaterial: "Básico",
    suportCall: 0,
    description: "Uma opção acessível para iniciar sua jornada de aprendizado em Física."

  },
  {
 
    id: 1,
    name: "Energético",
    type: 'Intermediário',
    recommended: false,
    price: 90,
    per: "Mês",
    amountClass: 2,
    timerStart: 1,
    timerEnd: 1.25,
    supportMaterial: "Básico",
    suportCall: 0,
    description: "Um plano mais abrangente que oferece uma carga maior de conhecimento e recursos."

  },
  {
 
    id: 2,
    name: "Quantum",
    type: 'Avançado',
    recommended: true,
    price: 90,
    per: "Mês",
    amountClass: 4,
    timerStart: 1,
    timerEnd: 1.25,
    supportMaterial: "Personalizado",
    suportCall: 0.5,
    description: "Um plano para aqueles que buscam uma compreensão mais profunda, com recursos avançados de aprendizado."

  },
  {
 
    id: 3,
    name: "Estelar",
    type: 'Premium',
    recommended: false,
    price: 90,
    per: "Mês",
    amountClass: 6,
    timerStart: 1,
    timerEnd: 1.5,
    supportMaterial: "Personalizado",
    suportCall: 1,
    description: " Um pacote completo, proporcionando uma experiência educacional celestial com recursos exclusivos e suporte personalizado."

  }
]


return (
  <article className=" bg-pri-50 py-8 px-12 text-pri-500 h-full p-0 font-sans flex flex-col justify-between items-center gap-4">
          <div className="w-60 text-center p-4">
            <h1 className="text-[16pt] font-semibold">Planos</h1>
          </div>
          <div className="flex-1 flex items-center gap-6 text-pri-50 ">
            {plans.map( (plan) => (
              
              <PlansCards
              
                plan={plan.name} 
                type= {plan.type}
                isRecommended={plan.recommended}
                price={plan.price}
                per={plan.per}
                amountClass={plan.amountClass}
                timerStart={plan.timerStart}
                timerEnd={plan.timerEnd}
                supportMaterial={plan.supportMaterial}
                suportCall={plan.suportCall}
                description={plan.description}
                key={plan.id}
                

              />
              
            ))}
          </div>
          <div>
            <span>Não encontrou um plano que lhe interessou? Entre em contato conosco <a className='text-ter-500 font-semibold' href="google.com">aqui</a>.</span>
          </div>
        </article>
    )
  }
  