
export default function useTeacherInformation () {
  
  const teacherInformation = {
  
    user: {
      name: 'Paulo Soares Rodrigues',
      professor: 'Professor de Física',
      teachetImage:'/',
      city:'Manaus',
      province: 'AM',
      numberPhone: '+5592985896938',
      email: 'paulosoaresrodrigues@outlook.com',
      whatsAppSchedulingLink: 'https://wa.me/5592985896938?text=Ol%C3%A1%20Professor%20Paulo,%0A%0AEstou%20pronto%20para%20dar%20o%20pr%C3%B3ximo%20passo%20em%20minha%20jornada%20educacional%20em%20F%C3%ADsica%20e%20gostaria%20de%20agendar%20aulas.%20Pode%20me%20orientar%20sobre%20disponibilidade,%20formatos%20de%20aula%20e%20outros%20detalhes?%0A%0AAgrade%C3%A7o%20antecipadamente%20pela%20sua%20resposta!',
    },
  
    socialMidea: {
      instagram: 'https://www.instagram.com/im_paulosoares/',
      github: 'https://github.com/paulosoares7',
      linkedIn: 'https://www.linkedin.com/in/paulosoares7/',
      twitter: '/'
    },
  }

  const user = teacherInformation.user
  const socialMidea = teacherInformation.socialMidea

  return {
    user,
    socialMidea
  }
}
