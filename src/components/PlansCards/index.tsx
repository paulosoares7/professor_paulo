import useCurrencyFormat from '@/hooks/format/useFormatAmount';
import { Books, ChalkboardTeacher, Timer, Webcam } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { ReactNode } from 'react'


interface plansCardsProps {
         
  id?: number,
  plan: string,
  type: string,
  isRecommended: boolean,
  price: number,
  per: string,
  amountClass: number,
  timerStart: number,
  timerEnd: number,
  supportMaterial: string,
  suportCall: number,
  description: string,
  whatsAppCTA: string,
  children?: ReactNode

}

export default function PlansCards ({
  id,
  plan,
  type,
  isRecommended = true,
  price,
  per,
  amountClass,
  timerStart,
  timerEnd,
  supportMaterial,
  suportCall,
  description,
  whatsAppCTA

}:plansCardsProps){
  const {discountValue, formatTimer} = useCurrencyFormat()




    return !isRecommended ? (
      <div key={id} className=" w-72 lg:w-60 h-[26rem] md:h-96 rounded-lg bg-pri-500 py-4 px-3  font-medium flex flex-col items-start gap-2 text-[10pt] shadow-2whatsAppCTAxl">
              
        <div className=" w-full  flex items-center justify-between text-[12pt]  font-light">
          <span className = 'font-semibold'>{plan}</span>
          <span className="bg-pri-950 py-0.5 px-2 flex justify-center rounded-lg">{type}</span>
        </div>
            
        <div className='h-20'>
          <span className="text-[30pt]  font-semibold ">{`${discountValue(amountClass,price)?.amount}`}</span><span className='text-[8pt]'>/ {per}</span>
          {
            amountClass !== 1 ? (<p className='text-[8pt]  -mt-3'>cerca de {`${discountValue(amountClass,price)?.perClass}`} /aula</p>):(<></>)
          }
        </div>
        <div className="leading-none  text-[8pt] h-14">
          <span>{description}</span>
        </div>
             
        <div className=" w-full flex-1 flex flex-col items-center">

          <ul className="p-0  w-full flex flex-col gap-1 text-[10pt] md:text-[8pt]">
            <li className='flex items-center justify-start gap-2'><span><ChalkboardTeacher size={20}/> </span><span>Número de aulas: {amountClass}</span></li>
            <li className='flex items-center justify-start gap-2'>
              <span><Timer size={20}  /></span>
              <span>Tempo de aula: {(timerEnd-timerStart) === 0 ? formatTimer(timerStart):
                (timerEnd-timerStart) === 0.25 ? `Até ${formatTimer(timerEnd)}`:
                (timerEnd-timerStart) === 0.5 ? `Até ${formatTimer(timerEnd)}`:
                 'Tempo limite inexistente' }
                </span>
              </li>
            <li className='flex items-center justify-start gap-2'><span><Books size={20}  /></span><span>Material de apoio: {supportMaterial}</span></li>
            
            {
              suportCall !== 0 ? (
              <li className='flex items-center justify-start gap-2'>
                <span><Webcam size={20} /></span>
                  <span>Suporte extra para WhatsApp, Google Meet ou Discord: {formatTimer(suportCall)}</span>
              </li>):(<></>)
            }

          </ul>
          <div className=" mt-auto">
            <Link href={whatsAppCTA}><button className="bg-ter-500 py-2 px-8 font-semibold rounded-lg duration-200 hover:bg-ter-350 hover:text-ter-950">Selecionar Plano</button></Link>
          </div>
        </div>
      </div>
    ):(
      <div key={id} className=" w-72 lg:w-60 h-[26rem] md:h-96 rounded-lg bg-pri-950 py-4 px-3  font-medium flex flex-col items-start gap-2 text-[10pt] shadow-2xl">
              
        <div className=" w-full  flex items-center justify-between text-[12pt]  font-light relative">
          <span className = 'font-semibold'>{plan}</span>
          <span className="bg-sec-500 py-0.5 text-pri-950 px-2 flex justify-center rounded-lg">{type}</span>
          <span className="bg-pri-500 text-[8pt] text-pri-50 px-2 py-1 rounded-md absolute -top-7">Mais Popular</span>
        </div>
            
        <div className='h-20'>
          <span className="text-[30pt]  font-semibold ">{`${discountValue(amountClass,price)?.amount}`}</span><span className='text-[8pt]'>/ {per}</span>
          {
            amountClass !== 1 ? (<p className='text-[8pt]  -mt-3'>cerca de {`${discountValue(amountClass,price)?.perClass}`} /aula</p>):(<></>)
          }
        </div>
        <div className="leading-none  text-[8pt] h-14">
          <span>{description}</span>
        </div>
             
        <div className=" w-full flex-1 flex flex-col items-center">

        <ul className="p-0  w-full flex flex-col gap-1 text-[10pt] md:text-[8pt]">
            <li className='flex items-center justify-start gap-2'><span><ChalkboardTeacher size={20}/> </span><span>Número de aulas: {amountClass}</span></li>
            <li className='flex items-center justify-start gap-2'>
              <span><Timer size={20}  /></span>
              <span>Tempo de aula: {(timerEnd-timerStart) === 0 ? formatTimer(timerStart):
                (timerEnd-timerStart) === 0.25 ? `Até ${formatTimer(timerEnd)}`:
                (timerEnd-timerStart) === 0.5 ? `Até ${formatTimer(timerEnd)}`:
                 'Tempo limite inexistente' }
                </span>
              </li>
            <li className='flex items-center justify-start gap-2'><span><Books size={20}  /></span><span>Material de apoio: {supportMaterial}</span></li>
            
            {
              suportCall !== 0 ? (
              <li className='flex items-center justify-start gap-2'>
                <span><Webcam size={20} /></span>
                  <span>Suporte extra para WhatsApp, Google Meet ou Discord: {formatTimer(suportCall)}</span>
              </li>):(<></>)
            }

          </ul>
          <div className=" mt-auto">
            <Link href={whatsAppCTA}><button className="bg-pri-500 py-2 px-8 font-semibold rounded-lg duration-200 hover:bg-ter-350 hover:text-ter-950">Selecionar Plano</button></Link>
          </div>
        </div>
      </div>
    )
         
    
}