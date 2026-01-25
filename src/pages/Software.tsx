import React from 'react';
import { 
  Monitor, 
  Laptop, 
  CheckCircle,
} from 'lucide-react';



const Hardware = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#49a7b1] to-[#008080] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Softvéry pre vizualizácie, stavebníctvo, strojárstvo
          </h1>
          <p className="text-xl mb-2">
            Poradíme Vám s výberom 
          </p>
          <p className="text-lg opacity-90">
            potrebujete výkonný softvér na CAD, BIM, 3D modelovanie, rendering alebo grafiku?
          </p>
          <div className="mt-8">
            <p className="text-sm opacity-80">
              My vám ich dodáme a nainštalujeme
            </p>
          </div>
        </div>
      </section>

      {/* Custom PC Section */}
      <section className=" px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 py-16 items-center" id='custom-pc'>
            <div>
              <h2 className="text-2xl font-bold text-[#008080] mb-6">
                Vizualizačné a rendrovacie softvéry 
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-3 mt-0.5 flex-shrink-0" />
                  Ktorý je pre Vás ten najvhodnejší?
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-3 mt-0.5 flex-shrink-0" />
                  Pretriedili sme podstatné informácie, ktoré Vám pomôžu zorientovať sa.
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-3 mt-0.5 flex-shrink-0" />
                  V-RAY / CORONA / ENSCAPE / TWINMOTION
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-3 mt-0.5 flex-shrink-0" />
                  výhodné stavania pre PC sa zbor menej stanovania komunikácie jejich
                  ekonomická a rozvej
                </p>
              </div>
              <button className="mt-8 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                Zisti viac
              </button>
              <button className="mt-8 ml-3 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                Eshop
              </button>
            </div>
            <div className="flex justify-center">
              <div className="">
                <img src="/images/sw/porovnanie-sw.png" alt="Custom PC" className=" h-50 text-blue-400 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>



        {/* Large Format Printers - Image Left */}
        <section className=" px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center py-16" id="puzzle">
              <div className="flex justify-center">
                <div className=" rounded-lg">
                  <img src="/images/sw/sw1.png" alt="Placeholder" className="h-50 text-gray-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-teal-600 mb-6">
                  Stavebníctvo, BIM, TZB, infraštruktúra
                </h2>
                <div className="space-y-4 text-gray-700">
                  
                  <p className="font-semibold">Nemecká kvalita a prevedenie</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                      SKLADAČKY VÝKRESOV – vám ušetria množstvo času a získate profesionálne poskladané výkresy so skladmi s presnosťou na 1mm   
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                      SKENERY – Patentovaná technológia Rowe vytvára skeny rovnomerne nasvietené, bez odchýliek, tieňov a rozmazaní.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                      REZAČKY – majú otvorené bočné časti na oboch stranách, vďaka čomu  orežete akýkoľvek veľký výkres
                    </li>
                    
                  </ul>

                  
                  <button className="mt-8 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                    Zisti viac
                  </button>
                  <button className="mt-8 ml-3 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                    Eshop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className=" px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center py-16" id="office">
            <div>
              <h2 className="text-2xl font-bold text-teal-600 mb-6">
                Strojárstvo a potrubné systémy 
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Na sklade spravidla držíme plotrové rolky 80gr, 50m náviny a šírky od 297 po 1067mm
                </p>
                <p>
                  Ak máte záujem o vyššie gramáže a art materiály napr. plátna, fotografické papiere, fólie a pod. napíšte nám na:  obchod@smartcad.sk
                </p>
                <b>Do plotrov odporúčame používať LEN ORIGINÁLNE NÁPLNE a TLAČOVÉ HLAVY</b>
                <p className="font-semibold">Pretože:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    atrament nemá vlastnosti a zloženie ako originál, časom začne určite zatekať, upchávať trysky, rozmazávať sa na papieri, strácať intenzitu
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    použitím repasu alebo kompatibilnej náplne stratíte záruku na tlačiarni
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    ploter takúto náplň nemusí načítať
                  </li>
                  
                </ul>


                <button className="mt-8 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                    Zisti viac
                  </button>
                  <button className="mt-8 ml-3 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                    Eshop
                  </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className=" rounded-lg">
                <img src="/images/sw/sw2.jpg" alt="Placeholder" className="h-50 text-gray-600" />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      

     

          

      
    </div>
  );
};



export default Hardware;