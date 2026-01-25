import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, X } from 'lucide-react';
import teamMembers from '../data/teamMembers.json';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showTeam, setShowTeam] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Prosím vyplňte všetky povinné polia.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Správa odoslaná!');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const PersonModal = ({ person, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className={`w-24 h-24 bg-gradient-to-br ${person.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
            <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-[#191a1a] mb-2">{person.name}</h3>
          <p className="text-[#008080] font-semibold">{person.role}</p>
        </div>
        
        <div className="space-y-4">
          <a href={`mailto:${person.email}`} className="flex items-center gap-3 p-4 bg-[#86cccf] bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all group">
            <div className="w-10 h-10 bg-[#008080] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#49a7b1] transition-colors">
              <Mail className="text-white" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-[#191a1a] font-medium truncate">{person.email}</p>
            </div>
          </a>
          
          <a href={`tel:${person.phone}`} className="flex items-center gap-3 p-4 bg-[#86cccf] bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all group">
            <div className="w-10 h-10 bg-[#008080] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#49a7b1] transition-colors">
              <Phone className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">Telefón</p>
              <p className="text-[#191a1a] font-medium">{person.phone}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-[#008080] shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white">Naši experti sú tu, aby vám pomohli</h1>
          <p className="text-white text-opacity-90 mt-2 text-lg">Kontaktujte nás a premieňte vaše vízie na realitu</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 mb-12 md:grid-cols-2 items-start">
          <div className="space-y-8">
            {/* Obchod */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#008080] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Phone className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#191a1a] mb-4">Obchod</h3>
              <div className="space-y-3">
                <a href="tel:+421940636489" className="flex items-center text-[#191a1a] hover:text-[#008080] transition-colors group">
                  <div className="w-8 h-8 bg-[#86cccf] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#49a7b1] transition-colors">
                    <Phone size={16} className="text-[#008080] group-hover:text-white" />
                  </div>
                  <span className="font-medium">+421 940 636 489</span>
                </a>
                <a href="mailto:obchod@smartcad.sk" className="flex items-center text-[#191a1a] hover:text-[#008080] transition-colors group">
                  <div className="w-8 h-8 bg-[#86cccf] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#49a7b1] transition-colors">
                    <Mail size={16} className="text-[#008080] group-hover:text-white" />
                  </div>
                  <span className="font-medium">obchod@smartcad.sk</span>
                </a>
              </div>
                            <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200">V pracovné dni od 8:00 do 16:00</p>

            </div>

            {/* Technická podpora - Software */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#49a7b1] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Mail className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#191a1a] mb-2">Technická podpora</h3>
              <p className="text-sm font-semibold text-[#5fa4a4] mb-4">Software</p>
              <div className="space-y-3">
                <a href="mailto:podpora@smartcad.sk" className="flex items-center text-[#191a1a] hover:text-[#49a7b1] transition-colors group">
                  <div className="w-8 h-8 bg-[#86cccf] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#49a7b1] transition-colors">
                    <Mail size={16} className="text-[#008080] group-hover:text-white" />
                  </div>
                  <span className="font-medium">podpora@smartcad.sk</span>
                </a>
                <a href="tel:+421940636743" className="flex items-center text-[#191a1a] hover:text-[#49a7b1] transition-colors group">
                  <div className="w-8 h-8 bg-[#86cccf] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#49a7b1] transition-colors">
                    <Phone size={16} className="text-[#008080] group-hover:text-white" />
                  </div>
                  <span className="font-medium">+421 940 636 743</span>
                </a>
              </div>
                            <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200">V pracovné dni od 8:00 do 16:00</p>

            </div>

            {/* Hardware */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#5fa4a4] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Phone className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#191a1a] mb-4">Hardware</h3>
              <div className="space-y-3">
                <a href="mailto:servis@smartcad.sk" className="flex items-center text-[#191a1a] hover:text-[#5fa4a4] transition-colors group">
                  <div className="w-8 h-8 bg-[#86cccf] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#5fa4a4] transition-colors">
                    <Mail size={16} className="text-[#008080] group-hover:text-white" />
                  </div>
                  <span className="font-medium">servis@smartcad.sk</span>
                </a>
                <a href="tel:+421940636482" className="flex items-center text-[#191a1a] hover:text-[#5fa4a4] transition-colors group">
                  <div className="w-8 h-8 bg-[#86cccf] rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#5fa4a4] transition-colors">
                    <Phone size={16} className="text-[#008080] group-hover:text-white" />
                  </div>
                  <span className="font-medium">+421 940 636 482</span>
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200">V pracovné dni od 8:00 do 16:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-[#191a1a] mb-6">Kontaktujte nás</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                Meno a priezvisko*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#86cccf] rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                Názov firmy
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#86cccf] rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                E-mail*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#86cccf] rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                Telefón*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#86cccf] rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[#191a1a] mb-2">
                Správa*
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#86cccf] rounded-xl focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none transition-all resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                onClick={handleSubmit}
                className="bg-[#008080] text-white px-10 py-4 rounded-xl font-bold  transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                <Send size={22} />
                Odoslať
              </button>
            </div>
          </div>
        </div>

        
      {/* Person Modal */}
      {selectedPerson && (
        <PersonModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
      )}
    </div>
    {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <button
            onClick={() => setShowTeam(!showTeam)}
            className="w-full text-left flex items-center justify-between"
          >
            <h2 className="text-3xl font-bold text-[#191a1a] mb-6">Chcete kontaktovať konkrétnu osobu?</h2>
            <span className="text-sm text-[#008080]">{showTeam ? 'Skryť' : 'Zobraziť osoby'}</span>
          </button>

          {showTeam && (
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {teamMembers.map((person) => (
                <div
                  key={person.id}
                  onClick={() => setSelectedPerson(person)}
                  className="border-2 border-[#86cccf] rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer hover:border-[#008080] hover:-translate-y-1"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-[#191a1a]">{person.name}</h3>
                  <p className="text-[#5fa4a4] font-medium">{person.role}</p>
                  <p className="text-sm text-[#008080] mt-2 font-semibold">Kliknite pre kontakt →</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#008080] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#191a1a] mb-3">Pobočka Bratislava</h3>
                <p className="text-[#191a1a] font-medium">Čajakova 19</p>
                <p className="text-[#191a1a] font-medium">811 05 Bratislava</p>
              </div>
            </div>
             <div className='mt-10 rounded'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.1143980577852!2d17.115218227025395!3d48.15845356146418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89528fd37fff%3A0xc93a1b5e96239e1e!2ssmartCAD%20s.r.o.!5e0!3m2!1sen!2ssk!4v1769381710633!5m2!1sen!2ssk" width="100%" height="400"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>    
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#49a7b1] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin className="text-white" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#191a1a] mb-3">Pobočka Banská Bystrica</h3>
                <p className="text-[#191a1a] font-medium">Zvolenská cesta 14</p>
                <p className="text-[#191a1a] font-medium">974 03 Banská Bystrica</p>
              </div>
            </div>
            <div className='mt-10 rounded'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8630305465936!2d19.13310371274987!3d48.70809887119257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153dd79fa9f7e3%3A0xc08145d3bb97bbc7!2ssmartCAD%20s.r.o.!5e0!3m2!1sen!2ssk!4v1769381953867!5m2!1sen!2ssk" width="100%" height="400"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>  
          </div>
        </div>

        {/* Company Details */}
        <div className="bg-[#191a1a] text-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6">Fakturačné údaje</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-xl  mb-2">smartCAD s.r.o.</p>
              <p className="text-white opacity-90">Čajakova 19</p>
              <p className="text-white opacity-90">811 05 Bratislava</p>
            </div>
            <div className="space-y-1">
              <p className="text-white opacity-90"><span className="font-semibold text-[#86cccf]">IČO:</span> 44 743 289</p>
              <p className="text-white opacity-90"><span className="font-semibold text-[#86cccf]">IČ DPH:</span> SK2022818457</p>
              <p className="text-white opacity-90 text-sm"><span className="font-semibold text-[#86cccf]">IBAN:</span> SK13 1100 0000 0026 2801 3316</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}