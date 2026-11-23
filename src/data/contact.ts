export const contact = {
  navigation: [
    { to: '/', label: 'Inicio' },
    { to: '/planes', label: 'Planes' },
    { to: '/del-valle-te-acompana', label: 'Del Valle te acompaña' },
    { to: '/preguntas-frecuentes', label: 'Preguntas' },
    { to: '/lista-de-espera', label: 'Lista de espera', cta: true },
  ],
  brand: 'CATIFY',
  headerBrandLabel: 'Catify, ir al inicio',
  navigationLabel: 'Principal',
  themeTitle: 'Cambiar tema',
  themeLabel: (theme: 'light' | 'dark') =>
    `Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`,
  contactEyebrow: 'Una duda puntual',
  contactTitle: 'Escríbenos,\nte respondemos',
  emailLabel: 'Correo',
  whatsappLabel: 'WhatsApp',
  footerText: 'Un producto de Del Valle Software. Caicedonia, Valle del Cauca.',
  routeTitles: {
    '/': 'Catify',
    '/planes': 'Planes de Catify',
    '/del-valle-te-acompana': 'Del Valle te acompaña | Catify',
    '/lista-de-espera': 'Lista de espera | Catify',
    '/preguntas-frecuentes': 'Preguntas frecuentes | Catify',
  } as Record<string, string>,
  email: 'delvallesoftware@gmail.com',
  emailSubject: 'Preguntas de Catify',
  whatsappDisplay: '+57 318 4235926',
  whatsappNumber: '573184235926',
  emailStatus: 'Asunto sugerido: Preguntas de Catify',
  whatsappStatus: 'Del Valle Software',
  emailButton: 'Abrir en Gmail',
  whatsappButton: 'Abrir WhatsApp',
  copyEmail: 'Copiar correo',
  copyWhatsapp: 'Copiar número',
};

export const waitlistMessage =
  'Hola, quiero unirme a la lista de espera de Catify.\nMi nombre: \nMi negocio: \nPlan que me interesa (Estándar o Lite): ';
export const accompanyMessage =
  'Hola, quiero cotizar el servicio Del Valle te acompaña.\nMi negocio: \nQué vendo: \nCiudad: \nQué necesito: ';
export const generalQuestionMessage = 'Hola, tengo una pregunta sobre Catify: ';

export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function gmailComposeLink(): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent(contact.emailSubject)}`;
}
