import React, { useState } from 'react';
import { 
  Eye, 
  Building2, 
  Settings, 
  ExternalLink,
  Play,
  Download,
  Triangle
} from 'lucide-react';


const Software = () => {
    const [activeCategory, setActiveCategory] = useState('all');

  // Software data with categories
  const softwareData = [
    {
      id: 1,
      category: 'visualization',
      title: 'Ktorý je pre Vás ten najvhodnejší?',
      description: 'Predstavili sme posledané informácie, ktoré Vám pomôžu zorientovať sa',
      details: 'V-RAY / CORONA / ENSCAPE / TWINMOTION',
      image: '/api/placeholder/400/250',
      buttonText: 'Prečítajte si blog',
      logo: null,
      badge: 'softvéry'
    },
    {
      id: 2,
      category: 'visualization',
      title: 'Rýchle 3D vizualizácie',
      description: 'Vizualizačné riešenie pre REVIT, ArchiCAD, SketchUp, Pro, Rhino, Maya, RINCAD, Grasshopper',
      details: 'S jednoduchú využívate vysokokvalitné obrazky, panorámy, štandardné video alebo video s rozšírenou 360° pre virtuálnu realitu.',
      image: '/api/placeholder/400/250',
      buttonText: 'Twinmotion',
      logo: 'Twinmotion',
      badge: null
    },
    {
      id: 3,
      category: 'visualization',
      title: 'Vysoko výkonný, fotorealistický, rendrovací sw pre 3ds Max a Cinema 4D',
      description: 'Perfektný nástroj na vytváranie reálneho vzhľadu a nedefiniteľnosť ponuložiť nové metódy postavenia pokôlky, kamery, mraky zoznamuje na pohľa sinka...',
      details: '',
      image: '/api/placeholder/400/250',
      buttonText: 'Corona',
      logo: 'Corona',
      badge: null
    },
    {
      id: 4,
      category: 'visualization',
      title: 'Vizualizácie jednducho a rýchlo z CAD, BIM modelov',
      description: 'Enscape je real-time visualization plugin, ktorý sa integruje priamo do CAD a BIM software ako Revit, SketchUp, Rhino, ArchiCAD a Vectorworks...',
      details: '',
      image: '/api/placeholder/400/250',
      buttonText: 'Enscape',
      logo: 'ENSCAPE',
      badge: null
    },
    {
      id: 5,
      category: 'construction',
      title: 'Komplexne riešenie pre 3D modelovanie',
      description: 'SketchUp Studio obsahuje SketchUp Pro desktop aplikáciu, webový SketchUp for Web a množstvo ďalších funkcií pre profesionálov...',
      details: '',
      image: '/api/placeholder/400/250',
      buttonText: 'SketchUp Studio',
      logo: 'SketchUp Studio',
      badge: 'Trimble'
    },
    {
      id: 6,
      category: 'visualization',
      title: 'Najobľúbenejší renderer na svete',
      description: 'V-Ray je výkonný rendering engine, ktorý sa používa v architektúre, dizajne, VFX, vizuálnych efektoch a animáciách...',
      details: '',
      image: '/api/placeholder/400/250',
      buttonText: 'V-Ray',
      logo: 'V-Ray',
      badge: null
    },
    // Add more software items for construction and mechanical categories
    {
      id: 7,
      category: 'construction',
      title: 'Autodesk Revit',
      description: 'Profesionálny BIM softvér pre architektonické a stavebné projekty',
      details: 'Komplexné riešenie pre Building Information Modeling',
      image: '/api/placeholder/400/250',
      buttonText: 'Revit',
      logo: 'Revit',
      badge: 'Autodesk'
    },
    {
      id: 8,
      category: 'mechanical',
      title: 'Autodesk Inventor',
      description: '3D mechanické CAD riešenie pre produktový dizajn a výrobu',
      details: 'Profesionálne nástroje pre strojárstvo a priemysel',
      image: '/api/placeholder/400/250',
      buttonText: 'Inventor',
      logo: 'Inventor',
      badge: 'Autodesk'
    }
  ];

  // Filter software based on active category
  const filteredSoftware = activeCategory === 'all' 
    ? softwareData 
    : softwareData.filter(software => software.category === activeCategory);

  const categories = [
    {
      id: 'all',
      name: 'Všetky kategórie',
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
      name: 'Stavebníctvo, BIM, TZB, infraštruktúra',
      icon: Building2,
      color: 'bg-slate-700 hover:bg-slate-800',
      activeColor: 'bg-slate-800'
    },
    {
      id: 'mechanical',
      name: 'Strojárstvo a pohybné systémy',
      icon: Settings,
      color: 'bg-gray-700 hover:bg-gray-800',
      activeColor: 'bg-gray-800'
    }
  ];

  const renderSoftwareCard = (software) => {
    const getLogoComponent = (logo) => {
      switch (logo) {
        case 'Twinmotion':
          return (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">T</span>
              </div>
              <span className="text-white font-bold">Twinmotion</span>
            </div>
          );
        case 'Corona':
          return (
            <div className="flex items-center space-x-2 bg-orange-500 px-2 py-1 rounded">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-orange-500 font-bold text-xs">C</span>
              </div>
              <span className="text-white font-bold text-sm">Corona</span>
            </div>
          );
        case 'ENSCAPE':
          return (
            <div className="bg-orange-500 px-3 py-1 rounded">
              <span className="text-white font-bold">ENSCAPE</span>
            </div>
          );
        case 'SketchUp Studio':
          return (
            <div className="bg-blue-600 px-3 py-1 rounded">
              <span className="text-white font-bold text-sm">SketchUp Studio</span>
            </div>
          );
        case 'V-Ray':
          return (
            <div className="bg-blue-700 px-3 py-1 rounded flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xs">V</span>
              </div>
              <span className="text-white font-bold text-sm">V-Ray</span>
            </div>
          );
        default:
          return (
            <div className="bg-blue-600 px-3 py-1 rounded">
              <span className="text-white font-bold text-sm">{logo}</span>
            </div>
          );
      }
    };

    return (
      <div key={software.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img 
            src={software.image}
            alt={software.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            {software.logo ? getLogoComponent(software.logo) : (
              software.badge && (
                <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                  {software.badge}
                </span>
              )
            )}
          </div>
          {software.badge && software.logo && (
            <div className="absolute bottom-4 left-4">
              <div className="bg-blue-600 px-2 py-1 rounded">
                <span className="text-white text-xs font-bold">{software.badge}</span>
              </div>
            </div>
          )}
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
      <section className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex flex-wrap gap-2">
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

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Potrebujete pomoc s výberom softvéru?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktujte nás a poradíme Vám s najlepším riešením pre vaše projekty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Kontaktovať nás
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-colors">
              Získať cenovú ponuku
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Prečo si vybrať naše softvérové riešenia?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Profesionálne vizualizácie</h3>
              <p className="text-gray-600">
                Vytvárajte fotorealistické rendery a animácie s najnovšími nástrojmi
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">BIM integrácia</h3>
              <p className="text-gray-600">
                Plná kompatibilita s BIM workflow a stavebníckymi projektmi
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technická podpora</h3>
              <p className="text-gray-600">
                Kompletná podpora, školenia a implementácia softvéru
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

};

export default Software;
