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
    canonical: "https://agonzalorena.com/",
  },
  openGraph: {
    title: "Agustin Gonzalorena",
    siteName: "Agustin Gonzalorena",
    description:
      "Porfolio de Agustin Gonzalorena. Desarrollador web y blockchain entusiasta.",
    url: "https://agonzalorena.com/",
    images: {
      url: "https://iili.io/JgNyWru.jpg", // Must be an absolute URL
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
  image: "https://iili.io/JgNyWru.jpg",
  jobTitle: "Desarrollador web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="ACJVrDkGDbhDblH4pJk0wo59CqRqUTIkKPaokRfJYFU"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-7048144468201725"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7048144468201725"
          crossorigin="anonymous"
        ></script>
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
