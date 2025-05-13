import shortUrlImg from "@/app/assets/imgs/1.webp";
import efemerideImg from "@/app/assets/imgs/2.webp";
import usdtpriceImg from "@/app/assets/imgs/4.webp";
import walletImg from "@/app/assets/imgs/5.webp";
import mcpImg from "@/app/assets/imgs/6.webp";

import {
  MiniFirebase,
  MiniNext,
  MiniTailwind,
  MiniReact,
  MiniJava,
  MiniSpring,
} from "../app/components/MiniStack";

export const projects = [
  {
    id: 1,
    title: "Efemerides",
    img: efemerideImg,
    stack: [<MiniSpring key={1} />, <MiniReact key={2} />],
    text: "Aplicacion web que muestra efemerides del dia, desarrollada con React y TailwindCSS. Utiliza una API desarrolada con Node.js y Express, la cual esta alojada en un servidor local.",
    links: {
      github: "https://github.com/Agustin-Gonzalorena/api-efemeride",
      preview: "https://efemeride.agonzalorena.com",
    },
  },
  {
    id: 2,
    title: "MCP Clima",
    img: mcpImg,
    stack: [<MiniJava key={1} />],
    text: "Model Context Protocol local de Tiempo, desarrollado en Java. Utiliza las apis de OpenMeteo para recuperar el tiempo actual de una ciudad, asi el modelo de lenguajeclima puede usar la herramienta para dar la informacion.",
    links: {
      github: "https://github.com/Agustin-Gonzalorena/test-mcp",
      preview: "null",
    },
  },
  {
    id: 3,
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
      preview: "https://shorturl.agonzalorena.com/",
    },
  },
  /* {
    id: 4,
    title: "Precio USDT",
    img: usdtpriceImg,
    stack: [<MiniReact key={1} />, <MiniTailwind key={2} />],
    text: "Sitio web que muestra el precio del USDT en tiempo real en diferentes exchanges. Utiliza la API de CryptoYa para obtener los datos necesarios, los cuales se actualizan minuto a minuto.",
    links: {
      github: "https://github.com/Agustin-Gonzalorena/usdt-price",
      preview: "https://usdt.agonzalorena.com",
    },
  }, */
  {
    id: 5,
    title: "Wallet Creator",
    img: walletImg,
    stack: [<MiniNext key={1} />, <MiniTailwind key={2} />],
    text: "Aplicacion web que permite crear una billetera de Ethereum. Utiliza la libreria de bip39 para generar una frase mnemonica, la cual luego con la ayuda de ethers.js se genera una billetera.",
    links: {
      github: "https://github.com/Agustin-Gonzalorena/wallet-generator",
      preview: "https://wallet.agonzalorena.com",
    },
  },
];
