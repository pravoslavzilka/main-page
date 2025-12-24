import { CheckCircle } from 'lucide-react';



const Reasons = () => {
    return (
       <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Projektujeme a poskytujeme servisné služby</h2>
            <p className="text-xl text-[#008080]">
              Využite naše viac ako 20-ročné skúsenosti vo svoj prospech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#008080] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Oficiálny Autodesk partner</h3>
                <p className="text-gray-600">Autorizovaný predajca s priamym prístupom k najnovšiemu softvéru a podpore</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#008080] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">20+ rokov skúseností</h3>
                <p className="text-gray-600">Dve desaťročia odborných znalostí v CAD riešeniach a technických službách</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#008080] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Certifikovaní lektori</h3>
                <p className="text-gray-600">Profesionálni inžinieri a certifikovaní inštruktori</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#008080] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Komplexné riešenia</h3>
                <p className="text-gray-600">Kompletné CAD hardvérové a softvérové balíky</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#008080] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Popredajná podpora</h3>
                <p className="text-gray-600">Priebežné konzultácie a technická pomoc</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#008080] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Lokálne odborné znalosti</h3>
                <p className="text-gray-600">Porozumenie slovenského trhu a predpisov</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#008080] mb-2">500+</div>
              <div className="text-gray-600">Vyškolených profesionálov</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#008080] mb-2">3000+</div>
              <div className="text-gray-600">Vybavených firiem</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#008080] mb-2">98%</div>
              <div className="text-gray-600">Spokojnosť zákazníkov</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#008080] mb-2">20+</div>
              <div className="text-gray-600">Rokov skúseností</div>
            </div>
          </div>
        </div>
      </section>     

    );
}


export default Reasons;