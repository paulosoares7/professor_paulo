import Image from "next/image";

export default function AboutUs() {
    return (
        <article className=" bg-pri-950 py-8 px-12 text-pri-50 h-full p-0 font-sans flex flex-col justify-center items-center gap-4">
          <div className="w-60 text-center p-4">
            <h1 className="text-[16pt] font-semibold">Sobre o Professor</h1>
          </div>
          <div className="flex-1 flex items-center gap-6">
            <div className="w-[42rem] h-[24rem] bg-pri-400 p-2"><Image className='bg-sec-500 w-full h-full' src='' alt="Professor"/></div>
            <div className="h-full flex flex-col items-start gap-4 text-[12pt] ">
              <div>
                <h1 className="font-semibold  mb-2">Apresentação</h1>
                <span className="font-medium text-[10pt] leading-none">Seja bem-vindo! Meu nome é Paulo Soares, e desde 2019 tenho o privilégio de compartilhar meu conhecimento em Física através de aulas particulares. Sou formado em licenciatura em Física pelo IFAM, campus Manaus Centro, no Amazonas.</span>
              </div>
              
              <div>
                <h1 className="font-semibold mb-2">Minha Abordagem</h1>
                <span className="font-medium text-[10pt] leading-none">Com uma paixão por práticas experimentais e a integração de tecnologias inovadoras, minhas aulas oferecem uma experiência de aprendizado dinâmica e envolvente. Busco aplicar metodologias ativas, adaptando-me às características individuais de cada estudante.</span>
              </div>
              
              <div>
                <h1 className="font-semibold mb-2">Descomplicando a Física</h1>
                <span className="font-medium text-[10pt] leading-none">Minha missão vai além do ensino; é garantir o sucesso dos estudantes e promover seu crescimento acadêmico. Meu trabalho é impulsionado pelo desejo de ver meus alunos alcançarem seus objetivos. Ética, seriedade e compromisso são pilares não negociáveis, com o aprendizado do aluno sempre em primeiro lugar.</span>
              </div>

              <div>
                <h1 className="font-semibold mb-2">Missão e Valores</h1>
                <span className="font-medium text-[10pt] leading-none">Minha missão vai além do ensino, é garantir o sucesso dos estudantes e promover seu crescimento acadêmico. Meu trabalho é impulsionado pelo desejo de ver meus alunos alcançarem seus objetivos. Ética, seriedade e compromisso são pilares não negociáveis, com o aprendizado do aluno sempre em primeiro lugar.</span>
              </div>

              <div>
                <h1 className="font-semibold mb-2">Contato</h1>
                <span className="font-medium text-[10pt] leading-none">Estou aqui para apoiar sua jornada acadêmica. Entre em contato para agendar sua aula e descubra como juntos podemos tornar a Física uma experiência de aprendizado gratificante</span>
              </div>
            </div>
          </div>
        </article>
    )
  }
  