/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Globe, 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Calendar, 
  ShoppingCart, 
  PenTool, 
  Package, 
  Monitor, 
  Briefcase,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Language = 'ja' | 'en';
type Theme = 'light' | 'dark';

const translations = {
  ja: {
    companyName: 'TF合同会社',
    tagline: 'グローバルな視点で、日常に彩りと利便性を。',
    heroTitle: '貿易から日用品まで、幅広いニーズに応えるパートナー',
    heroDesc: 'TF合同会社は、輸出入代行、インターネット販売、文房具・日用品の提供を通じて、お客様のビジネスと生活をサポートします。',
    services: '事業内容',
    serviceList: [
      { title: '貿易・輸出入代行', desc: '輸出入代行業務およびそれらの仲介、コンサルティング。', icon: Globe },
      { title: 'インターネット販売', desc: 'インターネットを利用した各種物品の販売。', icon: ShoppingCart },
      { title: '文房具卸売・小売', desc: '高品質な文房具の卸売および販売。', icon: PenTool },
      { title: '日用雑貨販売', desc: '一般日用雑貨品の販売。', icon: Package },
      { title: '事務用機器販売', desc: '事務用機械器具の販売。', icon: Monitor },
    ],
    companyInfo: '会社概要',
    infoItems: [
      { label: '商号', value: 'TF合同会社', icon: Briefcase },
      { label: '本店所在地', value: '大阪府大阪市浪速区桜川二丁目1番9-507号', icon: MapPin },
      { label: '設立年月日', value: '令和8年3月17日', icon: Calendar },
      { label: '代表者', value: '藤本 結月', icon: User },
      { label: '資本金', value: '10万円', icon: Package },
    ],
    contact: 'お問い合わせ',
    contactDesc: 'サービスに関するお問い合わせはこちらから。',
    email: 'info@tfgoods.jp',
    phone: '06-7165-6278',
    footer: '© 2026 TF合同会社. All rights reserved.'
  },
  en: {
    companyName: 'TF LLC',
    tagline: 'Bringing color and convenience to daily life from a global perspective.',
    heroTitle: 'Your Partner for Diverse Needs, from Trade to Daily Goods',
    heroDesc: 'TF LLC supports your business and lifestyle through import/export agency, e-commerce, and the provision of stationery and daily necessities.',
    services: 'Our Services',
    serviceList: [
      { title: 'Trade & Import/Export', desc: 'Import/export agency business, mediation, and consulting.', icon: Globe },
      { title: 'E-commerce', desc: 'Sales of various goods using the internet.', icon: ShoppingCart },
      { title: 'Stationery Wholesale/Retail', desc: 'Wholesale and retail of high-quality stationery.', icon: PenTool },
      { title: 'Daily Sundries', desc: 'Sales of general daily household goods.', icon: Package },
      { title: 'Office Equipment', desc: 'Sales of office machinery and equipment.', icon: Monitor },
    ],
    companyInfo: 'Company Profile',
    infoItems: [
      { label: 'Trade Name', value: 'TF LLC', icon: Briefcase },
      { label: 'Headquarters', value: 'Sakuragawa 2-1-9-507, Naniwa-ku, Osaka-shi, Osaka', icon: MapPin },
      { label: 'Established', value: 'March 17, 2026', icon: Calendar },
      { label: 'Representative', value: 'Yuzuki Fujimoto', icon: User },
      { label: 'Capital', value: '100,000 JPY', icon: Package },
    ],
    contact: 'Contact Us',
    contactDesc: 'Please feel free to reach out for any inquiries regarding our services.',
    email: 'info@tfgoods.jp',
    phone: '06-7165-6278',
    footer: '© 2026 TF LLC. All rights reserved.'
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('ja');
  const [theme, setTheme] = useState<Theme>('light');
  const t = translations[lang];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLang = () => setLang(lang === 'ja' ? 'en' : 'ja');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white dark:text-black font-bold">TF</div>
            <span className="font-bold text-xl tracking-tight uppercase">{t.companyName}</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-2 text-sm font-medium"
              aria-label="Toggle Language"
            >
              <Globe className="w-5 h-5 text-accent" />
              <span className="uppercase">{lang === 'ja' ? 'EN' : 'JP'}</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-accent" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-accent uppercase bg-accent-soft rounded-none border border-accent/20">
              EST. 2026
            </span>
            <h1 className="text-4xl sm:text-7xl font-black tracking-tighter mb-6 uppercase">
              {t.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-3xl mx-auto mb-10 font-medium">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#services" className="px-10 py-4 bg-accent text-white dark:text-black font-bold rounded-none hover:opacity-90 transition-all shadow-lg shadow-accent/10">
                {t.services}
              </a>
              <a href="#contact" className="px-10 py-4 bg-transparent text-black dark:text-white font-bold rounded-none border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                {t.contact}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">{t.services}</h2>
            <div className="w-24 h-2 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-black dark:border-white">
            {t.serviceList.map((service, index) => (
              <motion.div
                key={index}
                className="p-10 bg-white dark:bg-black border border-black/5 dark:border-white/5 hover:border-accent/50 transition-all group relative overflow-hidden"
              >
                <div className="w-12 h-12 bg-accent-soft rounded-none flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white dark:group-hover:text-black transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-black/60 dark:text-white/60 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white dark:bg-white dark:text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">{t.companyInfo}</h2>
              <div className="space-y-8">
                {t.infoItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-6 border-b border-white/10 dark:border-black/10 pb-6">
                    <div className="mt-1 p-2 bg-accent/20 rounded-none">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white/40 dark:text-black/40 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="text-xl font-bold tracking-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 dark:bg-black/5 border-4 border-white dark:border-black flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-[12rem] font-black text-accent/5 leading-none select-none absolute inset-0 flex items-center justify-center">TF</div>
                  <p className="text-3xl font-black uppercase tracking-tighter relative z-10 leading-tight">
                    {t.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">{t.contact}</h2>
          <p className="text-xl text-black/60 dark:text-white/60 mb-16 font-medium">
            {t.contactDesc}
          </p>
          <div className="grid sm:grid-cols-2 gap-0 border-2 border-black dark:border-white">
            <a 
              href={`mailto:${t.email}`}
              className="p-12 bg-white dark:bg-black flex flex-col items-center gap-6 group hover:bg-accent-soft transition-all border-r border-black dark:border-white"
            >
              <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white dark:group-hover:text-black transition-colors">
                <Mail className="w-8 h-8 text-accent group-hover:text-white dark:group-hover:text-black" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-black/40 dark:text-white/40">EMAIL</p>
                <p className="text-xl font-bold group-hover:text-accent transition-colors">{t.email}</p>
              </div>
            </a>
            <a 
              href={`tel:${t.phone.replace(/-/g, '')}`}
              className="p-12 bg-white dark:bg-black flex flex-col items-center gap-6 group hover:bg-accent-soft transition-all"
            >
              <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white dark:group-hover:text-black transition-colors">
                <Phone className="w-8 h-8 text-accent group-hover:text-white dark:group-hover:text-black" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-black/40 dark:text-white/40">PHONE</p>
                <p className="text-xl font-bold group-hover:text-accent transition-colors">{t.phone}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t-4 border-black dark:border-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-none flex items-center justify-center text-white dark:text-black font-black text-xl">TF</div>
            <span className="font-black text-2xl tracking-tighter uppercase">{t.companyName}</span>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
