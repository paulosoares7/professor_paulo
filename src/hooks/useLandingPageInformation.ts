import paperImage from '../../public/assets/PAPER.png'
import bookImage from '../../public/assets/BOOKS.png'
import notebookImage from '../../public/assets/NOTEBOOK.png'
import ideaImage from '../../public/assets/IDEA.png'

export default function useLandingPageInformation () {

  const getStart = {
    title: 'Descomplicando a Física',
    text: 'Aprenda de forma fácil e personalizada com um professor particular dedicado ao seu sucesso acadêmico.',
  }

  const servicesCard = [
    {
      id:1,
      dir: paperImage,
      title: 'Acompanhamento Personalizado',
      text: 'Cada estudante é único, e minha abordagem leva em consideração suas habilidades e desafios individuais. Com um acompanhamento personalizado, garantimos que cada passo do aprendizado seja feito de acordo com suas necessidades específicas.',
      alternative: 'Artigo'
    },
    {
      id: 2,
      dir: bookImage,
      title: 'Reforço para Provas',
      text: 'Prepare-se com confiança para avaliações e provas. Ofereço um programa de reforço focado nas áreas que demandam mais atenção, proporcionando a você as ferramentas necessárias para alcançar o sucesso acadêmico',
      alternative: 'Artigo'
    },
    {
      id: 3,
      dir: ideaImage,
      title: 'Listas de Exercícios e Prática',
      text: 'A prática é essencial para a compreensão profunda da Física. Receba listas de exercícios desafiadores e estrategicamente elaborados para consolidar conceitos e aprimorar suas habilidades, proporcionando um aprendizado sólido e duradouro.',
      alternative: 'Artigo'
    },
    {
      id: 4,
      dir: notebookImage,
      title: 'Aulas Presenciais e Online',
      text: 'Ofereço flexibilidade para atender às suas necessidades. Escolha entre a comodidade das aulas online ou a interação presencial, garantindo um aprendizado adaptado ao seu estilo de vida.',
      alternative: 'Notebook'
    },
  ]

  const aboutUs = [
    {
      id:1,
      title: 'Apresentação',
      text: 'Cada estudante é único, e minha abordagem leva em consideração suas habilidades e desafios individuais. Com um acompanhamento personalizado, garantimos que cada passo do aprendizado seja feito de acordo com suas necessidades específicas.',
    },
    {
      id: 2,
      title: 'Minha Abordagem',
      text: 'Com uma paixão por práticas experimentais e a integração de tecnologias inovadoras, minhas aulas oferecem uma experiência de aprendizado dinâmica e envolvente. Busco aplicar metodologias ativas, adaptando-me às características individuais de cada estudante.',
    },
    {
      id: 3,
      title: 'Descomplicando a Física',
      text: 'Meu compromisso é trazer a Física de forma descomplicada, minimizando as dificuldades dos alunos em compreender os fenômenos físicos. Acredito em metodologias que não apenas ensinem, mas também inspirem, buscando constantemente melhorar o aprendizado do estudante e aprimorar suas métricas em sala de aula.     ',
    },
    {
      id: 4,
      title: 'Missão e Valores',
      text: 'Minha missão vai além do ensino; é garantir o sucesso dos estudantes e promover seu crescimento acadêmico. Meu trabalho é impulsionado pelo desejo de ver meus alunos alcançarem seus objetivos. Ética, seriedade e compromisso são pilares não negociáveis, com o aprendizado do aluno sempre em primeiro lugar.',
    },
    {
      id: 5,
      title: 'Contato',
      text: 'Estou aqui para apoiar sua jornada acadêmica. Entre em contato para agendar sua aula e descubra como juntos podemos tornar a Física uma experiência de aprendizado gratificante.',
    },
  ]

  const contactUs = {
    title: 'Vamos Iniciar Sua Jornada',
    text: 'Se você está pronto para descomplicar a Física, aprimorar seu entendimento e alcançar seus objetivos acadêmicos, estou aqui para ajudar! Entre em contato para agendar sua primeira aula ou para discutir como posso adaptar meus serviços para atender às suas necessidades específicas.'
  }



  return {
    getStart,
    servicesCard,
    aboutUs,
    contactUs
  }

}



