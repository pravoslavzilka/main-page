import { Star } from 'lucide-react';


const Customers = () => {
    return (
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
                {/*<div className="w-12 h-12 bg-gray-300 rounded-full mr-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzApfUQeGlPkReLlv2gSKxR3Ug4kDr1O-hQ&s" alt="Ivan Sopko" className="w-12 h-12 rounded-full" /></div>*/}
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
                {/*<div className="w-12 h-12 bg-gray-300 rounded-full mr-4"><img src="https://play-lh.googleusercontent.com/I6kk5TUH2luEQRInqoJeegF3N2z2DhR8owAGLU_6SGs51jduGiln3ATQSmYfqXgfP5VB" alt="Andrea Fumačová" className="w-12 h-12 rounded-full" /></div>*/}
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
                {/*<div className="w-12 h-12 rounded-full mr-4"><img src="https://www.junoz.sk/wp-content/themes/junoz/img/junoz.svg" alt="Viktória Jalšovská" className="w-12 h-12 rounded-full" /></div>*/}
                <div>
                  <div className="font-semibold text-slate-800">Viktória Jalšovská</div>
                  <div className="text-gray-600 text-sm">Obchodný manažér, Junoz, s.r.o.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Customers;