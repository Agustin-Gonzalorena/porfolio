import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Agustin Gonzalorena - Desarrollador web",
  description:
    "Portfolio de Agustin Gonzalorena. Desarrollador web y blockchain entusiasta. FullStack developer. Especializado en la creacion de aplicaciones web personalizadas",
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
    canonical: "https://agonzalorena.com/",
  },
  openGraph: {
    title: "Agustin Gonzalorena",
    siteName: "Agustin Gonzalorena",
    description:
      "Portfolio de Agustin Gonzalorena. Desarrollador web y blockchain entusiasta.",
    url: "https://agonzalorena.com/",
    images: {
      url: "https://agonzalorena.com/imagen_OpenGraph.png", // Must be an absolute URL
      width: 800,
      height: 600,
    },
    type: "website",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Agustin Gonzalorena",
  url: "https://agonzalorena.com/",
  image: "https://agonzalorena.com/imagen_OpenGraph.png",
  jobTitle: "Desarrollador web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="ACJVrDkGDbhDblH4pJk0wo59CqRqUTIkKPaokRfJYFU"
        />
      </head>
      <body className={`${nunito.className} relative tracking-tight`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
