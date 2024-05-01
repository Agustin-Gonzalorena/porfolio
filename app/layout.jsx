import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Porfolio de Agustin Gonzalorena - Desarrollador web",
  description:
    "Porfolio de Agustin Gonzalorena. Desarrollador web y blockchain entusiasta. FullStack developer. Especializado en la creacion de aplicaciones web personalizadas",
  keywords: "Agustin Gonzalorena, Desarrollador web, Gonzalorena",
  publisher: "Agustin Gonzalorena",
  robots: "index, follow",
  googlebot: "index, follow",
  authors: [
    {
      name: "Agustin Gonzalorena",
      url: "https://github.com/Agustin-Gonzalorena",
    },
  ],
  alternates: {
    canonical: "https://agonzalorena.vercel.app/",
  },
  openGraph: {
    images: {
      url: "https://iili.io/JgNyWru.jpg", // Must be an absolute URL
      width: 800,
      height: 600,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${nunito.className} relative tracking-tight`}>
        {children}
      </body>
    </html>
  );
}
