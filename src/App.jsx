import React, { useState } from 'react';
import { Lightbulb, Hammer, Users, DollarSign, Menu, X, Globe } from 'lucide-react';

// --- Componente Principal ---
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Función para desplazar la vista suavemente
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false); // Cierra el menú en móvil
    }
  };

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`px-3 py-2 text-sm font-medium transition-all duration-300
        ${activeSection === id 
          ? 'text-white bg-amber-600 rounded-full shadow-lg' 
          : 'text-gray-700 hover:text-amber-600'
        }
      `}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      
      {/* Encabezado Fijo y Navegación */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo y Marca */}
            <div className="flex-shrink-0">
              <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} className="flex items-center space-x-2 cursor-pointer">
                <Lightbulb className="w-8 h-8 text-amber-600" />
                <span className="text-2xl font-black tracking-tighter text-gray-900">
                  HEMER HOUSE <span className="font-light text-amber-600">REFORM</span>
                </span>
                <span className="text-xs font-bold text-gray-500 bg-amber-100 px-2 py-0.5 rounded-full uppercase">
                  Kaizen
                </span>
              </a>
            </div>

            {/* Menú Desktop */}
            <nav className="hidden md:flex md:space-x-4 items-center">
              <NavItem id="servicios" label="Servicios" />
              <NavItem id="kaizen" label="Filosofía Kaizen" />
              <NavItem id="idiomas" label="Idiomas & Cultura" />
              <NavItem id="contacto" label="Contacto" />
              <a 
                href="https://tienda.hemerhouse.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-bold hover:bg-green-700 transition-colors shadow-lg"
              >
                Tienda Virtual (Herramientas)
              </a>
            </nav>

            {/* Botón de Menú Móvil */}
            <button 
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        <div className={`md:hidden overflow-hidden transition-max-h duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <button className="text-gray-700 hover:bg-amber-100 hover:text-amber-800 block px-3 py-2 rounded-md text-base font-medium text-left" onClick={() => scrollToSection('servicios')}>Servicios</button>
            <button className="text-gray-700 hover:bg-amber-100 hover:text-amber-800 block px-3 py-2 rounded-md text-base font-medium text-left" onClick={() => scrollToSection('kaizen')}>Filosofía Kaizen</button>
            <button className="text-gray-700 hover:bg-amber-100 hover:text-amber-800 block px-3 py-2 rounded-md text-base font-medium text-left" onClick={() => scrollToSection('idiomas')}>Idiomas & Cultura</button>
            <button className="text-gray-700 hover:bg-amber-100 hover:text-amber-800 block px-3 py-2 rounded-md text-base font-medium text-left" onClick={() => scrollToSection('contacto')}>Contacto</button>
            <a 
              href="https://tienda.hemerhouse.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-green-600 hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium text-center transition-colors mt-2"
            >
              Tienda Virtual
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Sección 1: Hero - Introducción */}
        <section id="inicio" className="relative pt-12 pb-24 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80)" }}>
          <div className="absolute inset-0 bg-gray-900/60"></div> {/* Oscurece la imagen para mejor lectura */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4">
              Reforma Kaizen en Japón:
            </h1>
            <p className="text-3xl font-light mb-8 max-w-4xl">
              **Especialistas en la prefectura de Kanagawa.** Diseñamos espacios que mejoran la calidad de vida, un pequeño paso a la vez.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-3 text-lg font-bold bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors shadow-xl transform hover:scale-105"
              >
                Solicitar Presupuesto
              </button>
              <a 
                href="tel:+81-00-0000-0000" 
                className="px-8 py-3 text-lg font-semibold bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors shadow-xl flex justify-center items-center"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </section>

        {/* Sección 2: Servicios */}
        <section id="servicios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-4">Nuestros Servicios de Alto Valor</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Desde pequeñas mejoras hasta renovaciones completas, siempre bajo el principio de la mejora continua japonesa (Kaizen).
            </p>
            
            <div className="grid md:grid-cols-3 gap-10">
              {/* Tarjeta 1 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-600">
                <Hammer className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Reforma Interior (水回り)</h3>
                <p className="text-gray-600">
                  Renovación de cocinas, baños y aseos. Enfocados en la eficiencia del espacio, durabilidad y materiales de calidad que cumplen con las normativas japonesas.
                </p>
              </div>

              {/* Tarjeta 2 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-600">
                <Lightbulb className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Aislamiento y Eficiencia Energética</h3>
                <p className="text-gray-600">
                  Mejoramos el confort térmico de su hogar. Instalación de ventanas de doble acristalamiento (二重サッシ) y aislamiento de paredes para reducir su factura eléctrica.
                </p>
              </div>

              {/* Tarjeta 3 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-600">
                <Users className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Diseño y Adaptación de Espacios</h3>
                <p className="text-gray-600">
                  Adaptación de espacios para teletrabajo, personas mayores o familias en crecimiento. Diseñamos para la funcionalidad y la armonía (和).
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-3 text-lg font-semibold bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg"
              >
                Ver Portafolio (Proyectos Anteriores)
              </button>
            </div>
          </div>
        </section>
        
        {/* Sección 3: Filosofía Kaizen (Propuesta Única de Venta) */}
        <section id="kaizen" className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-4">Nuestra Diferencia: El Kaizen en la Construcción</h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Kaizen (改善) significa "mejora continua". Aplicamos esta filosofía japonesa a cada etapa de la reforma.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <KaizenStep icon="Check" title="1. Análisis Minucioso" description="Evaluación detallada de las necesidades, incluso las que no se ven a simple vista." />
              <KaizenStep icon="Settings" title="2. Planificación Eficiente" description="Programación precisa para minimizar la interrupción en su vida diaria." />
              <KaizenStep icon="HardHat" title="3. Ejecución Impecable" description="Trabajo de alta calidad, siempre limpio y organizado (5S)." />
              <KaizenStep icon="Repeat" title="4. Mejora Post-Proyecto" description="Seguimiento y ajuste para garantizar la satisfacción a largo plazo." />
            </div>
          </div>
        </section>
        
        {/* Sección 4: Idiomas y Cultura */}
        <section id="idiomas" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-4">Puente Cultural: Servicios en Múltiples Idiomas</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Eliminamos las barreras de comunicación. Atendemos a clientes internacionales con fluidez en los siguientes idiomas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <LanguagePill lang="Español" />
              <LanguagePill lang="Japonés" />
              <LanguagePill lang="Inglés" />
              <LanguagePill lang="Portugués" />
            </div>
          </div>
        </section>

        {/* Sección 5: Contacto y CTA Final */}
        <section id="contacto" className="py-20 bg-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <DollarSign className="w-12 h-12 mx-auto text-amber-600 mb-4" />
            <h2 className="text-4xl font-extrabold mb-4">¿Listo para su Próxima Mejora?</h2>
            <p className="text-xl font-light mb-8">
              Contáctenos hoy para una consulta sin compromiso. Atendemos principalmente en la prefectura de Kanagawa.
            </p>
            
            <form className="space-y-4 max-w-lg mx-auto bg-white p-8 rounded-xl text-gray-800 shadow-2xl">
              <input type="text" placeholder="Su Nombre Completo" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" required />
              <input type="email" placeholder="Correo Electrónico" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" required />
              <input type="tel" placeholder="Teléfono de Contacto" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" />
              <textarea placeholder="Cuéntenos sobre su proyecto de reforma..." rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" required></textarea>
              <button type="submit" className="w-full py-3 text-lg font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors transform hover:scale-[1.02]">
                Enviar Consulta
              </button>
              <p className="text-sm text-gray-500 mt-2">Le responderemos en un plazo máximo de 24 horas.</p>
            </form>
          </div>
        </section>

        {/* Pie de Página */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-xl font-bold mb-2">HEMER HOUSE REFORM</p>
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados. | Kanagawa, Japón</p>
            </div>
            <div className="flex space-x-6">
              <a href="#servicios" className="text-gray-400 hover:text-amber-600 transition-colors">Servicios</a>
              <a href="#kaizen" className="text-gray-400 hover:text-amber-600 transition-colors">Kaizen</a>
              <a 
                href="https://tienda.hemerhouse.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                Tienda
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

// --- Componente de Paso Kaizen ---
const KaizenStep = ({ icon, title, description }) => {
  const IconComponent = ({ name }) => {
    switch(name) {
      case 'Check': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-8 h-8 text-amber-600 mx-auto mb-3"><polyline points="20 6 9 17 4 12"/></svg>;
      case 'Settings': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-8 h-8 text-amber-600 mx-auto mb-3"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.39a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.53a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.53a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
      case 'HardHat': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hard-hat w-8 h-8 text-amber-600 mx-auto mb-3"><path d="M2 18V22c0 .5-.5 1-1 1s-1-.5-1-1v-4"/><path d="M22 18V22c0 .5.5 1 1 1s1-.5 1-1v-4"/><path d="M12 2L6 4c-1 0-2 1-2 2v6c0 1 1 2 2 2h12c1 0 2-1 2-2V6c0-1-1-2-2-2l-6-2Z"/><path d="M8 12v-1c0-1 1-2 2-2h4c1 0 2 1 2 2v1"/></svg>;
      case 'Repeat': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat w-8 h-8 text-amber-600 mx-auto mb-3"><path d="m17 2l4 4-4 4"/><path d="M3 11v-1c0-2.2 1.8-4 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1c0 2.2-1.8 4-4 4H3"/></svg>;
      default: return null;
    }
  };
  return (
    <div className="p-4 bg-white rounded-lg shadow-xl border-b-4 border-amber-600/50">
      <IconComponent name={icon} />
      <h4 className="text-xl font-bold mb-2 text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// --- Componente de Etiqueta de Idioma ---
const LanguagePill = ({ lang }) => (
  <div className="flex items-center space-x-2 bg-amber-100 text-amber-800 text-lg font-semibold px-4 py-2 rounded-full shadow-lg">
    <Globe className="w-5 h-5" />
    <span>{lang}</span>
  </div>
);

export default App;
