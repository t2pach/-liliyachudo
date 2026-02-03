import { Phone, Instagram, Send, MessageCircle, Heart, ChevronUp } from 'lucide-react';
import { companyInfo, services } from '@/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickServices = services.slice(0, 3);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Создаем незабываемые праздники с 2015 года. Доверьте нам ваше мероприятие — мы сделаем его особенным!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${companyInfo.socials.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://vk.ru/liliyachudo18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="VKontakte"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`https://t.me/${companyInfo.socials.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 md:mb-6">Услуги</h4>
            <ul className="space-y-3">
              {quickServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-brand-pink transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-brand-pink hover:text-brand-terracotta transition-colors text-left font-medium"
                >
                  Все услуги →
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4 md:mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-brand-pink transition-colors"
                >
                  О компании
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-brand-pink transition-colors"
                >
                  Услуги
                </button>
              </li>
              <li>
                <a
                  href="https://vk.ru/liliyachudo18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-pink transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-brand-pink transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 md:mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-pink transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-sm">
                  Работаем ежедневно<br />
                  с 9:00 до 21:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} {companyInfo.name}. Все права защищены.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-brand-pink fill-brand-pink" /> для вас
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink transition-colors"
            aria-label="Наверх"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
