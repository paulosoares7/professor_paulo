import DescriptionAboutUs from "@/components/DescriptionAboutUs";
import useLandingPageInformation from "@/hooks/useLandingPageInformation";
import Image from "next/image";
import teacher from "../../../../public/assets/prof.jpg";

interface AboutUsProps {
  id: string
}

export default function AboutUs({id}: AboutUsProps) {
  const {aboutUs} = useLandingPageInformation()
    return (
      <article  id ={id} className=" bg-pri-950 py-8 px-12 text-pri-50 p-0 font-sans flex flex-col justify-center items-center gap-4">
         <div className="w-60 text-center p-4">
          <h1 className="text-[16pt] font-semibold">Sobre o Professor</h1>
        </div>
        <div className="flex-1 flex  flex-col md:flex-row items-center gap-6">
          <div className=" w-[16rem] h-[24rem] md:w-[42rem] md:h-[28rem]  bg-ter-400 p-1">
            <Image className='bg-sec-500 w-full h-full' width={1080} height={1920}  src={teacher} alt="Professor"/></div>
          <div className="h-full flex flex-col items-start gap-4 text-[12pt] ">
              
            {aboutUs.map((text) => (
              <DescriptionAboutUs key={text.id} text={text.text} title={text.title}/>
            ))}  

          </div>
        </div> 
      </article>
    )
  }
  