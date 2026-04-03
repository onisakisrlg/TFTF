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
    email: 'メールアドレス (準備中)',
    phone: '電話番号 (準備中)',
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
    email: 'Email (Coming Soon)',
    phone: 'Phone (Coming Soon)',
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
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">TF</div>
            <span className="font-bold text-xl tracking-tight">{t.companyName}</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm font-medium"
              aria-label="Toggle Language"
            >
              <Globe className="w-5 h-5" />
              <span className="uppercase">{lang === 'ja' ? 'EN' : 'JP'}</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
              Established 2026
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400">
              {t.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#services" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
                {t.services}
              </a>
              <a href="#contact" className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                {t.contact}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.services}</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.serviceList.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">{t.companyInfo}</h2>
              <div className="space-y-6">
                {t.infoItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                      <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-lg font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-indigo-600/5 dark:bg-indigo-400/5 rounded-3xl flex items-center justify-center p-12 border border-indigo-100 dark:border-indigo-900/30">
                <div className="text-center">
                  <div className="text-8xl font-black text-indigo-600/10 dark:text-indigo-400/10 mb-4 select-none">TF</div>
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 italic">
                    "{t.tagline}"
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-600/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t.contact}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            {t.contactDesc}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-4 group hover:border-indigo-500 transition-colors cursor-not-allowed">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                <Mail className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </div>
              <span className="font-medium text-slate-500">{t.email}</span>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-4 group hover:border-indigo-500 transition-colors cursor-not-allowed">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                <Phone className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </div>
              <span className="font-medium text-slate-500">{t.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-bold">TF</div>
            <span className="font-bold">{t.companyName}</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
