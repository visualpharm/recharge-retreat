'use client';

import React, { createContext, useContext } from 'react';

interface TranslationContextType {
  locale: string;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ 
  children, 
  locale, 
  messages 
}: { 
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ locale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}