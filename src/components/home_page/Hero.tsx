import { 
  ChevronDown, 
  ArrowRight,

} from 'lucide-react';



const Hero = () => {
    return (
        
            <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Replace image background with video */}
                <video
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                src="/images/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                />
                
                <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    Zlepšite svoj CAD workflow 
                    <br />
                    <span className="text-teal-300 text-5xl">expertnými nástrojmi a podporou</span>
                </h1>
                
                <p className="text-xl lg:text-2xl mb-12 text-[#86cccf] max-w-3xl mx-auto">
                    SmartCAD je váš dôveryhodný partner pre CAD softvér, hardvér a školenia na Slovensku
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-[#008080] text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors text-lg font-semibold flex items-center">
                    Prehliadnuť CAD riešenia
                    <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold">


                    Požiadať o konzultáciu


                    </button>
                    
                </div>
                
                
                </div>

                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-12 h-12 text-white" style={{ marginTop: "40px", marginBottom: "30px"}} />
                </div>
            </section>


    );
}


export default Hero;