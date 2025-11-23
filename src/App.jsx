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
import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, Hammer, Users, JapaneseYen, Menu, X, 
  Globe, Phone, MapPin, ArrowRight, CheckCircle, 
  Instagram, Facebook, MessageCircle, Star, Quote 
} from 'lucide-react';

// --- SISTEMA DE TRADUCCIONES (TEXTOS) ---
const TRANSLATIONS = {
  es: {
    nav: { services: "Servicios", mission: "Nuestra Misión", portfolio: "Antes y Después", testimonials: "Testimonios", blog: "Blog", contact: "Contacto", shop: "Tienda" },
    hero: {
      tag: "CALIDAD JAPONESA • REGIÓN KANTO",
      title: "Construimos el futuro de tu hogar",
      subtitle: "Reformas integrales con filosofía Kaizen. Transformamos espacios en Tokio, Saitama, Kanagawa y Gunma con precisión japonesa y calidez latina.",
      cta1: "Solicitar Presupuesto",
      cta2: "Ver Resultados"
    },
    mission: {
      title: "Nuestra Misión",
      desc: "Nuestra meta no es solo reformar casas, sino mejorar vidas. Creemos en el método Kaizen (mejora continua): cada proyecto debe ser mejor que el anterior, más limpio, más eficiente y más bello.",
      values: ["Transparencia Total", "Materiales Premium", "Soporte Multilingüe"]
    },
    services: {
      title: "Excelencia en cada detalle",
      subtitle: "Cubrimos todas las necesidades de construcción y reforma en la región de Kanto.",
      s1: "Reformas Integrales", s1_d: "Renovación total de viviendas antiguas (Komonka) y apartamentos modernos.",
      s2: "Cocinas y Baños", s2_d: "Instalación certificada de sistemas TOTO, LIXIL y Panasonic.",
      s3: "Exteriores y Techos", s3_d: "Impermeabilización, Siding, pintura de fachadas y reparación de tejados.",
      s4: "Interiores", s4_d: "Suelos de madera natural, papel tapiz (Cross) y aislamiento térmico."
    },
    reviews: {
      title: "Lo que dicen nuestros clientes",
      r1: "Increíble trabajo. Transformaron mi vieja casa en Saitama en un espacio moderno. La comunicación en español fue clave.",
      r2: "Profesionalismo puro. Cumplieron con los plazos y el presupuesto en Yenes. Muy recomendados.",
      r3: "El equipo de Hemer House entendió perfectamente lo que quería. Mi cocina quedó espectacular."
    },
    contact: {
      title: "Hablemos de tu Proyecto",
      desc: "Atendemos en Tokio, Saitama, Kanagawa y Gunma. Soporte en Español, Japonés, Portugués e Inglés.",
      btn: "Enviar Consulta"
    }
  },
  jp: {
    nav: { services: "サービス", mission: "企業理念", portfolio: "ビフォーアフター", testimonials: "お客様の声", blog: "ブログ", contact: "お問い合わせ", shop: "ストア" },
    hero: {
      tag: "日本品質 • 関東エリア対応",
      title: "日本の住まいの未来を築く",
      subtitle: "カイゼン哲学に基づいた総合リフォーム。東京、埼玉、神奈川、群馬を中心に、確かな技術と国際的な感性で空間を一新します。",
      cta1: "無料見積もり",
      cta2: "施工事例を見る"
    },
    mission: {
      title: "私たちの使命",
      desc: "単に家を直すのではなく、生活の質を向上させることが私たちの目標です。「改善（カイゼン）」の精神で、常に昨日より良い施工を目指します。",
      values: ["完全な透明性", "厳選された素材", "多言語サポート"]
    },
    services: {
      title: "細部へのこだわり",
      subtitle: "関東エリア（東京・埼玉・神奈川・群馬）のあらゆる建築・リフォームニーズにお応えします。",
      s1: "フルリノベーション", s1_d: "古民家再生からマンションの全面改装まで。",
      s2: "キッチン・浴室", s2_d: "TOTO、LIXIL、Panasonic製品の認定施工。",
      s3: "外装・屋根", s3_d: "防水工事、サイディング、外壁塗装、屋根修理。",
      s4: "内装工事", s4_d: "無垢材フローリング、クロス張り替え、断熱リフォーム。"
    },
    reviews: {
      title: "お客様の声",
      r1: "素晴らしい仕事でした。埼玉の古い家がモダンな空間に生まれ変わりました。スペイン語での対応も助かりました。",
      r2: "プロフェッショナルです。納期と予算をしっかり守ってくれました。強くお勧めします。",
      r3: "ヘマーハウスのチームは私の要望を完璧に理解してくれました。キッチンが最高です。"
    },
    contact: {
      title: "プロジェクトのご相談",
      desc: "東京、埼玉、神奈川、群馬対応。日本語・スペイン語・ポルトガル語・英語でサポートします。",
      btn: "送信する"
    }
  },
  en: {
    nav: { services: "Services", mission: "Our Mission", portfolio: "Before & After", testimonials: "Testimonials", blog: "Blog", contact: "Contact", shop: "Shop" },
    hero: {
      tag: "JAPANESE QUALITY • KANTO REGION",
      title: "Building the future of your home",
      subtitle: "Full renovations with Kaizen philosophy. We transform spaces in Tokyo, Saitama, Kanagawa, and Gunma with Japanese precision.",
      cta1: "Get Free Quote",
      cta2: "View Results"
    },
    mission: {
      title: "Our Mission",
      desc: "Our goal is not just to renovate houses, but to improve lives. We believe in the Kaizen method: every project must be cleaner, more efficient, and more beautiful than the last.",
      values: ["Total Transparency", "Premium Materials", "Multilingual Support"]
    },
    services: {
      title: "Excellence in every detail",
      subtitle: "Covering all construction and renovation needs in the Kanto region.",
      s1: "Full Renovations", s1_d: "Complete makeover of old houses (Komonka) and modern apartments.",
      s2: "Kitchen & Bath", s2_d: "Certified installation of TOTO, LIXIL, and Panasonic systems.",
      s3: "Exteriors & Roofing", s3_d: "Waterproofing, Siding, facade painting, and roof repairs.",
      s4: "Interiors", s4_d: "Natural wood flooring, wallpaper (Cross), and thermal insulation."
    },
    reviews: {
      title: "What our clients say",
      r1: "Incredible work. They transformed my old house in Saitama into a modern space. Communication was key.",
      r2: "Pure professionalism. They met deadlines and budget. Highly recommended.",
      r3: "The Hemer House team perfectly understood what I wanted. My kitchen looks spectacular."
    },
    contact: {
      title: "Let's talk about your project",
      desc: "Serving Tokyo, Saitama, Kanagawa, and Gunma. Support in English, Spanish, Japanese, and Portuguese.",
      btn: "Send Message"
    }
  },
  pt: {
    nav: { services: "Serviços", mission: "Nossa Missão", portfolio: "Antes e Depois", testimonials: "Depoimentos", blog: "Blog", contact: "Contato", shop: "Loja" },
    hero: {
      tag: "QUALIDADE JAPONESA • REGIÃO KANTO",
      title: "Construindo o futuro do seu lar",
      subtitle: "Reformas completas com filosofia Kaizen. Transformamos espaços em Tóquio, Saitama, Kanagawa e Gunma com precisão japonesa.",
      cta1: "Orçamento Grátis",
      cta2: "Ver Resultados"
    },
    mission: {
      title: "Nossa Missão",
      desc: "Nosso objetivo não é apenas reformar casas, mas melhorar vidas. Acreditamos no método Kaizen: cada projeto deve ser melhor que o anterior.",
      values: ["Transparência Total", "Materiais Premium", "Suporte Multilíngue"]
    },
    services: {
      title: "Excelência em cada detalhe",
      subtitle: "Cobrimos todas as necessidades de construção na região de Kanto.",
      s1: "Reformas Integrais", s1_d: "Renovação total de casas antigas e apartamentos modernos.",
      s2: "Cozinhas e Banheiros", s2_d: "Instalação certificada de sistemas TOTO, LIXIL e Panasonic.",
      s3: "Exteriores e Telhados", s3_d: "Impermeabilização, Siding, pintura de fachadas e reparos.",
      s4: "Interiores", s4_d: "Pisos de madeira natural, papel de parede e isolamento térmico."
    },
    reviews: {
      title: "O que dizem nossos clientes",
      r1: "Trabalho incrível. Transformaram minha casa antiga em Saitama. A comunicação foi fundamental.",
      r2: "Profissionalismo puro. Cumpriram prazos e orçamento. Muito recomendado.",
      r3: "A equipe Hemer House entendeu perfeitamente o que eu queria. Minha cozinha ficou espetacular."
    },
    contact: {
      title: "Vamos falar do seu projeto",
      desc: "Atendemos Tóquio, Saitama, Kanagawa e Gunma. Suporte em Português, Espanhol, Japonês e Inglês.",
      btn: "Enviar Mensagem"
    }
  }
};

// --- DATOS FIJOS (Blog, Galería, etc) ---
const BLOG_POSTS = [
  { id: 1, title: "Subsidios del Gobierno Japonés para Reformas 2025", date: "23 Nov 2025", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Ventajas del Siding Metálico vs Cerámico", date: "15 Nov 2025", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Cómo aislar tu casa del frío japonés", date: "02 Nov 2025", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" }
];

const BEFORE_AFTER = [
  { id: 1, title: "Renovación LDK en Saitama", before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80", after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Baño Unit Bath en Gunma", before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80", after: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" }
];

// --- COMPONENTE PRINCIPAL ---
const App = () => {
  const [lang, setLang] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-gray-900/80 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('inicio')}>
             {/* INSTRUCCIÓN: 
                1. Sube tu archivo logo.png a la carpeta 'public' en GitHub.
                2. Borra las dos líneas de abajo (el div del icono) y descomenta la línea de la imagen.
             */}
             {/* <img src="/logo.png" className="h-12 w-auto transition-transform group-hover:scale-105" alt="Hemer House Logo" /> */}
             
             <div className="bg-amber-600 p-2 rounded text-white shadow-lg group-hover:bg-amber-500 transition-colors"><Lightbulb size={24} /></div>
             
             <div className="flex flex-col">
               <span className={`text-xl font-black leading-none tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>HEMER HOUSE</span>
               <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${scrolled ? 'text-amber-600' : 'text-amber-400'}`}>Reform Japan</span>
             </div>
          </div>

          {/* DESKTOP MENU */}
          <div className={`hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wider ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
            <button onClick={() => scrollToSection('mission')} className="hover:text-amber-500 transition-colors">{t.nav.mission}</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-500 transition-colors">{t.nav.services}</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-amber-500 transition-colors">{t.nav.portfolio}</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-amber-500 transition-colors">{t.nav.testimonials}</button>
            <button onClick={() => scrollToSection('blog')} className="hover:text-amber-500 transition-colors">{t.nav.blog}</button>
            
            {/* IDIOMAS */}
            <div className="flex items-center bg-black/20 rounded-full p-1 border border-white/10 ml-4">
              {['es', 'jp', 'en', 'pt'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${lang === l ? 'bg-amber-600 text-white shadow-md transform scale-110' : 'text-gray-400 hover:text-white'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a href="https://tienda.hemerhouse.com" target="_blank" rel="noreferrer" className="ml-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-0.5">
              {t.nav.shop}
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button className={`lg:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <button onClick={() => scrollToSection('mission')} className="text-left font-bold text-gray-700 py-2 border-b">{t.nav.mission}</button>
            <button onClick={() => scrollToSection('services')} className="text-left font-bold text-gray-700 py-2 border-b">{t.nav.services}</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left font-bold text-gray-700 py-2 border-b">{t.nav.portfolio}</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left font-bold text-gray-700 py-2 border-b">{t.nav.testimonials}</button>
            <div className="flex gap-2 justify-center py-4">
              {['es', 'jp', 'en', 'pt'].map((l) => (
                <button key={l} onClick={() => changeLanguage(l)} className={`px-4 py-2 rounded font-bold border ${lang === l ? 'bg-amber-600 text-white border-amber-600' : 'border-gray-200 text-gray-500'}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="https://tienda.hemerhouse.com" className="bg-green-600 text-white text-center py-3 rounded-lg font-bold shadow-lg">
              {t.nav.shop}
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Hemer House Hero" />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 text-white max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/50 rounded-full px-4 py-1 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">{t.hero.tag}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-serif mb-8 leading-tight drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('contacto')} className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-amber-600/50 transition-all transform hover:-translate-y-1">
              {t.hero.cta1}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all">
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
             <img src="https://images.unsplash.com/photo-1581094794329-cd282adaf55a?auto=format&fit=crop&w=800&q=80" alt="Team" className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
             <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-amber-600">
               <p className="font-serif text-xl italic text-gray-800">"Kaizen: Hoy mejor que ayer, mañana mejor que hoy."</p>
             </div>
          </div>
          <div>
            <h2 className="text-amber-600 font-bold tracking-widest uppercase mb-2">HEMER HOUSE</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">{t.mission.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.mission.desc}
            </p>
            <div className="space-y-4">
              {t.mission.values.map((val, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="font-bold text-gray-800">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">{t.services.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">{t.services.subtitle}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title={t.services.s1} desc={t.services.s1_d} icon={Hammer} />
            <ServiceCard title={t.services.s2} desc={t.services.s2_d} icon={Users} />
            <ServiceCard title={t.services.s3} desc={t.services.s3_d} icon={Lightbulb} />
            <ServiceCard title={t.services.s4} desc={t.services.s4_d} icon={MapPin} />
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER (Portfolio) */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{t.nav.portfolio}</span>
            <h2 className="text-4xl font-bold font-serif mt-4 text-gray-900">Transformaciones Reales</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {BEFORE_AFTER.map(item => (
              <div key={item.id} className="bg-gray-50 rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{item.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <img src={item.before} alt="Before" className="rounded-xl w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all" />
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                  </div>
                  <div className="relative group">
                    <img src={item.after} alt="After" className="rounded-xl w-full h-48 object-cover" />
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">AFTER</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">{t.reviews.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard text={t.reviews.r1} author="Carlos M." loc="Saitama" />
            <TestimonialCard text={t.reviews.r2} author="Sarah Jenkins" loc="Yokohama" />
            <TestimonialCard text={t.reviews.r3} author="Tanaka Yuki" loc="Gunma" />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900">Blog Hemer House</h2>
            <button className="text-amber-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">Ver todo <ArrowRight size={18} /></button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img src={post.img} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <span className="text-amber-600 text-xs font-bold">{post.date}</span>
                <h3 className="text-xl font-bold mt-2 group-hover:text-amber-600 transition-colors">{post.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 bg-gray-800 rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-700 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{t.contact.desc}</p>
            <div className="space-y-6">
              <ContactItem icon={Phone} text="070-9039-6327" />
              <ContactItem icon={MapPin} text="Tokio, Saitama, Kanagawa, Gunma" />
            </div>
            <div className="flex gap-4 mt-12">
              <SocialBtn icon={Instagram} />
              <SocialBtn icon={Facebook} />
            </div>
          </div>
          <form className="md:w-1/2 space-y-4">
            <input type="text" placeholder={t.contact.form_name} className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
            <input type="email" placeholder={t.contact.form_email} className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
            <textarea rows="4" placeholder={t.contact.form_msg} className="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"></textarea>
            <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-95">
              {t.contact.btn}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-12 text-center border-t border-gray-900">
        <div className="flex justify-center gap-6 mb-8">
           <Globe size={20} className="text-gray-600" />
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Hemer House Reform Japan. All rights reserved.</p>
      </footer>

      {/* FLOATING WHATSAPP / LINE */}
      <a href="https://line.me/ti/p/tu-id-line" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#06C755] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2 font-bold">
        <MessageCircle size={24} /> <span className="hidden md:inline">Chat</span>
      </a>

    </div>
  );
};

// --- COMPONENTES AUXILIARES ---
const ServiceCard = ({ title, desc, icon: Icon }) => (
  <div className="bg-gray-800 p-8 rounded-2xl hover:bg-amber-600 transition-colors group cursor-default">
    <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-amber-600 transition-colors text-amber-500">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 group-hover:text-amber-100 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TestimonialCard = ({ text, author, loc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
    <Quote className="text-amber-100 absolute top-4 right-4" size={48} />
    <div className="flex gap-1 text-amber-500 mb-4">
      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-gray-600 italic mb-6 leading-relaxed">"{text}"</p>
    <div>
      <h4 className="font-bold text-gray-900">{author}</h4>
      <span className="text-xs text-gray-400 uppercase tracking-wider">{loc}</span>
    </div>
  </div>
);

const ContactItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-amber-500">
      <Icon size={20} />
    </div>
    <span className="font-medium">{text}</span>
  </div>
);

const SocialBtn = ({ icon: Icon }) => (
  <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all text-gray-400">
    <Icon size={24} />
  </button>
);

export default App;
