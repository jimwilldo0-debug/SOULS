import { Asset } from '../types';

// Mock sticker catalog - in production, this would be fetched from your backend
export const STICKER_CATALOG: Record<string, Asset[]> = {
  emoji: [
    {
      id: 'emoji-party',
      type: 'sticker',
      category: 'emoji',
      tags: ['celebration', 'fun'],
      srcUrl: '🎉',
    },
    {
      id: 'emoji-fire',
      type: 'sticker',
      category: 'emoji',
      tags: ['hot', 'trending'],
      srcUrl: '🔥',
    },
    {
      id: 'emoji-heart',
      type: 'sticker',
      category: 'emoji',
      tags: ['love', 'heart'],
      srcUrl: '❤️',
    },
    {
      id: 'emoji-star',
      type: 'sticker',
      category: 'emoji',
      tags: ['star', 'favorite'],
      srcUrl: '⭐',
    },
  ],
  drinks: [
    {
      id: 'drink-champagne',
      type: 'sticker',
      category: 'drinks',
      tags: ['champagne', 'alcoholic', 'celebration'],
      srcUrl: '🍾',
    },
    {
      id: 'drink-wine',
      type: 'sticker',
      category: 'drinks',
      tags: ['wine', 'alcoholic'],
      srcUrl: '🍷',
    },
    {
      id: 'drink-cocktail',
      type: 'sticker',
      category: 'drinks',
      tags: ['cocktail', 'alcoholic', 'mixed'],
      srcUrl: '🍹',
    },
    {
      id: 'drink-beer',
      type: 'sticker',
      category: 'drinks',
      tags: ['beer', 'alcoholic'],
      srcUrl: '🍺',
    },
    {
      id: 'drink-coffee',
      type: 'sticker',
      category: 'drinks',
      tags: ['coffee', 'non-alcoholic', 'hot'],
      srcUrl: '☕',
    },
    {
      id: 'drink-tea',
      type: 'sticker',
      category: 'drinks',
      tags: ['tea', 'non-alcoholic', 'hot'],
      srcUrl: '🫖',
    },
    {
      id: 'drink-juice',
      type: 'sticker',
      category: 'drinks',
      tags: ['juice', 'non-alcoholic', 'fresh'],
      srcUrl: '🧃',
    },
  ],
  food: [
    {
      id: 'food-pizza',
      type: 'sticker',
      category: 'food',
      tags: ['pizza', 'fast-food', 'italian'],
      srcUrl: '🍕',
    },
    {
      id: 'food-burger',
      type: 'sticker',
      category: 'food',
      tags: ['burger', 'fast-food', 'american'],
      srcUrl: '🍔',
    },
    {
      id: 'food-sushi',
      type: 'sticker',
      category: 'food',
      tags: ['sushi', 'japanese', 'fine-dining'],
      srcUrl: '🍣',
    },
    {
      id: 'food-pasta',
      type: 'sticker',
      category: 'food',
      tags: ['pasta', 'italian', 'dinner'],
      srcUrl: '🍝',
    },
    {
      id: 'food-tacos',
      type: 'sticker',
      category: 'food',
      tags: ['tacos', 'mexican', 'street-food'],
      srcUrl: '🌮',
    },
    {
      id: 'food-dessert',
      type: 'sticker',
      category: 'food',
      tags: ['dessert', 'sweet', 'cake'],
      srcUrl: '🍰',
    },
    {
      id: 'food-salad',
      type: 'sticker',
      category: 'food',
      tags: ['salad', 'healthy', 'fresh'],
      srcUrl: '🥗',
    },
  ],
  cigarettes: [
    {
      id: 'cigarette-smoke',
      type: 'sticker',
      category: 'cigarettes',
      tags: ['cigarette', 'smoke', 'lifestyle'],
      srcUrl: '🚬',
    },
  ],
  locations: [
    {
      id: 'location-bar',
      type: 'sticker',
      category: 'locations',
      tags: ['bar', 'nightlife', 'social'],
      srcUrl: '🍸',
    },
    {
      id: 'location-restaurant',
      type: 'sticker',
      category: 'locations',
      tags: ['restaurant', 'dining', 'food'],
      srcUrl: '🍽️',
    },
    {
      id: 'location-map',
      type: 'sticker',
      category: 'locations',
      tags: ['map', 'location', 'place'],
      srcUrl: '📍',
    },
  ],
};

// Search stickers by category and query
export const searchStickers = (category?: string, query?: string): Asset[] => {
  let results: Asset[] = [];

  if (category && STICKER_CATALOG[category]) {
    results = STICKER_CATALOG[category];
  } else {
    results = Object.values(STICKER_CATALOG).flat();
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (asset) =>
        asset.tags?.some((tag) => tag.includes(q)) ||
        asset.category?.includes(q)
    );
  }

  return results;
};

// Get all categories
export const getCategories = (): string[] => {
  return Object.keys(STICKER_CATALOG);
};
