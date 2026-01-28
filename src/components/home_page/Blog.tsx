import { 

  ArrowRight,

} from 'lucide-react';

const Blog = () => {

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

    return (
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
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#008080] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center mt-auto">
                    Čítať viac <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#008080] text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
              Zobraziť všetky články
            </button>
          </div>
        </div>
      </section>
    );

}

export default Blog;