import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Porfolio de Agustin Gonzalorena - Desarrollador web",
  description:
    "Porfolio personal de Agustin Gonzalorena. Desarrollador web y blockchain entusiasta. FullStack developer. Especializado en la creacion de aplicaciones web personalizadas",
  keywords: "Agustin Gonzalorena, Desarrollador web, Gonzalorena",
  publisher: "Agustin Gonzalorena",
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: "https://agonzalorena.vercel.app",
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
