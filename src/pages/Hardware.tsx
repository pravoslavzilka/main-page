import React from 'react';
import { 
  Monitor, 
  Laptop, 
  Printer, 
  Users, 
  Settings, 
  Award,
  CheckCircle,
  BarChart3,
  Briefcase,
  Code,
  Presentation
} from 'lucide-react';



const Hardware = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hľadáte špecializovaný HW?
          </h1>
          <p className="text-xl mb-2">
            Pre prácu v BIM, CAD, CAM softvéroch, rendrovanie, tlač výkresov atď. 
          </p>
          <p className="text-lg opacity-90">
            potrebujete výkonné stroje
          </p>
          <div className="mt-8">
            <p className="text-sm opacity-80">
              My vám ich dodáme a nainštalujeme
            </p>
          </div>
        </div>
      </section>

      {/* Custom PC Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-600 mb-6">
                Počítačové zostavy na mieru
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  zostavíme počítač podľa požiadaviek konkrétnej aplikácie pre
                  rendrovanie, vizualizáciu a pod. pre rýchle CAD, BIM aplikácie CAD a 
                  softvér like grafické softvéry, herný streaming
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  zabezpečíme a vykonáme poskladanie, rýchly przewóz, veľký záručný servis,
                  zrušenie a záložné disky
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  leunt componenty obsahuje sa týkazuje s poskládať Gorefresh komponenty
                  a zostalov
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  výhodné stavania pre PC sa zbor menej stanovania komunikácie jejich
                  ekonomická a rozvej
                </p>
              </div>
              <button className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                Viac ako vám pomôžeme
              </button>
            </div>
            <div className="flex justify-center">
              <div className="">
                <img src="https://new.smartcad.sk/wp-content/uploads/2024/03/PC-zostavy.png" alt="Custom PC" className=" h-50 text-blue-400 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-teal-600 mb-8">
            NTB, EliteBooky, ProBooky, monitory
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {/* Laptops */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Laptop className="w-16 h-16 mx-auto text-gray-600" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Laptop className="w-16 h-16 mx-auto text-gray-600" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Laptop className="w-16 h-16 mx-auto text-blue-500" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Laptop className="w-16 h-16 mx-auto text-gray-600" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Monitors */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Monitor className="w-16 h-16 mx-auto text-gray-600" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Monitor className="w-16 h-16 mx-auto text-gray-600" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Monitor className="w-16 h-16 mx-auto text-yellow-500" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Monitor className="w-16 h-16 mx-auto text-purple-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Large Format Printers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-600 mb-6">
                Veľkoformátové tlačiarne tzv. plotre
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dnes používa a kto vedia zákrajanie pre BIM a nie zák 2D risáky
                  tlačiareninami.
                </p>
                <p>
                  Pre objekty vďaka pripratunému aj na veľké objekty a predloženej pre rýchle
                  graficku s ako fotografiu jeho obdobnej.
                </p>
                <p className="font-semibold">Ponúkame tieto služby:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                    predaj
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                    multifunction - skenovanie a kopírovanie farebnej
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                    predvídateľné servisné poplatky, predvídateľné vyády a zákončasné účet
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                    grafické - rýchly profesionality tlačí aplikuj, fotografické a celenie
                    fotografií
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-100 p-8 rounded-lg">
                <Printer className="w-32 h-32 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Zabezpečujeme</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kompletné CAD riešenie od licencovania softvéru až po nastavenie hardvéru a 
              poskytovanie servisných služieb
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* CAD Software */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">CAD Softvér</h3>
              <p className="text-gray-600 mb-4">
                AutoCAD, Revit, Civil 3D a ďalšie odborné 
                licencie Sotware a rozvinutie
              </p>
              <button className="text-teal-600 font-medium hover:text-teal-700">
                Zistiť viac →
              </button>
            </div>

            {/* CAD Hardware */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">CAD Hardvér</h3>
              <p className="text-gray-600 mb-4">
                Výkonné počítače pracovné stanice, monitory, 
                plotre a ďalšie zariadenia
              </p>
              <button className="text-teal-600 font-medium hover:text-teal-700">
                Zistiť viac →
              </button>
            </div>

            {/* Training */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Presentation className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Školenia a workshopy</h3>
              <p className="text-gray-600 mb-4">
                Certifikované kurzy a praktického závoja 
                programov pre profesionálov a firmy
              </p>
              <button className="text-teal-600 font-medium hover:text-teal-700">
                Prísť sa →
              </button>
            </div>

            {/* Technical Support */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technické a IT služby</h3>
              <p className="text-gray-600 mb-4">
                Správa sietí, inštalácie pre výpočt takú 
                podporu a údržbu
              </p>
              <button className="text-teal-600 font-medium hover:text-teal-700">
                Zistiť viac →
              </button>
            </div>

            {/* Project Management */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Projektná činnosť</h3>
              <p className="text-gray-600 mb-4">
                Zabezpečovanie konštrukčné, CAD a BIM 
                služby projektov
              </p>
              <button className="text-teal-600 font-medium hover:text-teal-700">
                Zistiť viac →
              </button>
            </div>

            {/* Construction Activity */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Konštrukčná činnosť</h3>
              <p className="text-gray-600 mb-4">
                Navase, statické konštrukčné navou provemania 
                výpočty
              </p>
              <button className="text-teal-600 font-medium hover:text-teal-700">
                Zistiť viac →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Promise */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Projektujeme a poskytujeme servisné služby
          </h2>
          <p className="text-gray-600 mb-12">
            Využite naše viac ako 20 ročné skúsenosti vo svojich procesoch
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-gray-800">Oficiálny Autodesk partner</h4>
                <p className="text-sm text-gray-600">
                  Autorizovaný predajca a priamym poskytom s 
                  licenciámi, riešenia a podpora
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-gray-800">20+ rokov skúseností</h4>
                <p className="text-sm text-gray-600">
                  Daň dlhoročné odbornosti pokraných v CAD 
                  technické a technických oblastiach
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-gray-800">Certifikované školenia</h4>
                <p className="text-sm text-gray-600">
                  Professional software a certifikačnom školením
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-gray-800">Komplexné riešenia</h4>
                <p className="text-sm text-gray-600">
                  Kompletné CAD implementace a soffware dodaj
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-gray-800">Popredná podpora</h4>
                <p className="text-sm text-gray-600">
                  Predajové konzultácie a technická pomoc
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-gray-800">Lokálna odborná záloha</h4>
                <p className="text-sm text-gray-600">
                  Professional zákaznícke film a provides
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Vyškolených profesionálov</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">3000+</div>
              <div className="text-gray-600">Vykonané licencie</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Spokojnosť zákazníkov</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">20+</div>
              <div className="text-gray-600">Rokov skúseností</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-4 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Spolupracujeme so silnými spoločnosťami
          </h2>
          <p className="text-gray-300">
            Naši odbornosť partneři v dodávanie technológií
          </p>
        </div>
      </section>
    </div>
  );
};



export default Hardware;