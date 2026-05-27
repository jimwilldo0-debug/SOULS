// Theme and Design System Types
export interface ThemeColors {
  background: string;
  primary: string;
  navy: string;
  marbleRed: string;
  silver: string;
  white: string;
  muted: string;
  glass: string;
  elevatedShadow: string;
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
  fonts: {
    display: string;
    ui: string;
  };
}

// User & Auth
export interface User {
  id: string;
  email: string;
  displayName: string;
  dob?: string;
  verified: boolean;
  createdAt: string;
}

export interface AuthState {
  token?: string;
  user?: User;
  isLoading: boolean;
  error?: string;
}

// Post & Assets
export interface Layer {
  id: string;
  type: 'sticker' | 'gif' | 'text';
  assetId?: string;
  text?: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  zIndex: number;
}

export interface Post {
  id: string;
  userId: string;
  imageId: string;
  layers: Layer[];
  caption?: string;
  tags: string[];
  location?: {
    name: string;
    latitude: number;
    longitude: number;
  };
  isWidgetReady: boolean;
  visibility: 'private' | 'friends' | 'public';
  createdAt: string;
}

export interface Asset {
  id: string;
  type: 'sticker' | 'gif' | 'icon';
  category: string;
  tags: string[];
  srcUrl: string;
  variants?: {
    thumb?: string;
    medium?: string;
    full?: string;
  };
}

// App Settings
export interface AppSettings {
  themeId: string;
  fontFamily: string;
  reduceMotion: boolean;
  analyticsEnabled: boolean;
}

export interface WidgetSettings {
  selectedPostIds: string[];
  layout: 'compact' | 'detailed';
  refreshInterval: number; // minutes
  overlayOpacity: number;
}
