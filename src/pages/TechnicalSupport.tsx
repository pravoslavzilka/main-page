import React, { useState } from 'react';
import { Phone, Monitor, Download, ChevronDown, ChevronUp, X } from 'lucide-react';

export default function TechnicalSupport() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    productVersion: '',
    description: ''
  });

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Vaša požiadavka bola odoslaná! Budeme vás kontaktovať čo najskôr.');
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      productType: '',
      productVersion: '',
      description: ''
    });
  };

  const faqItems = [
    
    {
      question: "Čo je dôležité pri kontaktovaní technickej podpory?",
      answer: [
        "Aby sme Vám vedeli pomôcť čo najrýchlejšie, uveďte prosím:",
        "Meno alebo názov spoločnosti na ktorú bol produkt zakúpený.",
        "Typ a verziu produktu, s ktorým potrebujete pomôcť.",
        "Detailný popis problému, ideálne doplnený o screenshot alebo fotku."
      ]
    },
    {
      question: "Pre koho je určená technická podpora?",
      answer: [
        "Technická podpora je primárne určená zákazníkom spoločnosti smartCAD s.r.o.",
        "Podpora pre software alebo hardware, ktorý nebol dodaný našou spoločnosťou, nie je spoplatnená."
      ]
    },
    {
      question: "S čím Vám dokážeme pomôžeme v rámci technickej podpory?",
      answer: [
        "Riešenie nefunkčností softvéru alebo hardvéru dodaného našou spoločnosťou.",
        "Poradenstvo pri aktivácii a správe licencií."
      ]
    },
    {
      question: "Čo bezplatná technická podpora nezahŕňa?",
      answer: [
        "Pomoc s nefunkčnosťou softvéru alebo hardvaru, ktorý nebol dodaný spoločnosťou smartCAD s.r.o.",
        "Odpovede na otázky, ako fungujú jednotlivé nástroje a ako s nimi efektívne pracovať. Tie Vám radi poskytneme na našich školeniach."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#86cccf]/10 to-[#5fa4a4]/10">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5fa4a4]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fbea01]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mt-10 mb-24 animate-fadeIn">
          <h1 className="text-3xl md:text-6xl font-bold bg-[#008080] bg-clip-text text-transparent mb-4 tracking-tight">
            smartCAD technická podpora
          </h1>
          <p className="text-xl text-[#191a1a] font-light tracking-wide">
            Sme tu pre Vás už viac než 15 rokov - osobne aj online
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Software Support */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#5fa4a4]/20 hover:border-[#5fa4a4]/50 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-[#191a1a] p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#191a1a] mb-3">Software</h3>
                <a href="tel:+421940636743" className="text-2xl font-bold text-[#008080] hover:text-[#5fa4a4] transition-colors block mb-2">
                  +421 940 636 743
                </a>
                <p className="text-sm text-[#191a1a]/60">v pracovné dni od 8:00 do 16:00</p>
              </div>
            </div>
          </div>

          {/* Hardware Support */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f9a7b1]/20 hover:border-[#f9a7b1]/50 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-[#191a1a] p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#191a1a] mb-3">Hardware</h3>
                <a href="tel:+421940636482" className="text-2xl font-bold text-[#008080] hover:text-[#5fa4a4] transition-colors block mb-2">
                  +421 940 636 482
                </a>
                <p className="text-sm text-[#191a1a]/60">v pracovné dni od 8:00 do 16:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Remote Access */}
        <a href="https://smartcad.sk/tv/smartcad-podpora.exe" target='_blank' >
          <div className="bg-[#5fa4a4] rounded-2xl p-8 mb-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white backdrop-blur-sm p-4 rounded-xl">
                  <img src="/images/team_viewer.png" className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Vzdialený prístup</h3>
                  <p className="text-white/80">Pre rýchlu podporu na diaľku</p>
                </div>
              </div>
              <button
                
                
                rel="noopener noreferrer"
                className="bg-[#008080] text-white px-8 py-4 rounded-xl font-semibold  flex items-center gap-2"
              >
                Stiahnuť bezplatnú aplikáciu Teamviewer
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </a>

        {/* Request Support Section */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-10 mb-12 shadow-xl border border-[#86cccf]/30 hover:border-[#5fa4a4]/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
        >
          <h2 className="text-3xl font-bold text-[#191a1a] mb-6 text-center group-hover:text-[#008080] transition-colors">
            Žiadajte požiadavku na podporu
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#008080] to-[#5fa4a4] mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
          <p className="text-[#191a1a]/60 text-sm mt-4 text-center">Kliknite pre otvorenie formulára</p>
        </button>

        <h2 className='text-2xl font-bold text-[#191a1a] mb-12 mt-12'>Ako funguje naša technická podpora a komu je určená?</h2>

        {/* FAQ Section */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#86cccf]/30 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-[#86cccf]/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#191a1a] pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#080080]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#191a1a]/40" />
                  )}
                </div>
              </button>
              
              {expandedFaq === index && item.answer && (
                <div className="px-8 pb-6 animate-slideDown">
                  <div className="border-t border-[#86cccf]/30 pt-4">
                    {Array.isArray(item.answer) ? (
                      <ul className="space-y-3">
                        {item.answer.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#fbea01] mt-1 flex-shrink-0 font-bold">•</span>
                            <span className="text-[#191a1a]/80 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[#191a1a]/80 leading-relaxed">{item.answer}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-[#191a1a]/60 text-sm">
            Máte otázky? Kontaktujte nás na vyššie uvedených telefónnych číslach.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#008080] p-6 rounded-t-2xl flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Požiadavka na podporu</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                    Meno / Názov spoločnosti <span className="text-[#f9a7b1]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#86cccf]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5fa4a4] focus:border-transparent transition-all"
                    placeholder="Vaše meno alebo názov firmy"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                      E-mail <span className="text-[#f9a7b1]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#86cccf]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5fa4a4] focus:border-transparent transition-all"
                      placeholder="vas@email.sk"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                      Telefón
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#86cccf]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5fa4a4] focus:border-transparent transition-all"
                      placeholder="+421 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                      Typ produktu <span className="text-[#f9a7b1]">*</span>
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#86cccf]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5fa4a4] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Vyberte typ produktu</option>
                      <option value="software">Software</option>
                      <option value="hardware">Hardware</option>
                      <option value="license">Licencia</option>
                      <option value="other">Iné</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                      Verzia produktu
                    </label>
                    <input
                      type="text"
                      name="productVersion"
                      value={formData.productVersion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#86cccf]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5fa4a4] focus:border-transparent transition-all"
                      placeholder="napr. 2024.1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                    Detailný popis problému <span className="text-[#f9a7b1]">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#86cccf]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5fa4a4] focus:border-transparent transition-all resize-none"
                    placeholder="Popíšte čo najpodrobnejšie váš problém, kroky ktoré ste vykonali, a čo sa stalo..."
                  />
                </div>

                <div className="bg-[#86cccf]/10 rounded-xl p-4 border border-[#86cccf]/30">
                  <p className="text-sm text-[#191a1a]/80">
                    <span className="font-semibold text-[#080080]">Tip:</span> Pre rýchlejšie riešenie priložte screenshot alebo fotku problému k vášmu emailu po odoslaní formulára.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border-2 border-[#86cccf]/50 text-[#191a1a] rounded-xl font-semibold hover:bg-[#86cccf]/10 transition-all duration-300"
                >
                  Zrušiť
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#008080] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Odoslať požiadavku
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}