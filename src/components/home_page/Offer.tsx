import { 
  Monitor, 
  HardDrive, 
  GraduationCap, 
  ArrowRight,
  Presentation,
  Cog,
  Workflow,
} from 'lucide-react';


const Offer = () => {
    return(
        
      <section id="riesenia" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Zabezpečujeme</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompletné CAD riešenia od licencovania softvéru až po nastavenie hardvéru a poskytovanie servisných služieb
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008080] transition-colors">
                <Monitor className="w-10 h-10 text-[#5fa4a4] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Projekčná činnosť</h3>
              <p className="text-gray-600 mb-6">
                železobetónové konštrukcie, TZB v Revite

              </p>
              <button className="text-[#5fa4a4] font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008080] transition-colors">
                <Cog className="w-10 h-10 text-[#5fa4a4] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Konštrukčná činnosť</h3>
              <p className="text-gray-600 mb-6">
                potrubia, oceľové konštrukcie, pevnostné výpočty

              </p>
              <button className="text-[#5fa4a4] font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008080] transition-colors">
                <GraduationCap className="w-10 h-10 text-[#5fa4a4] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Školenia</h3>
              <p className="text-gray-600 mb-6">
                BIM, CAD skupinové aj individuálne

              </p>
              <button className="text-[#5fa4a4] font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Prihlásiť sa <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginTop: '5rem' }}>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008080] transition-colors">
                <Workflow className="w-10 h-10 text-[#5fa4a4] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Software</h3>
              <p className="text-gray-600 mb-6">
                pre stavebníctvo, strojárstvo a 3D vizualizácie

              </p>
              <button className="text-[#5fa4a4] font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008080] transition-colors">
                <HardDrive className="w-10 h-10 text-[#5fa4a4] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Hardware</h3>
              <p className="text-gray-600 mb-6">
                veľkoformátové stroje, výkonné PC zostavy

              </p>
              <button className="text-[#5fa4a4] font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008080] transition-colors">
                <Presentation className="w-10 h-10 text-[#5fa4a4] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">IT služby</h3>
              <p className="text-gray-600 mb-6">
                správa siete a bezpečnosť dát
              </p>
              <button className="text-[#5fa4a4] font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    )
}

export default Offer;