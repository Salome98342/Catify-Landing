import type { FaqGroup } from '../types';

export const faqs: FaqGroup[] = [
  {
    title: 'Sobre Catify',
    questions: [
      {
        question: '¿Qué es Catify?',
        answer:
          'Es una plataforma para que los negocios locales publiquen su catálogo digital, reciban pedidos y les hagan seguimiento.',
      },
      {
        question: '¿Cuándo abre?',
        answer:
          'Muy pronto. Todavía no hay una fecha. Si te unes a la lista de espera, te avisamos.',
      },
      {
        question: '¿Mis clientes necesitan una cuenta para pedir?',
        answer: 'No. Pueden armar su carrito y hacer el pedido sin cuenta.',
      },
      {
        question: '¿Puedo cobrar en línea?',
        answer:
          'Por ahora no hay pagos en línea. Los pedidos se registran y tú acuerdas el pago con tu cliente.',
      },
      {
        question: '¿Puedo personalizar mi tienda?',
        answer: 'Sí. Podrás elegir colores, portada y textos.',
      },
    ],
  },
  {
    title: 'Planes',
    questions: [
      {
        question: '¿Cuánto cuesta?',
        answer:
          'El plan Lite cuesta $10.000 y el plan Estándar cuesta $30.000.',
      },
      {
        question: '¿Qué diferencia hay entre los planes?',
        answer:
          'Lite incluye 5 productos y Estándar incluye 20. Ambos permiten 3 fotos por producto y fotos de hasta 20 MB.',
      },
      {
        question: '¿Puedo subir fotos grandes?',
        answer:
          'Sí. Ambos planes permiten hasta 20 MB por foto.',
      },
    ],
  },
  {
    title: 'Del Valle te acompaña',
    questions: [
      {
        question: '¿Qué es Del Valle te acompaña?',
        answer:
          'Es un servicio extra en el que nuestro equipo te ayuda a gestionar tu negocio en línea: catálogo, redes sociales y operación.',
      },
      {
        question: '¿Está incluido en los planes?',
        answer: 'No. Se cotiza aparte según lo que necesites.',
      },
      {
        question: '¿Cómo lo pido?',
        answer:
          'Escríbenos por WhatsApp con tu idea de negocio desde la página del servicio y te respondemos con una cotización.',
      },
    ],
  },
];

export const faqCopy = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Lo que más\nnos preguntan',
  intro: 'Si no encuentras tu duda, escríbenos al final de la página.',
};
