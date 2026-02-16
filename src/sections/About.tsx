import { useEffect, useRef, useState } from 'react';
import { Award, Target, Heart, Zap } from 'lucide-react';
import { advantages, companyInfo } from '@/mock';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Target,
  Heart,
  Zap
};

const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  label 
}: { 
  value: number; 
  suffix?: string;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window)
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const observerInstance = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after intersection is detected
          observerInstance.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observerInstance.observe(ref.current);
    }

    return () => observerInstance.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let timerRef: ReturnType<typeof setInterval> | null = null;

    timerRef = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        if (timerRef) clearInterval(timerRef);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => {
      if (timerRef) clearInterval(timerRef);
    };
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-pink mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600">{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-2 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-50 text-brand-terracotta rounded-full text-sm font-semibold mb-4">
            О компании
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {companyInfo.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-20">
          <AnimatedCounter value={1500} suffix="+" label="мероприятий" />
          <AnimatedCounter value={15000} suffix="+" label="довольных клиентов" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-pink mb-2">
              <span className="inline-flex items-center gap-2">
                <Award className="w-8 h-8 md:w-12 md:h-12" />
              </span>
            </div>
            <div className="text-sm md:text-base text-gray-600">команда профессионалов</div>
          </div>
        </div>

        {/* Advantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((advantage, index) => {
            const IconComponent = iconMap[advantage.icon];
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-brand-pink to-brand-terracotta text-white flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent className="w-7 h-7 md:w-8 md:h-8" />}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Готовы создать для вас незабываемый праздник!
          </p>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
