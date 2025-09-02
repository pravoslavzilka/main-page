import { 

  ArrowRight,

} from 'lucide-react';


const Footer = () => {
    return (

        <footer className="bg-slate-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-sm flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-sm opacity-80"></div>
                </div>
                <span className="text-xl font-bold">
                  smart<span className="text-teal-400">CAD</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Váš dôveryhodný partner pre CAD softvér, hardvér a školiace riešenia na Slovensku.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Produkty</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AutoCAD</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Revit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Civil 3D</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CAD pracovné stanice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Plotre</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Služby</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Školenia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konzultácie</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Podpora</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Inštalácia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Údržba</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Zostaňte informovaní o najnovších CAD novinkách a školiacich príležitostiach.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Váš email"
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-500 px-4 py-2 rounded-r-lg hover:bg-teal-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 SmartCAD. Všetky práva vyhradené.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Ochrana súkromia</a>
              <a href="#" className="hover:text-white transition-colors">Podmienky služby</a>
              <a href="#" className="hover:text-white transition-colors">Cookie zásady</a>
            </div>
          </div>
        </div>
      </footer>



    );
}






export default Footer;  
