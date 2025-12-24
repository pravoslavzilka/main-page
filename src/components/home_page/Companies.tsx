

const Companies = () => {

    
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

    return (
        <section className="py-20 px-0 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Spolupracujeme so silnými spoločnosťami</h2>
        <p className="text-xl text-gray-600">
          Naši dôveryhodní partneri a dodávatelia technológií
        </p>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="w-full">
          <div
            className="flex items-center gap-16 animate-company-scroll"
            style={{ width: 'max-content' }}
          >
            {[...companies, ...companies].map((company, idx) => (
              <div key={idx} className="flex items-center justify-center ">
                <img src={company.logo} alt={company.name} className="h-32 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>    
      </div>
      <style>
        {`
          @keyframes company-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-company-scroll {
            animation: company-scroll 40s linear infinite;
          }
        `}
      </style>
    </section>
    );
}


export default Companies;