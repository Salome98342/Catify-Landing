import type { Plan } from '../types';

export const plans: Plan[] = [
  {
    name: 'Estándar',
    tag: 'Para crecer',
    description: 'Un catálogo completo para mostrar más productos.',
    price: '$30.000',
    featured: true,
    features: [
      { included: true, text: '20 productos' },
      { included: true, text: '3 fotos por producto' },
      { included: true, text: '20 MB por foto' },
    ],
  },
  {
    name: 'Lite',
    tag: 'Para empezar',
    description: 'Lo esencial para publicar tu catálogo.',
    price: '$10.000',
    features: [
      { included: true, text: '5 productos' },
      { included: true, text: '3 fotos por producto' },
      { included: true, text: '20 MB por foto' },
    ],
  },
];

export const plansComparison = {
  headings: ['', 'Estándar', 'Lite'],
  rows: [
    ['Productos', '20', '5'],
    ['Fotos por producto', '3', '3'],
    ['Peso máximo por foto', '20 MB', '20 MB'],
    ['Del Valle te acompaña', 'Servicio aparte', 'Servicio aparte'],
    ['Precio', '$30.000', '$10.000'],
  ],
};

export const plansCopy = {
  eyebrow: 'Planes de Catify',
  title: 'Elige cómo empezar',
  intro: 'Elige el plan que mejor se adapte a la cantidad de productos de tu negocio.',
  previewEyebrow: 'Planes',
  previewTitle: 'Empieza pequeño,\ncrece cuando lo necesites',
  previewIntro: 'Dos planes claros, con fotos y espacio para tu catálogo.',
  previewLink: 'Comparar los planes',
  compareTitle: 'Comparación',
  waitlistButton: 'Quiero enterarme primero',
  accompanyLink: 'Ver Del Valle te acompaña',
};
