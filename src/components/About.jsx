import aboutImage from "../assets/about.webp"
const About = () => {
  return (
   <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
    <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">SOBRE MÍ</h2>
    <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
            <img src={aboutImage} alt="About VastuSpaze" className="w-full h-90"/>
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
        Soy Cleo Rodríguez, costurera profesional egresada del Servicio Nacional de Aprendizaje (SENA) y con más de 20 años de experiencia en la industria de la costura y el diseño de prendas de vestir. Mi pasión por la costura comenzó desde joven, y a lo largo de los años he perfeccionado mis habilidades, especializándome en ropa deportiva y en la realización de arreglos y confección de toda clase de prendas. Mi objetivo es ofrecer a cada cliente un servicio personalizado que garantice un ajuste perfecto y una prenda de alta calidad. Trabajo con dedicación, cuidando cada detalle para asegurar que cada pieza no solo se vea bien, sino que también brinde confort y durabilidad. Mi experiencia me ha permitido conocer las necesidades de mis clientes, adaptándome siempre a sus gustos y estilo personal. ¡Permíteme ayudarte a lucir la prenda perfecta!
        </p>
    </div>
   </section>
  )
}

export default About
