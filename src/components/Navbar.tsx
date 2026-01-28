import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

const NavDropdown = ({ label, items, to, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile && items.length > 0) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && items.length > 0) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  };

  // If no items, render as a simple link
  if (items.length === 0) {
    return (
      <Link
        to={to}
        className={`hover:text-teal-400 transition-colors ${isMobile ? 'w-full py-2 block' : ''}`}
      >
        {label}
      </Link>
    );
  }

  // If has items, render as dropdown
  return (
    <div 
      className={`relative ${isMobile ? 'w-full' : ''}`} 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hover:text-teal-400 transition-colors flex items-center gap-1 ${isMobile ? 'w-full justify-between py-2' : ''}`}
      >
        <span>{label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`${isMobile ? 'relative' : 'absolute top-full left-0'} mt-2 bg-white rounded-md shadow-2xl overflow-hidden z-50 ${isMobile ? 'w-full' : 'min-w-52'} animate-fadeIn border border-gray-200`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-[#008080] hover:text-white transition-colors whitespace-nowrap border-b border-gray-100 last:border-b-0 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: 'Produkty',
      to: '/software',
      items: [
        { label: 'Software', to: '/software' },
        { label: 'PC zostavy', to: '/hardware/#custom-pc' },
        { label: 'Plotre', to: '/hardware#plotter' },
        { label: 'Skladačky výkresov', to: '/hardware#puzzle' },
        { label: 'Kancelársky materiál', to: '/hardware#office' }
      ]
    },
    {
      label: 'Služby',
      to: '/hardware',
      items: [
        { label: 'Školenia', to: '/hardware/workstations' },
        { label: 'Projekčná činnosť', to: '/hardware/graphics' },
        { label: 'Konštrukčná činnosť', to: '/hardware/peripherals' },
        { label: 'IT služby', to: '/hardware/storage' },
        { label: 'Technická podpora', to: '/tech/podpora' }
      ]
    },
    {
      label: 'Blog',
      to: '/blog',
      items: []
    },
    {
      label: 'O nás',
      to: '#o-nas',
      items: [
        { label: 'Kontakt', to: '/kontakt' },
        { label: 'Kariéra', to: '/o-nas/team' }
      ]
    }
  ];

  return (
    <header className="bg-[#191a1a] text-white py-4 px-6 z-50">
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
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navigationItems.map((item, index) => (
            <NavDropdown 
              key={index} 
              label={item.label} 
              items={item.items} 
              to={item.to}
              isMobile={false}
            />
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* E-shop Button */}
          <button className="bg-[#008080] text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
            E-shop
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-[#008080] rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-slate-700 animate-slideDown">
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item, index) => (
              <NavDropdown 
                key={index} 
                label={item.label} 
                items={item.items} 
                to={item.to}
                isMobile={true}
              />
            ))}
          </nav>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
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
            max-height: 1000px;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;