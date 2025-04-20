"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "English" | "Arabic";

interface LanguageContextType {
  lang: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("English");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("Language") as Language;
      if (storedLang) {
        setLang(storedLang);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLang(lang);
    localStorage.setItem("Language", lang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
