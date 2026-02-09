import { useEffect, useRef } from 'react';
import { Phone, Sparkles, ChevronDown } from 'lucide-react';
import { stats, companyInfo } from '@/mock';

const Hero = () => {
  const patternRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (patternRef.current) {
            const scrollY = window.scrollY;
            patternRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-1">
      {/* Animated Background Pattern */}
      <div 
        ref={patternRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 20, 147, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.05) 0%, transparent 35%),
            radial-gradient(circle at 60% 70%, rgba(0, 191, 255, 0.05) 0%, transparent 35%)
          `,
        }}
      />

      {/* Decorative Floating Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-pink/5 animate-float hidden lg:block" />
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-brand-gold/10 animate-float-slow hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-brand-blue/10 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side - Photo & Badge */}
          <div className="flex-shrink-0 relative">
            <div className="relative">
              {/* Photo Frame with Glow */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-pink via-brand-terracotta to-brand-gold opacity-20 blur-xl animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="/liliya-photo.jpg"
                    alt="Лилия Чудо"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="%23fff5f8"/><text x="100" y="130" text-anchor="middle" font-size="80" fill="%23ff1493">Л</text></svg>';
                    }}
                  />
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white rounded-2xl shadow-lg px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 animate-float">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-brand-pink" />
                <span className="text-xs md:text-sm font-bold text-gray-800">13+ лет</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Brand Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6">
              <span className="text-gradient">{companyInfo.name}</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-4 md:mb-6">
              Создаем незабываемые праздники и волшебные моменты
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10">
              Профессиональная организация мероприятий. Превратим любое событие в яркое и запоминающееся мероприятие!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-base md:text-lg"
              >
                <Phone className="w-5 h-5" />
                Заказать праздник
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-outline text-base md:text-lg"
              >
                <Sparkles className="w-5 h-5" />
                Наши услуги
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-pink">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('services')}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
          aria-label="Прокрутить вниз"
        >
          <ChevronDown className="w-6 h-6 text-brand-pink" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
