import { 
  Calendar,
  Users,
} from 'lucide-react';

import { useState } from 'react';



const Training = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    return (

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
                      ? 'border-b-2 border-[#008080] text-[#191a1a]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Nadchádzajúce kurzy
                </button>
                <button
                  onClick={() => setActiveTab('custom')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'custom'
                      ? 'border-b-2 border-[#008080] text-[#191a1a]'
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
                      <Calendar className="w-8 h-8 text-[#008080]" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">AutoCAD základy</h3>
                        <p className="text-gray-600">15.-17. marec 2025 | 3 dni | Bratislava</p>
                      </div>
                    </div>
                    <button className="bg-[#008080] text-white px-6 py-2 rounded-lg hover:bg-[#49a7b1] transition-colors">
                      Registrovať
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-8 h-8 text-[#008080]" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Revit architektúra</h3>
                        <p className="text-gray-600">8.-12. apríl 2025 | 5 dní | Košice</p>
                      </div>
                    </div>
                    <button className="bg-[#008080] text-white px-6 py-2 rounded-lg hover:bg-[#49a7b1] transition-colors">
                      Registrovať
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-8 h-8 text-[#008080]" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Civil 3D pre infraštruktúru</h3>
                        <p className="text-gray-600">20.-24. máj 2025 | 5 dní | Bratislava</p>
                      </div>
                    </div>
                    <button className="bg-[#008080] text-white px-6 py-2 rounded-lg hover:bg-[#49a7b1] transition-colors">
                      Registrovať
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'custom' && (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-[#008080] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Školiace programy na mieru</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Ponúkame prispôsobené školiace programy pre váš tím, dodávané na vašom mieste alebo online. 
                    Kontaktujte nás, aby sme prediskutovali vaše špecifické potreby a vytvorili prispôsobené učebné osnovy.
                  </p>
                  <button className="bg-[#008080] text-white px-8 py-3 rounded-lg hover:bg-[#49a7b1] transition-colors">
                    Požiadať o školenie na mieru
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


    );
}

export default Training;