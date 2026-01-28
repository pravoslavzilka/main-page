import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('všetky články');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Revolúcia v BIM: Ako AI mení budúcnosť projektovania',
      category: 'novinky',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      excerpt: 'Umelá inteligencia prináša nové možnosti do sveta BIM a CAD systémov.',
      date: '15. Jan 2026'
    },
    {
      id: 2,
      title: 'Top 5 CAD softwarov pre architektov v roku 2026',
      category: 'software',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
      excerpt: 'Prehľad najlepších nástrojov pre profesionálne architektonické projekty.',
      date: '12. Jan 2026'
    },
    {
      id: 3,
      title: 'Nový hardvér pre náročné 3D renderovanie',
      category: 'hardware',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=600&fit=crop',
      excerpt: 'Grafické karty a procesory, ktoré posúvajú hranice možností.',
      date: '10. Jan 2026'
    },
    {
      id: 4,
      title: 'Moderné projektovanie: Od náčrtu po realizáciu',
      category: 'projektovanie',
      image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&h=600&fit=crop',
      excerpt: 'Workflow moderného architekta využívajúceho najnovšie technológie.',
      date: '8. Jan 2026'
    },
    {
      id: 5,
      title: 'BIM Level 3: Čo prinesie plná digitalizácia?',
      category: 'novinky',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      excerpt: 'Budúcnosť stavebníctva sa opiera o kompletnú digitálnu transformáciu.',
      date: '5. Jan 2026'
    },
    {
      id: 6,
      title: 'Porovnanie licenčných modelov CAD softvérov',
      category: 'software',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      excerpt: 'Ako vybrať najvhodnejší licenčný model pre vašu firmu.',
      date: '3. Jan 2026'
    },
    {
      id: 7,
      title: 'Výkonné workstation stanice: Sprievodca výberom',
      category: 'hardware',
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&h=600&fit=crop',
      excerpt: 'Kľúčové parametre pri výbere pracovnej stanice pre CAD/BIM.',
      date: '1. Jan 2026'
    },
    {
      id: 8,
      title: 'Parametrické projektovanie: Výhody a výzvy',
      category: 'projektovanie',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop',
      excerpt: 'Ako parametrický prístup zjednodušuje komplexné architektonické riešenia.',
      date: '28. Dec 2025'
    },
    {
      id: 9,
      title: 'Cloudové CAD riešenia na vzostupe',
      category: 'software',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      excerpt: 'Výhody a nevýhody práce s CAD nástrojmi v cloude.',
      date: '25. Dec 2025'
    }
  ];

  const categories = [
    { id: 'všetky články', label: 'všetky články' },
    { id: 'novinky', label: 'novinky' },
    { id: 'software', label: 'software' },
    { id: 'hardware', label: 'hardware' },
    { id: 'projektovanie', label: 'projektovanie' }
  ];

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'všetky články' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#008080] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Zostaň s nami v obraze
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            o novinkách zo sveta CAD a BIM, ktoré ti pomôžu profesne rásť
          </p>
        </div>
      </header>

      {/* Categories and Search */}
      <div className="bg-white py-8 px-6 sticky top-0 z-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#008080] text-white shadow-lg scale-105'
                      : 'bg-[#86cccf]/30 text-[#191a1a] hover:bg-[#86cccf]/50 hover:scale-105'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#008080] w-5 h-5" />
              <input
                type="text"
                placeholder="hľadať"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-[#86cccf]/20 border-2 border-[#86cccf] text-[#191a1a] placeholder-[#008080]/60 focus:outline-none focus:border-[#008080] focus:bg-white transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-[#191a1a]/60">Nenašli sa žiadne články</p>
          </div>
        ) : (
          <>
            {/* Show "Najčítanejšie" section only when no search is active */}
            {!searchQuery && (
              <>
                {/* Najčítanejšie Badge */}
                <div className="mb-8">
                  <span className="inline-block bg-[#fbea01] text-[#191a1a] px-6 py-2 rounded-full font-bold text-lg">
                    Najčítanejšie
                  </span>
                </div>

                {/* Featured Posts - 2 side by side */}
                {filteredPosts.length >= 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {filteredPosts.slice(0, 2).map((post, index) => (
                      <article 
                        key={post.id} 
                        className="group cursor-pointer"
                      >
                        <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-4 bg-[#008080]/10">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 flex items-center justify-center p-6">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              <p className="text-white text-base leading-relaxed text-center">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="inline-block bg-[#5fa4a4] text-white px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <h3 className="text-[#191a1a] text-xl font-bold leading-tight group-hover:text-[#49a7b1] transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-[#191a1a]/60 text-sm">{post.date}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Regular Posts Grid */}
            {/* When searching, show all results. When not searching, skip first 2 posts */}
            {((searchQuery && filteredPosts.length > 0) || (!searchQuery && filteredPosts.length > 2)) && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(searchQuery ? filteredPosts : filteredPosts.slice(2)).map((post, index) => (
                  <article 
                    key={post.id} 
                    className="group cursor-pointer"
                    style={{ 
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` 
                    }}
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-4 bg-[#008080]/10">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 flex items-center justify-center p-6">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <p className="text-white text-base leading-relaxed text-center">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block bg-[#5fa4a4] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <h3 className="text-[#191a1a] text-xl font-bold leading-tight group-hover:text-[#49a7b1] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-[#191a1a]/60 text-sm">{post.date}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;