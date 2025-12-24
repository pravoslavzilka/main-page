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