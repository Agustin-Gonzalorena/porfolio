import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title:
    "Porfolio de Agustin Gonzalorena - Desarrollador web y Blockchain Entusiasta",
  description:
    "Agustin Gonzalorena. Desarrollador web y blockchain entusiasta. FullStack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${nunito.className} relative tracking-tight`}>
        {children}
      </body>
    </html>
  );
}
