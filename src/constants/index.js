import hero from "../assets/images/hero/hero.webp";
import kitchenImage from "../assets/images/services/kitchen.webp";
import bathroomImage from "../assets/images/services/bathroom.webp";
import livingRoomImage from "../assets/images/services/living-room.webp";

import portfolio1 from "../assets/images/portfolio/portfolio1.webp";
import portfolio2 from "../assets/images/portfolio/portfolio2.webp";
import portfolio3 from "../assets/images/portfolio/portfolio3.webp";
import portfolio4 from "../assets/images/portfolio/portfolio4.webp";
import portfolio5 from "../assets/images/portfolio/portfolio5.webp";
import portfolio6 from "../assets/images/portfolio/portfolio6.webp";

import user1 from "../assets/images/reviews/user1.webp";
import user2 from "../assets/images/reviews/user2.webp";
import user3 from "../assets/images/reviews/user3.webp";
import user4 from "../assets/images/reviews/user4.webp";
import user5 from "../assets/images/reviews/user5.webp";
import user6 from "../assets/images/reviews/user6.webp";

export const LINKS = [
  {
    name: "Servicios",
    link: "#services",
  },
  {
    name: "Portafolio",
    link: "#portfolio",
  },
  {
    name: "Sobre mi",
    link: "#about",
  },
  {
    name: "Testimonios",
    link: "#reviews",
  },
  {
    name: "Contacto",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "COSTURAS ARREGLOS",
  subtitle: "Arreglos y costuras profesionales",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Reducción de tallas",
    description:
      "Si tu prenda ya no se ajusta como antes, ofrecemos un servicio de reducción de tallas para que tu ropa quede perfecta. Ya sea que necesites ajustar una camisa, pantalón o vestido, nuestro equipo se encargará de modificar la prenda con precisión para que se ajuste a tus medidas, mejorando el corte y el confort. ¡Renueva tu guardarropa con un ajuste a medida que te haga sentir bien y lucir mejor",
    image: kitchenImage,
    alt: "Kitchen Renovation",
  },
  {
    title: "Dobladillos, Descocidos",
    description:
      "¿Necesitas ajustar el largo de tus pantalones o falda? ¿O quizás reparar un descocido en tu prenda favorita? Nuestro servicio de arreglos de dobladillos y descocidos es la solución perfecta. Ya sea que quieras un dobladillo más corto o reparar costuras que se han soltado, trabajamos con precisión y cuidado para que tu ropa luzca impecable y dure mucho más tiempo. ¡Confía en nosotros para mantener tu ropa en perfecto estado!",
    image: bathroomImage,
    alt: "Bathroom Renovation",
  },
  {
    title: "Cambio de cremallera",
    description:
      "¿Tu cremallera está rota o dañada? Ofrecemos un servicio rápido y eficiente de cambio de cremalleras en todo tipo de prendas, desde chaquetas hasta pantalones. Con materiales de alta calidad y un ajuste preciso, nuestro equipo se asegura de que tu prenda quede como nueva, devolviéndole funcionalidad y estilo. ¡No dejes que una cremallera rota te detenga!",
    image: livingRoomImage,
    alt: "Living Room Renovation",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Chaquetas",
    description:
      "Ofrecemos ajustes y arreglos de chaquetas a medida, garantizando su estilo original. Ya sea una chaqueta formal o casual, adaptamos el diseño y el talle según tus preferencias y necesidades.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Pantalones",
    description:
      "Realizamos ajustes precisos en pantalones, garantizando un fit cómodo y favorecedor. Desde acortar hasta ajustar la cintura o el largo, cuidamos cada detalle para que tus pantalones se ajusten a la perfección.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Faldas",
    description:
      "Nos especializamos en arreglos y ajustes de faldas para que se adapten a tu cuerpo de manera ideal. Ya sea para ajustar el largo, el corte o la cintura, trabajamos para brindarte un resultado cómodo y estilizado.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Blusas",
    description:
      "Arreglamos blusas de todo tipo, ajustando tanto el tamaño como los detalles. Ya sea para ajustar el cuello, las mangas o el corte, nos aseguramos de que cada blusa se ajuste perfectamente a ti.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Camisas",
    description:
      "Realizamos ajustes y arreglos en camisas para un ajuste ideal. Ya sea ajustando las mangas, el cuello o la longitud, garantizamos que cada camisa se ajuste a tu cuerpo con precisión y estilo.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Ropa Deportiva",
    description:
      "Ofrecemos arreglos y ajustes en ropa deportiva para mejorar tu rendimiento y comodidad. Desde leggings hasta camisetas, realizamos ajustes en el fit y la longitud para que se adapten perfectamente a tu cuerpo.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Escucha lo que nuestros clientes dicen sobre sus experiencias con nuestros servicios de costuras y arreglos. Nos enorgullece nuestro trabajo y estamos comprometidos a ofrecer resultados de alta calidad que superen las expectativas.",
  reviews: [
    {
      name: "Francisco Sánchez",
      title: "Ingeniero Civil",
      review:
        "Tenía varias prendas que necesitaban arreglos urgentes, y Cleo Rodríguez no solo cumplió con el tiempo acordado, sino que la calidad fue excepcional. Ahora mis trajes lucen como nuevos. ¡Excelente servicio!",
      image: user1,
    },
    {
      name: "Esteban Quintero",
      title: "Administrador",
      review:
        "Llevé mi ropa de trabajo a Cleo para ajustes, y quedé impresionado con el resultado. Ahora cada prenda tiene un ajuste perfecto y se adapta a mis necesidades diarias. Sin duda, volveré a contratar sus servicios.",
      image: user2,
    },
    {
      name: "Yesenia Macana",
      title: "Enfermera",
      review:
        "Cleo Rodríguez ajustó mis uniformes de trabajo de manera impecable. Su atención al detalle y la calidad de su trabajo superaron mis expectativas. Ahora me siento cómoda y segura en cada turno.",
      image: user3,
    },
    {
      name: "Oscar Silva",
      title: "Chef",
      review:
        "Necesitaba ajustes en mi ropa de cocina, y Cleo lo resolvió de manera rápida y profesional. Mis prendas ahora tienen un ajuste perfecto, y me siento mucho más cómodo en la cocina.",
      image: user4,
    },
    {
      name: "Alicia Fernández",
      title: "Ama de casa",
      review:
        "Cleo transformó un vestido antiguo en una pieza moderna que ahora uso con orgullo. Su habilidad para renovar prendas es impresionante, y el resultado fue mejor de lo que esperaba.",
      image: user5,
    },
    {
      name: "Camilo Monsalve",
      title: "Profesor",
      review:
        "Llevé mis camisas para arreglos con Cleo y quedé encantado con el resultado. Cada pieza quedó como nueva y con un ajuste perfecto. Su profesionalismo y calidad son insuperables.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "¿Tienes preguntas o necesitas más información? Ponte en contacto conmigo y estaré encantada de ayudarte.",
  phone: {
    label: "Phone",
    value: "(57) 300-4039937",
  },
  email: {
    label: "Email",
    value: "estebitan-2000@hotmail.com",
  },
  address: {
    label: "Address",
    value: "Carrera 16 No 200-425, La Paz, Floridablanca, Santander",
  },
};
