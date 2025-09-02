import{ Link} from 'react-router-dom'



const Navbar = () => {

    return (
      <header className="bg-slate-800 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="https://new.smartcad.sk/wp-content/uploads/2023/10/smartcad-logo-v-krivkach_-biele-638x100.png"
                alt="smartCad Logo"
                className="h-10"
              />
            </Link>

          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <Link to="/software" className="hover:text-teal-400 transition-colors">SW</Link>
            <Link to="/hardware" className="hover:text-teal-400 transition-colors">HW</Link>
            <Link to="#skolenia" className="hover:text-teal-400 transition-colors">Školenia</Link>
            <Link to="#o-nas" className="hover:text-teal-400 transition-colors">O nás</Link>
            <Link to="#blog" className="hover:text-teal-400 transition-colors">Blog</Link>
            <Link to="#kontakt" className="hover:text-teal-400 transition-colors">Kontakt</Link>
          </nav>

          <div className="flex items-center space-x-4">
            
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              E-shop
            </button>
          </div>
        </div>
      </header>



    );
}


export default Navbar;