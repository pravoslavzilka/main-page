import React, { useState, useEffect } from 'react';
import Hero from '../components/home_page/Hero';
import Offer from '../components/home_page/Offer';
import { 
  ChevronDown, 
  Monitor, 
  HardDrive, 
  GraduationCap, 
  CheckCircle, 
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Presentation,
  Cog,
  Workflow,
  Users,
} from 'lucide-react';



const Home = () =>  {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentSlide, setCurrentSlide] = useState(0);

  const companies = [
    { name: 'Autodesk', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/autodesk.png' },
    { name: 'Trimble', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/trimble.png' },
    { name: 'Linear', logo: 'https://new.smartcad.sk/wp-content/uploads/2025/02/linear.png' },
    { name: 'Dell', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/dell.png' },
    { name: 'ESET', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/eset.png' },
    {name: 'GFI Software', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/gfi.png' },
    { name: 'HP', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/hp.png' },
    { name: 'Kerio', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/kerio.png' },
    { name: 'ROWE', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/rowe.png' },
    { name: 'SIGMA', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/sigma.png' },
    { name: 'Lenovo', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/lenovo.png' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Nové funkcie v AutoCAD 2025: Čo potrebujete vedieť',
      excerpt: 'Objavte najnovšie funkcie a vylepšenia v AutoCAD 2025, ktoré zvýšia vašu produktivitu a zjednodušia pracovný tok.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '15. január 2025',
      category: 'Software'
    },
    {
      id: 2,
      title: 'Ako vybrať správnu CAD pracovnú stanicu',
      excerpt: 'Kompletný sprievodca výberom hardvéru pre CAD aplikácie. Tipy a odporúčania od našich expertov.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '10. január 2025',
      category: 'Hardvér'
    },
    {
      id: 3,
      title: 'BIM v stavebníctve: Trendy a príležitosti',
      excerpt: 'Prečo je BIM budúcnosťou stavebníctva a ako sa na ňu pripraviť. Praktické rady a príklady implementácie.',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '5. január 2025',
      category: 'BIM'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(companies.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [companies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(companies.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(companies.length / 4)) % Math.ceil(companies.length / 4));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}


      <Hero />
      
      <Offer />

      

      {/* Why Choose SmartCAD */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Projektujeme a poskytujeme servisné služby</h2>
            <p className="text-xl text-gray-600">
              Využite naše viac ako 20-ročné skúsenosti vo svoj prospech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Oficiálny Autodesk partner</h3>
                <p className="text-gray-600">Autorizovaný predajca s priamym prístupom k najnovšiemu softvéru a podpore</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">20+ rokov skúseností</h3>
                <p className="text-gray-600">Dve desaťročia odborných znalostí v CAD riešeniach a technických službách</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Certifikovaní lektori</h3>
                <p className="text-gray-600">Profesionálni inžinieri a certifikovaní inštruktori</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Komplexné riešenia</h3>
                <p className="text-gray-600">Kompletné CAD hardvérové a softvérové balíky</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Popredajná podpora</h3>
                <p className="text-gray-600">Priebežné konzultácie a technická pomoc</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Lokálne odborné znalosti</h3>
                <p className="text-gray-600">Porozumenie slovenského trhu a predpisov</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Vyškolených profesionálov</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">3000+</div>
              <div className="text-gray-600">Vybavených firiem</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Spokojnosť zákazníkov</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">20+</div>
              <div className="text-gray-600">Rokov skúseností</div>
            </div>
          </div>
        </div>
      </section>


      {/* Cooperating Companies */}
    <section className="py-20 px-0 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Spolupracujeme so silnými spoločnosťami</h2>
        <p className="text-xl text-gray-600">
          Naši dôveryhodní partneri a dodávatelia technológií
        </p>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="w-full">
          <div
            className="flex items-center gap-16 animate-company-scroll"
            style={{ width: 'max-content' }}
          >
            {[...companies, ...companies].map((company, idx) => (
              <div key={idx} className="flex items-center justify-center ">
                <img src={company.logo} alt={company.name} className="h-32 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>    
      </div>
      <style>
        {`
          @keyframes company-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-company-scroll {
            animation: company-scroll 40s linear infinite;
          }
        `}
      </style>
    </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Dôverujú nám profesionáli</h2>
            <p className="text-xl text-gray-600">
              V oblasti inžinierstva a architektúry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                S ľuďmi zo spoločnosti smardCAD s.r.o. naša firma spolupracuje už viac ako 10 rokov a nemôžem povedať nič iné ako, že prístup a komunikácia firmy je na neskutočne vysokej úrovni. Členovia tímu zo smartCAD-u promptne reagujú na vzniknuté problémy a samozrejme ich úspešne vyriešenia. 
Stretnutia, sa po tak dlhej dobe nesú už vo veľmi priateľskej atmosfére.

              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-slate-800">Ivan Sopko</div>
                  <div className="text-gray-600 text-sm">Konštruktér, SAM Industries a.s.</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                Chcem poďakovať za seba a aj za našu spoločnosť za spoluprácu pri nákupe/obnove našich licencií AutoCad. Za ústretovosť, promptnosť a hlavne za trpezlivosť tento rok pri zmene spôsobu nákupu, ktorý sme Vašou pomocou a navigáciou zvládli bez problémov. Bolo nám vysvetlené všetko zrozumiteľne a užívateľsky jednoducho, čo nám veľmi pomohlo. Kvalitu Vašich služieb hodnotím osobne na 100%.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-slate-800">Andrea Fumačová</div>
                  <div className="text-gray-600 text-sm">Špecialista podpory IT, VÚB banka</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                So spoločnosťou smartCAD s.r.o. spolupracuje naša firma už niekoľko rokov. Doteraz som bola s dodaním zariadení aj produktov vždy spokojná. Obstarávali sme od nich už skladačku aj scanner značky Rowe, ktoré nám zjednodušujú výkon našej každodennej činnosti a šetria čas. Okrem zariadení sú našim pravidelným dodávateľom kancelárskych potrieb. Vždy sa snažia vyhovieť našim požiadavkám a aj v prípade reklamačného konania je situácia vždy vyriešená v náš prospech.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-slate-800">Viktória Jalšovská</div>
                  <div className="text-gray-600 text-sm">Obchodný manažér, Junoz, s.r.o.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produkty" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Odporúčané produkty a služby</h2>
            <p className="text-xl text-gray-600">
              Naše najpopulárnejšie riešenia pre CAD profesionálov
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Najpredávanejší
              </div>
              <Monitor className="w-16 h-16 text-teal-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Autodesk AutoCAD</h3>
              <p className="text-gray-600 mb-6">
                Priemyselný štandard 2D a 3D CAD softvér s plnou licenciou a podporou.
              </p>
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                Získať cenovú ponuku
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 bg-slate-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Na mieru
              </div>
              <HardDrive className="w-16 h-16 text-slate-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">CAD pracovné stanice</h3>
              <p className="text-gray-600 mb-6">
                Vysokovýkonné počítače postavené špecificky pre CAD aplikácie.
              </p>
              <button className="bg-slate-500 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors">
                Konfigurovať teraz
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Začína čoskoro
              </div>
              <GraduationCap className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">AutoCAD školenie</h3>
              <p className="text-gray-600 mb-6">
                Komplexný AutoCAD kurz pre stavebných inžinierov - marec 2025.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Registrovať sa teraz
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section id="skolenia" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nadchádzajúce workshopy a školenia</h2>
            <p className="text-xl text-gray-600">
              Zdokonaľte svoje zručnosti s našimi certifikovanými školiacimi programami
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'upcoming'
                      ? 'border-b-2 border-teal-500 text-teal-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Nadchádzajúce kurzy
                </button>
                <button
                  onClick={() => setActiveTab('custom')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'custom'
                      ? 'border-b-2 border-teal-500 text-teal-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Školenia na mieru
                </button>
              </nav>
            </div>

            <div className="p-8">
              {activeTab === 'upcoming' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-8 h-8 text-teal-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">AutoCAD základy</h3>
                        <p className="text-gray-600">15.-17. marec 2025 | 3 dni | Bratislava</p>
                      </div>
                    </div>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                      Registrovať
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-8 h-8 text-teal-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Revit architektúra</h3>
                        <p className="text-gray-600">8.-12. apríl 2025 | 5 dní | Košice</p>
                      </div>
                    </div>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                      Registrovať
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-8 h-8 text-teal-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Civil 3D pre infraštruktúru</h3>
                        <p className="text-gray-600">20.-24. máj 2025 | 5 dní | Bratislava</p>
                      </div>
                    </div>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                      Registrovať
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'custom' && (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-teal-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Školiace programy na mieru</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Ponúkame prispôsobené školiace programy pre váš tím, dodávané na vašom mieste alebo online. 
                    Kontaktujte nás, aby sme prediskutovali vaše špecifické potreby a vytvorili prispôsobené učebné osnovy.
                  </p>
                  <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                    Požiadať o školenie na mieru
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Preview */}
      <section id="blog" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Najnovšie z nášho blogu</h2>
            <p className="text-xl text-gray-600">
              Tipy, trendy a novinky zo sveta CAD technológií
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center">
                    Čítať viac <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
              Zobraziť všetky články
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontakt" className="py-20 px-6 bg-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Potrebujete pomoc s výberom správnych CAD nástrojov?</h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktujte našich expertov pre personalizované odporúčania a riešenia prispôsobené vašim potrebám.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              Rezervovať bezplatnú konzultáciu
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-600 transition-colors text-lg font-semibold">
              Kontaktovať nás
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Adresa</div>
              <div className="opacity-90">Bratislava, Slovensko</div>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Telefón</div>
              <div className="opacity-90">+421 2 1234 5678</div>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Email</div>
              <div className="opacity-90">info@smartcad.sk</div>
            </div>
          </div>
        </div>
      </section>

     
      
    </div>
  );
}

export default Home;