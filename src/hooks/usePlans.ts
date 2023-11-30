
export default function usePlans () {
  
  const plans = [
    {
      id: 0,
      name:'Inercial',
      type:  'Básico',
      description: 'Uma opção acessível para iniciar sua jornada de aprendizado em Física.',
      isRecommended:  false,
      price:  90,
      per: 'Aula',
      amountClass: 1,
      timerStart:  0,
      timerEnd: 1,
      supportMaterial: 'Básico',
      suportCall: 0,
      whatsAppCTA: 'https://wa.me/5592985896938?text=Ol%C3%A1%20Professor%20Paulo,%0A%0AEstou%20empolgado%20para%20come%C3%A7ar%20minha%20jornada%20de%20aprendizado%20em%20F%C3%ADsica!%20Pode%20compartilhar%20mais%20detalhes%20sobre%20o%20Plano%20Inercial%20-%20B%C3%A1sico?%20Estou%20interessado%20em%20entender%20como%20esse%20plano%20pode%20me%20ajudar%20a%20consolidar%20os%20fundamentos.%0A%0AAgrade%C3%A7o%20antecipadamente%20pela%20sua%20resposta!',
    },
    {
      id: 1,
      name:'Energético',
      type:  'Intermediário',
      description: 'Um plano mais abrangente que oferece uma carga maior de conhecimento e recursos.',
      isRecommended:  false,
      price:  90,
      per: 'Mês',
      amountClass: 2,
      timerStart:  1,
      timerEnd: 1.25,
      supportMaterial: 'Intermediário',
      suportCall: 0,
      whatsAppCTA: 'https://wa.me/5592985896938?text=Ol%C3%A1%20Professor%20Paulo,%0A%0AEstou%20empolgado%20para%20come%C3%A7ar%20minha%20jornada%20de%20aprendizado%20em%20F%C3%ADsica!%20Pode%20compartilhar%20mais%20detalhes%20sobre%20o%20Plano%20Inercial%20-%20B%C3%A1sico?%20Estou%20interessado%20em%20entender%20como%20esse%20plano%20pode%20me%20ajudar%20a%20consolidar%20os%20fundamentos.%0A%0AAgrade%C3%A7o%20antecipadamente%20pela%20sua%20resposta!',
    },
    {
      id: 2,
      name:'Quantum',
      type:  'Avançado',
      description: 'Um plano para aqueles que buscam uma compreensão mais profunda, com recursos avançados de aprendizado.',
      isRecommended:  true,
      price:  90,
      per: 'Mês',
      amountClass: 4,
      timerStart:  1,
      timerEnd: 1.25,
      supportMaterial: 'Personalizado',
      suportCall: 0.5,
      whatsAppCTA: 'https://wa.me/5592985896938?text=Ol%C3%A1%20Professor%20Paulo,%0A%0AEstou%20determinado%20a%20aprimorar%20meu%20entendimento%20em%20F%C3%ADsica%20e%20estou%20intrigado%20pelo%20Plano%20Quantum%20-%20Avan%C3%A7ado.%20Pode%20compartilhar%20detalhes%20sobre%20os%20m%C3%A9todos%20avan%C3%A7ados%20e%20conceitos%20espec%C3%ADficos%20abordados?%0A%0AAgrade%C3%A7o%20muito%20pela%20sua%20resposta!',
    },
    {
      id: 3,
      name:'Estelar',
      type:  'Premium',
      description: 'O pacote completo, proporcionando uma experiência educacional celestial com recursos exclusivos e suporte personalizado',
      isRecommended:  false,
      price:  90,
      per: 'Mês',
      amountClass: 6,
      timerStart:  1,
      timerEnd: 1.5,
      supportMaterial: 'Personalizado',
      suportCall: 1,
      whatsAppCTA: 'https://wa.me/5592985896938?text=Ol%C3%A1%20Professor%20Paulo,%0A%0AEstou%20determinado%20a%20aprimorar%20meu%20entendimento%20em%20F%C3%ADsica%20e%20estou%20intrigado%20pelo%20Plano%20Quantum%20-%20Avan%C3%A7ado.%20Pode%20compartilhar%20detalhes%20sobre%20os%20m%C3%A9todos%20avan%C3%A7ados%20e%20conceitos%20espec%C3%ADficos%20abordados?%0A%0AAgrade%C3%A7o%20muito%20pela%20sua%20resposta!',
    },
  ]
  return {
    plans
  }

}



