import React, { useState, useEffect } from 'react';

import Hero from '../components/home_page/Hero';
import Offer from '../components/home_page/Offer';
import Reasons from '../components/home_page/Reasons';
import Companies from '../components/home_page/Companies';
import Customers from '../components/home_page/Customers';
import Products from '../components/home_page/Products';
import Training from '../components/home_page/Training';
import Blog from '../components/home_page/Blog';

import { 
  ChevronDown, 
  Monitor, 
  HardDrive, 
  GraduationCap, 
  CheckCircle, 
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Presentation,
  Cog,
  Workflow,
  Users,
} from 'lucide-react';



const Home = () =>  {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const companies = [
    { name: 'Autodesk', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/autodesk.png' },
    { name: 'Trimble', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/trimble.png' },
    { name: 'Linear', logo: 'https://new.smartcad.sk/wp-content/uploads/2025/02/linear.png' },
    { name: 'Dell', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/dell.png' },
    { name: 'ESET', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/eset.png' },
    {name: 'GFI Software', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/gfi.png' },
    { name: 'HP', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/hp.png' },
    { name: 'Kerio', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/kerio.png' },
    { name: 'ROWE', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/rowe.png' },
    { name: 'SIGMA', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/sigma.png' },
    { name: 'Lenovo', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/lenovo.png' }
  ];

 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(companies.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [companies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(companies.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(companies.length / 4)) % Math.ceil(companies.length / 4));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}


      <Hero />
      
      <Offer />

    
      <Reasons />

      <Companies /> 
      
      <Customers />

      <Products />
      
      <Training />
      
      <Blog />

      {/* Contact CTA */}
      <section id="kontakt" className="py-20 px-6 bg-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Potrebujete pomoc s výberom správnych CAD nástrojov?</h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktujte našich expertov pre personalizované odporúčania a riešenia prispôsobené vašim potrebám.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              Rezervovať bezplatnú konzultáciu
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-600 transition-colors text-lg font-semibold">
              Kontaktovať nás
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Adresa</div>
              <div className="opacity-90">Bratislava, Slovensko</div>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Telefón</div>
              <div className="opacity-90">+421 2 1234 5678</div>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Email</div>
              <div className="opacity-90">info@smartcad.sk</div>
            </div>
          </div>
        </div>
      </section>

     
      
    </div>
  );
}

export default Home;