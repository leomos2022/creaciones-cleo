import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookLine,
} from "@remixicon/react";
import { CONTACT_INFO } from "../constants";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const handleWhatsApp = () => {
    const message = `Hola, me interesa conocer más sobre sus servicios de costura.`;
    const whatsappUrl = `https://wa.me/573004039937?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="max-w-7xl mx-auto bg-stone-50 py-20" id="contact">
      <div className="mx-4">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-4 text-stone-800">
          CONTACTO
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto text-stone-600">
          {CONTACT_INFO.text}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-stone-800">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <RiPhoneLine className="text-2xl mr-4 text-amber-700 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-stone-800">
                      {CONTACT_INFO.phone.label}
                    </p>
                    <p className="text-stone-600">{CONTACT_INFO.phone.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <RiMailLine className="text-2xl mr-4 text-amber-700 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-stone-800">
                      {CONTACT_INFO.email.label}
                    </p>
                    <p className="text-stone-600">{CONTACT_INFO.email.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <RiMapPinLine className="text-2xl mr-4 text-amber-700 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-stone-800">
                      {CONTACT_INFO.address.label}
                    </p>
                    <p className="text-stone-600">
                      {CONTACT_INFO.address.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de contacto rápido */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-stone-800">
                Contacto Rápido
              </h4>
              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors shadow-md"
                >
                  <RiWhatsappLine className="text-xl mr-2" />
                  Contactar por WhatsApp
                </button>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-amber-700 hover:bg-amber-800 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors shadow-md">
                    <RiFacebookLine className="text-xl mr-2" />
                    Facebook
                  </button>
                  <button className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors shadow-md">
                    <RiInstagramLine className="text-xl mr-2" />
                    Instagram
                  </button>
                </div>
              </div>
            </div>

            {/* Horarios de atención */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-stone-800">
                Horarios de Atención
              </h4>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                <div className="space-y-2 text-stone-600">
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
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
            <h3 className="text-xl font-semibold mb-6 text-stone-800">
              Envíanos un Mensaje
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                ¡Mensaje enviado exitosamente! Te contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="reduccion-tallas">Reducción de tallas</option>
                  <option value="dobladillos">Dobladillos y descocidos</option>
                  <option value="cremalleras">Cambio de cremallera</option>
                  <option value="ajustes-generales">Ajustes generales</option>
                  <option value="otro">Otro servicio</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                  placeholder="Describe tu consulta o el servicio que necesitas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-700 hover:bg-amber-800 disabled:bg-amber-400 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-md"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
