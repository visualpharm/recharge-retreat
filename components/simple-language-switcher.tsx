'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'es', name: 'Español', flag: '🇦🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' }
];

export default function SimpleLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Detect current locale from pathname
  const currentLocale = pathname.startsWith('/en') ? 'en' : 
                       pathname.startsWith('/pt') ? 'pt' : 'es';
  
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    setIsOpen(false);
    
    // Set cookie to remember language preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=lax`;
    
    // Simple approach: reload the page and let middleware handle routing
    window.location.href = newLocale === 'es' ? '/' : `/${newLocale}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-accent"
        aria-label="Select language"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-background border border-border rounded-lg shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                language.code === currentLocale
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent text-foreground/80 hover:text-foreground'
              }`}
            >
              <span className="text-base">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}