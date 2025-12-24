import { 

  Monitor, 
  HardDrive, 
  GraduationCap, 

} from 'lucide-react';

const Products = () => {
    return (
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
              <div className="absolute top-4 right-4 bg-[#008080] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Najpredávanejší
              </div>
              <Monitor className="w-16 h-16 text-[#008080] mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Autodesk AutoCAD</h3>
              <p className="text-gray-600 mb-6">
                Priemyselný štandard 2D a 3D CAD softvér s plnou licenciou a podporou.
              </p>
              <button className="bg-[#008080] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                Získať cenovú ponuku
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 bg-[#191a1a] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Na mieru
              </div>
              <HardDrive className="w-16 h-16 text-[#191a1a] mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">CAD pracovné stanice</h3>
              <p className="text-[#191a1a] mb-6">
                Vysokovýkonné počítače postavené špecificky pre CAD aplikácie.
              </p>
              <button className="bg-[#191a1a] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
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

    );
}


export default Products;