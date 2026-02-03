import { useState } from 'react';
import { Phone, Instagram, Send, MessageCircle, ExternalLink } from 'lucide-react';
import { companyInfo } from '@/mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Заявка отправлена! Мы свяжемся с вами в течение 15 минут.');
    setFormData({ name: '', phone: '', eventType: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Instagram',
      handle: companyInfo.socials.instagram,
      url: `https://instagram.com/${companyInfo.socials.instagram.replace('@', '')}`,
      icon: Instagram,
      color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white'
    },
    {
      name: 'VKontakte',
      handle: 'vk.ru/liliyachudo18',
      url: 'https://vk.ru/liliyachudo18',
      icon: MessageCircle,
      color: 'hover:bg-blue-500 hover:text-white'
    },
    {
      name: 'Telegram',
      handle: companyInfo.socials.telegram,
      url: `https://t.me/${companyInfo.socials.telegram.replace('@', '')}`,
      icon: Send,
      color: 'hover:bg-sky-500 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-3 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-brand-blue rounded-full text-sm font-semibold mb-4">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Свяжитесь с <span className="text-gradient">нами</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и мы ответим вам в течение 15 минут
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Оставить заявку
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Тип мероприятия
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all bg-white"
                >
                  <option value="">Выберите тип мероприятия</option>
                  <option value="birthday">День рождения</option>
                  <option value="wedding">Свадьба / Юбилей</option>
                  <option value="corporate">Корпоратив / Тимбилдинг</option>
                  <option value="graduation">Выпускной</option>
                  <option value="gender">Гендер-пати</option>
                  <option value="thematic">Тематическая вечеринка</option>
                  <option value="gameshow">Игровое шоу</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all resize-none"
                  placeholder="Расскажите подробнее о вашем мероприятии..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Отправка...
                  </span>
                ) : (
                  'Отправить заявку'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <a 
                    href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                    className="text-xl md:text-2xl font-bold text-gray-900 hover:text-brand-pink transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Звоните или пишите в мессенджеры — мы на связи с 9:00 до 21:00
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Мы в социальных сетях</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl border border-gray-100 transition-all duration-300 ${social.color}`}
                    >
                      <IconComponent className="w-6 h-6" />
                      <div className="flex-1">
                        <p className="font-semibold">{social.name}</p>
                        <p className="text-sm text-gray-500">{social.handle}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Reviews Link */}
            <a
              href="https://vk.ru/liliyachudo18"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-brand-pink to-brand-terracotta rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 text-white hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Отзывы наших клиентов</h4>
                  <p className="text-white/80 text-sm md:text-base">
                    Более 15000 довольных клиентов — читайте отзывы в VK
                  </p>
                </div>
                <ExternalLink className="w-6 h-6 flex-shrink-0" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
