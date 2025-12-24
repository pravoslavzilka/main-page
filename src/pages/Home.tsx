import React, { useState, useEffect } from 'react';

import Hero from '../components/home_page/Hero';
import Offer from '../components/home_page/Offer';
import Reasons from '../components/home_page/Reasons';
import Companies from '../components/home_page/Companies';
import Customers from '../components/home_page/Customers';
import Products from '../components/home_page/Products';
import Training from '../components/home_page/Training';
import Blog from '../components/home_page/Blog';
import Contact from '../components/home_page/Contact';




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

      <Contact />
      

     
      
    </div>
  );
}

export default Home;