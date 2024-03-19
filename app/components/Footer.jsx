const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center">
      <div className="w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center select-none mb-5">
        <div className="text-sm font-medium flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p>
            ©{year} Creado por{" "}
            <a
              href="https://github.com/Agustin-Gonzalorena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Agustin Gonzalorena.
            </a>
          </p>
          <p className="font-thin">
            Basado en el diseño de{" "}
            <a
              href="https://github.com/midudev"
              target="_blank"
              title="midudev"
              rel="noopener noreferrer"
              className="text-[#0099ff]"
            >
              midudev.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
