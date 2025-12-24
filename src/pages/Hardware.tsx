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
          <div className="grid md:grid-cols-2 gap-12 items-center" id='custom-pc'>
            <div>
              <h2 className="text-2xl font-bold text-[#008080] mb-6">
                Počítačové zostavy na mieru
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-3 mt-0.5 flex-shrink-0" />
                  zostavíme počítač podľa požiadaviek konkrétnej aplikácie pre
                  rendrovanie, vizualizáciu a pod. pre rýchle CAD, BIM aplikácie CAD a 
                  softvér like grafické softvéry, herný streaming
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-3 mt-0.5 flex-shrink-0" />
                  zabezpečíme a vykonáme poskladanie, rýchly przewóz, veľký záručný servis,
                  zrušenie a záložné disky
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-3 mt-0.5 flex-shrink-0" />
                  leunt componenty obsahuje sa týkazuje s poskládať Gorefresh komponenty
                  a zostalov
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#008080] mr-3 mt-0.5 flex-shrink-0" />
                  výhodné stavania pre PC sa zbor menej stanovania komunikácie jejich
                  ekonomická a rozvej
                </p>
              </div>
              <button className="mt-8 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
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
          <div className="grid md:grid-cols-2 gap-12 items-center" id="plotter">
            <div>
              <h2 className="text-2xl font-bold text-teal-600 mb-6">
                Veľkoformátové tlačiarne tzv. plotre
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Sme predajca a servisné stredisko pre SR s viac ako 20 ročnými skúsenosťami
                </p>
                <p>
                  Pomôžeme vám zorientovať sa vo svete plotrov a poradíme pri výbere zariadenia, ktoré pokryje vaše potreby
                </p>
                <p className="font-semibold">Ponúkame a servisujeme plotre</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    technické – určené prevažne na čiarovú tlač
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    multifunkčné – so skenerom a kopírovacími funkciami
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    produkčné – pre veľké projekcie, vyžadujúce rýchlu a každodennú tlač 
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    grafické  – pre profesionálnu tlač na plátno, fotografické  a ďalšie špeciálne materiály
                  </li>
                </ul>

                <p>
                 Zabezpečujeme
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    dovoz a montáž stroja
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    zapojenie do siete a inštaláciu
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    testovanie
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#008080] mr-2 mt-1 flex-shrink-0" />
                    zaškolenie užívateľov
                  </li>
                </ul>
                <button className="mt-8 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                Hľadáte servis pre svoj ploter?
              </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className=" rounded-lg">
                <img src="https://new.smartcad.sk/wp-content/uploads/2024/03/T950MFP.png" alt="Placeholder" className="h-50 text-gray-600" />
              </div>
              
            </div>
          </div>
        </div>
      </section>



        {/* Large Format Printers - Image Left */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className=" rounded-lg">
                  <img src="https://new.smartcad.sk/wp-content/uploads/2024/03/rowe-skladacka.png" alt="Placeholder" className="h-50 text-gray-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-teal-600 mb-6">
                  Veľkoformátové skladačky výkresov, rezačky a skenery značky Rowe
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

                  
                  <button className="mt-15 bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                  Chcete sa dozvedieť viac? Prejdite na našu stránku rowe.sk
                </button>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-600 mb-6">
                Plotrové role, náplne a hlavy do plotrov, kancelárske potreby
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
                Zháňate rolky do plotra? Dovezieme!
              </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className=" rounded-lg">
                <img src="./images/hw2.png" alt="Placeholder" className="h-50 text-gray-600" />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      

     

          

      
    </div>
  );
};



export default Hardware;