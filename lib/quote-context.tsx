'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface QuoteContextType {
  isQuoteOpen: boolean;
  setIsQuoteOpen: (open: boolean) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <QuoteContext.Provider value={{ isQuoteOpen, setIsQuoteOpen }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    // Return default values if not in provider (e.g., during SSR)
    return {
      isQuoteOpen: false,
      setIsQuoteOpen: () => {},
    };
  }
  return context;
}