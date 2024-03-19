import shortUrlImg from "@/app/assets/imgs/shorturl.webp";
import efemeridesImg from "@/app/assets/imgs/efemerides.webp";
import shopmelonImg from "@/app/assets/imgs/shopmelon.webp";
import usdtpriceImg from "@/app/assets/imgs/usdtprice.webp";

import {
  MiniFirebase,
  MiniNext,
  MiniTailwind,
  MiniReact,
  MiniMeli,
  MiniSv,
} from "../app/components/MiniStack";

export const projects = [
  {
    id: 0,
    title: "Acortador URL",
    img: shortUrlImg,
    stack: [
      <MiniNext key={1} />,
      <MiniTailwind key={2} />,
      <MiniFirebase key={3} />,
    ],
    text: "Herramienta la cual permite transformar una URL larga en una version mas corta de la misma. Util para compartir en redes sociales, mensajes o correos, ya que reduce el numero de caracteres y ayuda a la visibilidad.",
    links: {
      github: "https://github.com/Agustin-Gonzalorena/shorturl",
      preview: "https://www.shorturl.ar/",
    },
  },
  {
    id: 1,
    title: "Efemerides",
    img: efemeridesImg,
    stack: [
      <MiniReact key={1} />,
      <MiniTailwind key={2} />,
      <MiniSv key={3} />,
    ],
    text: "Aplicacion web que muestra efemerides del dia, desarrollada con React y TailwindCSS. Utiliza una API desarrolada con Node.js y Express, la cual esta alojada en un servidor local.",
    links: {
      github: "https://github.com/Agustin-Gonzalorena/efemerides-front",
      preview: "https://efemeridedehoy.vercel.app/",
    },
  },
  {
    id: 2,
    title: "E-commerce ShopMelon",
    img: shopmelonImg,
    stack: [<MiniReact key={1} />, <MiniMeli key={2} />],
    text: "E-commerce de tecnologia desarrollado con React, consumiendo la API de Mercado Libre. Cuenta con un carrito de compras, busqueda de productos, filtros y detalles de cada producto.",
    links: {
      github: "https://github.com/Agustin-Gonzalorena/shop_melon_react_js",
      preview: "https://shop-melon-react-js.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Precio USDT",
    img: usdtpriceImg,
    stack: [<MiniReact key={1} />, <MiniTailwind key={2} />],
    text: "Aplicacion web que muestra el precio del USDT en tiempo real en diferentes exchanges. Utiliza la API de CryptoYa para obtener los datos necesarios, los cuales se actualizan minuto a minuto.",
    links: {
      github: "https://github.com/Agustin-Gonzalorena/usdt-price",
      preview: "https://usdtprice.vercel.app/",
    },
  },
];
