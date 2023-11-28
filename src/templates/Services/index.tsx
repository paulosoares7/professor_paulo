import Image from "next/image";
import paperImage from '../../assets/PAPER.png'
import bookImage from '../../assets/BOOKS.png'
import notebookImage from '../../assets/NOTEBOOK.png'
import ideaImage from '../../assets/IDEA.png'

export default function Services() {
    return (
        <article className="bg-pri-50 h-[35rem] py-1 px-12 font-sans flex flex-col justify-center items-center gap-4"> 
            <div className="w-60 text-center p-4">
                <h1 className="text-[16pt] font-semibold text-pri-500">Meus serviços</h1>
            </div>
     
            <div className=" w-full flex item-center justify-around text-pri-500 leading-none ">
                <div className="w-56 h-72 flex flex-col items-center content-center gap-1">
                    <Image src={ideaImage}  alt="Artigo" className="w-28 h-28"/>
                    <h1 className="font-semibold text-center text mb-4">Acompanhamento Personalizado</h1>
                    <span className="font-medium text-[10pt] text-justify ">Cada estudante é único, e minha abordagem leva em consideração suas habilidades e desafios individuais. Com um acompanhamento personalizado, garantimos que cada passo do aprendizado seja feito de acordo com suas necessidades específicas.</span>
                </div>
                <div className="w-56 h-72 flex flex-col items-center content-center gap-1">
                    <Image src={bookImage}  alt="Artigo" className="w-28 h-28"/>
                    <h1 className="font-semibold text-center text mb-8">Reforço para Provas</h1>
                    <span className="font-medium text-[10pt] text-justify ">Prepare-se com confiança para avaliações e provas. Ofereço um programa de reforço focado nas áreas que demandam mais atenção, proporcionando a você as ferramentas necessárias para alcançar o sucesso acadêmico.</span>
                </div>
                <div className="w-56 h-72 flex flex-col items-center content-center gap-1">
                    <Image src={paperImage}  alt="Artigo" className="w-28 h-28"/>
                    <h1 className="font-semibold text-center text mb-4">Listas de Exercícios e Prática</h1>
                    <span className="font-medium text-[10pt] text-justify ">A prática é essencial para a compreensão profunda da Física. Receba listas de exercícios desafiadores e estrategicamente elaborados para consolidar conceitos e aprimorar suas habilidades, proporcionando um aprendizado sólido e duradouro.</span>
                </div>
                <div className="w-56 h-72 flex flex-col items-center content-center gap-1">
                    <Image src={notebookImage}  alt="Artigo" className="w-28 h-28"/>
                    <h1 className="font-semibold text-center text mb-8">Aulas Presenciais e Online</h1>
                    <span className="font-medium text-[10pt] text-justify ">Ofereço flexibilidade para atender às suas necessidades. Escolha entre a comodidade das aulas online ou a interação presencial, garantindo um aprendizado adaptado ao seu estilo de vida.</span>
                </div>
            </div>
        </article>
    )
  }
  