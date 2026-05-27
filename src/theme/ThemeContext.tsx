import React, { createContext, useContext, useMemo } from 'react';
import { Theme, AppSettings } from '../types';

const THEMES: Record<string, Theme> = {
  darkGold: {
    id: 'darkGold',
    name: 'Dark Gold',
    colors: {
      background: '#000000',
      primary: '#FFCC00',
      navy: '#0B1B2B',
      marbleRed: '#6B0F0F',
      silver: '#C0C0C0',
      white: '#FFFFFF',
      muted: '#A0A0A0',
      glass: 'rgba(255,255,255,0.06)',
      elevatedShadow: 'rgba(0,0,0,0.6)',
    },
    fonts: { display: 'Inter', ui: 'Inter' },
  },
  navyMarble: {
    id: 'navyMarble',
    name: 'Navy Marble',
    colors: {
      background: '#0B1B2B',
      primary: '#FFD700',
      navy: '#1A2A3A',
      marbleRed: '#8B1A1A',
      silver: '#B0B0B0',
      white: '#F5F5F5',
      muted: '#808080',
      glass: 'rgba(255,255,255,0.08)',
      elevatedShadow: 'rgba(0,0,0,0.8)',
    },
    fonts: { display: 'Inter', ui: 'Inter' },
  },
  silverWhite: {
    id: 'silverWhite',
    name: 'Silver White',
    colors: {
      background: '#F8F8F8',
      primary: '#1A1A1A',
      navy: '#404040',
      marbleRed: '#A04040',
      silver: '#D0D0D0',
      white: '#FFFFFF',
      muted: '#707070',
      glass: 'rgba(0,0,0,0.05)',
      elevatedShadow: 'rgba(0,0,0,0.15)',
    },
    fonts: { display: 'Inter', ui: 'Inter' },
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const RADII = {
  sm: 8,
  md: 16,
  lg: 28,
  pill: 9999,
};

export const MOTION = {
  fast: 120,
  normal: 220,
  slow: 400,
  screenTransition: 500,
};

interface ThemeContextType {
  theme: Theme;
  settings: AppSettings;
  updateTheme: (themeId: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = React.useState<AppSettings>({
    themeId: 'darkGold',
    fontFamily: 'Inter',
    reduceMotion: false,
    analyticsEnabled: true,
  });

  const theme = useMemo(() => THEMES[settings.themeId] || THEMES.darkGold, [settings.themeId]);

  const updateTheme = (themeId: string) => {
    setSettings((prev) => ({ ...prev, themeId }));
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <ThemeContext.Provider value={{ theme, settings, updateTheme, updateSettings }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
