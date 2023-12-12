import ServicesTags from "@/components/serviceTags";
import useLandingPageInformation from "@/hooks/useLandingPageInformation";

interface ServicesProps {
    id: string
}

export default function Services({id}: ServicesProps) {
    const {servicesCard} = useLandingPageInformation()

   
    return (
        <article id={id} className="bg-pri-50 p-12 font-sans w-full mx-auto gap-4"> 
           <div className="w-60 text-center p-4 mx-auto">
                <h1 className="text-[16pt] -mt-12 font-semibold text-pri-500">Meus serviços</h1>
            </div>
     
            <div className=" w-full flex flex-col gap-4 md:flex-row md:gap-8  items-center justify-center text-pri-500 leading-none ">

                {servicesCard.map(service => (

                <ServicesTags 
                    key={service.id} 
                    local={service.dir} 
                    title={service.title}
                    alt={service.alternative}
                    text={service.text}
                />
                ))}
            </div> 
        </article>
    )
  }
  