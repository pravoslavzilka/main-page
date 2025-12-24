import React, { useState, useEffect } from 'react';

import Hero from '../components/home_page/Hero';
import Offer from '../components/home_page/Offer';
import Reasons from '../components/home_page/Reasons';
import Companies from '../components/home_page/Companies';
import Customers from '../components/home_page/Customers';
import Products from '../components/home_page/Products';
import Training from '../components/home_page/Training';

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

  const blogPosts = [
    {
      id: 1,
      title: 'Nové funkcie v AutoCAD 2025: Čo potrebujete vedieť',
      excerpt: 'Objavte najnovšie funkcie a vylepšenia v AutoCAD 2025, ktoré zvýšia vašu produktivitu a zjednodušia pracovný tok.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '15. január 2025',
      category: 'Software'
    },
    {
      id: 2,
      title: 'Ako vybrať správnu CAD pracovnú stanicu',
      excerpt: 'Kompletný sprievodca výberom hardvéru pre CAD aplikácie. Tipy a odporúčania od našich expertov.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '10. január 2025',
      category: 'Hardvér'
    },
    {
      id: 3,
      title: 'BIM v stavebníctve: Trendy a príležitosti',
      excerpt: 'Prečo je BIM budúcnosťou stavebníctva a ako sa na ňu pripraviť. Praktické rady a príklady implementácie.',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '5. január 2025',
      category: 'BIM'
    }
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
      

      {/* Blog Posts Preview */}
      <section id="blog" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Najnovšie z nášho blogu</h2>
            <p className="text-xl text-gray-600">
              Tipy, trendy a novinky zo sveta CAD technológií
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center">
                    Čítať viac <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
              Zobraziť všetky články
            </button>
          </div>
        </div>
      </section>

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