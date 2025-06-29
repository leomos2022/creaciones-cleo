import {
  RiHeartFill,
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
} from "@remixicon/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">
              Creaciones Cleo
            </h3>
            <p className="text-stone-300 mb-4">
              Servicios profesionales de costura y arreglos de ropa con más de
              10 años de experiencia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/573004039937"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-green-400 transition-colors"
              >
                <RiMailFill className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">
              Contacto
            </h3>
            <div className="space-y-2 text-stone-300">
              <p>📞 (57) 300-4039937</p>
              <p>📧 estebitan-2000@hotmail.com</p>
              <p>📍 Carrera 16 No 200-425</p>
              <p>La Paz, Floridablanca, Santander</p>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">
              Horarios
            </h3>
            <div className="space-y-2 text-stone-300">
              <div className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span>8:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos:</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Derechos de autor */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-stone-400">
                © {currentYear} Creaciones Cleo. Todos los derechos reservados.
              </p>
            </div>

            {/* Información del desarrollador */}
            <div className="text-center md:text-right">
              <p className="text-stone-400 text-sm">
                Desarrollado con <RiHeartFill className="inline text-red-500" />{" "}
                por{" "}
                <a
                  href="https://github.com/leomos2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  Leonardo Mosquera
                </a>
              </p>
              <p className="text-stone-500 text-xs mt-1">
                Enero 2024 • Bogotá, Colombia
              </p>
            </div>
          </div>
        </div>

        {/* Enlaces adicionales */}
        <div className="mt-6 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/leomos2022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
              title="GitHub del desarrollador"
            >
              <RiGithubFill className="text-xl" />
            </a>
            <a
              href="mailto:estebitan-2000@hotmail.com"
              className="text-stone-400 hover:text-white transition-colors"
              title="Contactar al desarrollador"
            >
              <RiMailFill className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
