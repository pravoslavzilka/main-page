import React, { useState } from 'react';
import { 
  Eye, 
  Building2, 
  Settings, 
  ExternalLink,
  Play,
  Download,
  Triangle,
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare
} from 'lucide-react';

const Software = () => {
    const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({
    meno: '',
    priezvisko: '',
    nazovSpolochnosti: '',
    email: '',
    mobilneCislo: '',
    vašaSprava: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Ďakujeme za Vašu správu! Budeme Vás kontaktovať čoskoro.');
    
    // Reset form
    setFormData({
      meno: '',
      priezvisko: '',
      nazovSpolochnosti: '',
      email: '',
      mobilneCislo: '',
      vašaSprava: ''
    });
    setIsSubmitting(false);
  };


  

  // Software data with categories
  const softwareData = [
    {
      id: 1,
      category: 'visualization',
      title: 'Rýchle 3D vizualizácie',
      description: 'Vizualizačné riešenie pre REVIT, ArchiCAD, SketchUp Pro, Rhino, Maya, RIKCAD, Grasshopper',
      details: 'S ľahkosťou vytvárajte vysokokvalitné obrázky, panorámy, štandardné videá alebo videá s rozlíšením 360° pre virtuálnu realitu.',
      image: 'https://new.smartcad.sk/wp-content/uploads/2024/02/twinmotion.png',
      buttonText: 'Twinmotion',
      logo: null,
      badge: 'softvéry'
    },
    {
      id: 2,
      category: 'visualization',
      title: 'Vysoko výkonný, fotorealistický, rendrovací sw pre 3ds Max a Cinema 4D',
      description: '',
      details: 'Perfektný nástroj na vytváranie reálneho prostredia a nedokonalostí, ponúkajúci nové možnosti nastavenia polohy kamery, mraky reagujúce na polohu slnka, …Corona',
      image: 'https://new.smartcad.sk/wp-content/uploads/2023/12/Corona-smartcad.png',
      buttonText: 'Corona',
      logo: 'Twinmotion',
      badge: null
    },
    {
      id: 3,
      category: 'construction',
      title: 'obsahuje: Revit, AutoCAD, Civil 3D, 3ds Max, Robot Structural, Advance Steel, InfraWorks, Docs, Insight, ReCap Pro',
      description: 'AEC Collection poskytuje projektantom, konštruktérom a stavbárom tie najlepšie nástroje a integrované pracovné postupy.',
      details: '',
      image: 'https://new.smartcad.sk/wp-content/uploads/2024/02/AEC-collection.png',
      buttonText: 'AEC Collection',
      logo: 'Corona',
      badge: null
    },
    {
      id: 4,
      category: 'construction',
      title: 'Plánovanie, návrh, stavba a správa budov',
      description: 'BIM software Revit® je určený špeciálne pre tvorbu informačného modelu budovy (BIM), vrátane funkcií pre architektonický návrh, projekciu TZB a projektovanie konštrukcií.',
      details: '',
      image: 'https://new.smartcad.sk/wp-content/uploads/2024/02/AEC-collection.png',
      buttonText: 'Revit',
      logo: 'ENSCAPE',
      badge: null
    },
    {
      id: 5,
      category: 'mechanical',
      title: 'Vytvárajte vynikajúce produkty',
      description: 'Software pre strojárske navrhovanie a 3D CAD Inventor® ponúka profesionálne 3D strojárske navrhovanie, dokumentáciu a simuláciu produktov.',
      details: '',
      image: 'https://new.smartcad.sk/wp-content/uploads/2024/02/inventor.jpg',
      buttonText: 'Inventor Professional',
      logo: 'SketchUp Studio',
      badge: 'Trimble'
    },
    {
      id: 6,
      category: 'mechanical',
      title: 'Fusion 360',
      description: 'Fusion 360 je prvým 3D CAD, CAM a CAE nástrojom svojho druhu. Spája celý proces vývoja produktu do jedinej cloudovej platformy, ktorá funguje aj na Macu.',
      details: '',
      image: 'https://new.smartcad.sk/wp-content/uploads/2024/02/fusion.jpg',
      buttonText: 'Fusion 360   ',
      logo: 'V-Ray',
      badge: null
    }
    
  ];

  // Filter software based on active category
  const filteredSoftware = activeCategory === 'all' 
    ? softwareData 
    : softwareData.filter(software => software.category === activeCategory);

  const categories = [
    {
      id: 'all',
      name: 'Všetko',
      icon: Settings,
      color: 'bg-gray-600 hover:bg-gray-700',
      activeColor: 'bg-gray-700'
    },
    {
      id: 'visualization',
      name: 'Vizualizácie a rendrovanie',
      icon: Triangle,
      color: 'bg-teal-600 hover:bg-teal-700',
      activeColor: 'bg-teal-700'
    },
    {
      id: 'construction',
      name: 'Stavebníctvo',
      icon: Building2,
      color: 'bg-slate-700 hover:bg-slate-800',
      activeColor: 'bg-slate-800'
    },
    {
      id: 'mechanical',
      name: 'Strojárstvo',
      icon: Settings,
      color: 'bg-gray-700 hover:bg-gray-800',
      activeColor: 'bg-gray-800'
    }
  ];

  const renderSoftwareCard = (software) => {
    

    return (
      <div key={software.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img 
            src={software.image}
            alt={software.title}
            className="w-full h-55 object-cover"
          />
          
          
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-3 line-clamp-2">
            {software.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {software.description}
          </p>
          {software.details && (
            <p className="text-xs text-gray-500 mb-4">
              {software.details}
            </p>
          )}
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-600 transition-colors w-full sm:w-auto">
            {software.buttonText}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjAiIHkxPSIyMCIgeDI9IjQwIiB5Mj0iMjAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPGxpbmUgeDE9IjIwIiB5MT0iMCIgeDI9IjIwIiB5Mj0iNDAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPC9zdmc+')] bg-repeat"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Softvéry pre vizualizácie, stavebníctvo,
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            strojárstvo ...
          </h1>
          <p className="text-xl opacity-90">
            Poradíme Vám s výberom
          </p>
        </div>
      </section>

      {/* Enhanced Category Filter Tabs */}
      <section className=" border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center space-x-3 px-6 py-4 rounded-lg font-medium text-white
                    transition-all duration-300 transform hover:scale-105 hover:shadow-md
                    ${isActive 
                      ? `${category.activeColor} shadow-lg scale-105` 
                      : `${category.color} hover:shadow-md`
                    }
                  `}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-semibold">{category.name}</span>
                  {isActive && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software Cards Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              {(() => {
                const activecat = categories.find(cat => cat.id === activeCategory);
                const IconComponent = activeCategory !== 'all' ? activecat?.icon : Eye;
                return (
                  <>
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      {activeCategory !== 'all' && <IconComponent className="w-5 h-5 text-teal-600" />}
                      {activeCategory === 'all' && <Eye className="w-5 h-5 text-teal-600" />}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {activeCategory === 'all' ? 'Všetky softvérové riešenia' : 
                       activeCategory === 'visualization' ? 'Vizualizačné a rendrovacie softvéry' :
                       activeCategory === 'construction' ? 'Stavebníctvo a BIM riešenia' :
                       'Strojárske a priemyselné softvéry'}
                    </h2>
                  </>
                );
              })()}
            </div>
            <p className="text-gray-600">
              {activeCategory === 'all' ? 'Kompletný prehľad všetkých dostupných riešení' : 'prehľad'}
              {filteredSoftware.length > 0 && (
                <span className="ml-2 text-teal-600 font-medium">
                  ({filteredSoftware.length} {filteredSoftware.length === 1 ? 'riešenie' : 
                    filteredSoftware.length < 5 ? 'riešenia' : 'riešení'})
                </span>
              )}
            </p>
          </div>

          {/* Software Grid */}
          {filteredSoftware.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSoftware.map(renderSoftwareCard)}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                Žiadne riešenia v tejto kategórii
              </h3>
              <p className="text-gray-500">
                Momentálne nemáme dostupné softvérové riešenia pre túto kategóriu.
              </p>
            </div>
          )}
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="bg-teal-600 text-white p-8 lg:p-12 rounded-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Kontaktujte nás
                </h2>
                <p className="text-teal-100 text-lg leading-relaxed">
                  Máte otázky o našich softvérových riešeniach? Potrebujete pomoc s výberom správneho nástroja? 
                  Sme tu pre Vás!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefón</h4>
                    <p className="text-teal-100">+421 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-teal-100">info@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresa</h4>
                    <p className="text-teal-100">
                      Bratislava, Slovensko<br />
                      Hlavná 123, 811 01
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-teal-500">
                <h4 className="font-semibold mb-3">Pracovné hodiny</h4>
                <div className="space-y-1 text-teal-100">
                  <p>Pondelok - Piatok: 8:00 - 17:00</p>
                  <p>Sobota - Nedeľa: Zatvorené</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="meno" className="block text-sm font-medium text-gray-700 mb-2">
                      Meno <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="meno"
                        name="meno"
                        value={formData.meno}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Vaše meno"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="priezvisko" className="block text-sm font-medium text-gray-700 mb-2">
                      Priezvisko <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="priezvisko"
                        name="priezvisko"
                        value={formData.priezvisko}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Vaše priezvisko"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="nazovSpolochnosti" className="block text-sm font-medium text-gray-700 mb-2">
                    Názov <span className="text-blue-600">spoločnosti</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="nazovSpolochnosti"
                      name="nazovSpolochnosti"
                      value={formData.nazovSpolochnosti}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Názov vašej spoločnosti"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="vas@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mobilneCislo" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobilné číslo na Vás <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="mobilneCislo"
                      name="mobilneCislo"
                      value={formData.mobilneCislo}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="+421 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="vašaSprava" className="block text-sm font-medium text-gray-700 mb-2">
                    Vaša správa <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="vašaSprava"
                      name="vašaSprava"
                      value={formData.vašaSprava}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Opíšte nám, čím Vám môžeme pomôcť..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-600 disabled:bg-teal-300 transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Odosielam...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Odoslať správu</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
     
    </div>
  );

};

export default Software;
