// Textos provisionales de la propuesta. Lo que va entre corchetes lo confirma el chef.

export const ingredientes = [
  {
    id: 'experiencias',
    ingrediente: 'Chuleta de cordero',
    img: 'media/ing-chuleta-cordero.webp', w: 900, h: 528,
    servicio: 'Experiencias',
    titulo: ['Cenas que', 'se recuerdan.'],
    texto: 'Chef privado y eventos: un menú de autor pensado para tu mesa, en tu casa o donde celebres.',
    nota: 'Para 2 o para [__] invitados.',
    cta: 'Cotiza tu evento',
  },
  {
    id: 'restaurante',
    ingrediente: 'Tortilla inflada',
    img: 'media/ing-tortilla.webp', w: 900, h: 699,
    servicio: 'Restaurante',
    titulo: ['Una mesa', 'propia.'],
    texto: 'La cocina del chef todos los días, con platos de temporada y técnica de autor.',
    nota: 'Pinolo · Ciudad de México',
    cta: 'Pinolo en Instagram',
    href: 'https://www.instagram.com/pinolo_restaurante',
  },
  {
    id: 'consultoria',
    ingrediente: 'Cardamomo',
    img: 'media/ing-cardamomo.webp', w: 900, h: 554,
    servicio: 'Consultoría',
    titulo: ['Cocinas que', 'funcionan.'],
    texto: 'Menús, procesos, costeo y equipo para restaurantes que abren o que quieren crecer.',
    nota: 'Una especia bien medida cambia un plato; un proceso bien medido, una cocina.',
    cta: 'Pide una consultoría',
  },
  {
    id: 'clases',
    ingrediente: 'Cilantro',
    img: 'media/ing-cilantro.webp', w: 900, h: 542,
    servicio: 'Clases',
    titulo: ['Técnica', 'para llevar.'],
    texto: 'Talleres en grupo para cocinar mejor en casa.',
    nota: 'Lo fresco y lo básico, bien hechos, son la base de todo.',
    cta: 'Inscríbete a una clase',
  },
] as const;

export const pasos = [
  { n: '01', titulo: 'Platicamos', texto: 'Qué celebras, cuántos son y qué les gusta comer.' },
  { n: '02', titulo: 'Diseño el menú', texto: 'Una propuesta de tiempos, ingredientes y maridaje.' },
  { n: '03', titulo: 'Cocino', texto: 'Producto fresco y técnica, el mismo día.' },
  { n: '04', titulo: 'A la mesa', texto: 'Servicio completo, sin que te preocupes por nada.' },
] as const;

export const platos = [
  { img: 'media/codorniz.webp', w: 1080, h: 1410, nombre: 'Codorniz', nota: '[Descripción del plato por el chef]', alt: 'Codorniz dorada sobre puré, con papa paja y hierbas, en plato azul' },
  { img: 'media/zamburina.webp', w: 1080, h: 1238, nombre: 'Zamburiña', nota: 'Mantequilla miel · tocino · espuma cítrica', alt: 'Zamburiña en su concha con poro frito, sobre plato claro' },
  { img: 'media/elote-betabel.webp', w: 1080, h: 940, nombre: 'Elote baby', nota: '[Descripción del plato por el chef]', alt: 'Elote baby asado sobre una crema rosa intenso, con un brote verde' },
] as const;

export const preguntas = [
  { q: '¿Con cuánta anticipación reservo un evento?', a: '[Respuesta del chef. Sugerencia: de 2 a 3 semanas para cenas privadas.]' },
  { q: '¿Cocinas para dietas especiales o alergias?', a: '[Respuesta del chef.]' },
  { q: '¿La consultoría es presencial?', a: '[Respuesta del chef.]' },
  { q: '¿Dónde y cada cuándo son las clases?', a: '[Respuesta del chef.]' },
] as const;
