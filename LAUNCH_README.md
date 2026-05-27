# SOULS — Launch Ready Guide

**SOULS** is a luxury social-lifestyle mobile app for creating, customizing, and sharing visually rich lifestyle moments. This guide covers setup, development, and deployment for the complete mobile + backend stack.

---

## 📋 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Docker & Docker Compose (for backend)
- Xcode (macOS) or Android Studio (for mobile development)

---

## 🚀 Project Structure

```
SOULS/
├── app.json                 # Expo configuration
├── App.tsx                  # Main app entry
├── package.json             # Frontend deps
├── src/
│   ├── screens/             # Core screens (Welcome, Capture, Edit, Settings)
│   ├── components/          # Reusable UI components
│   ├── services/            # API client
│   ├── store/               # State management (Zustand)
│   ├── theme/               # Theme & design tokens
│   ├── types/               # TypeScript types
│   └── data/                # Sticker catalog, mock data
├── backend/
│   ├── src/
│   │   └── index.ts         # Express API server
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── .env.example
├── docker-compose.yml       # Local dev environment
├── design-tokens.json       # Design system tokens
├── SPEC.md                  # Product spec summary
├── SPEC_FULL.md             # Expanded product spec
├── API_SPEC.md              # API documentation
├── data-models.json         # Data model schemas
└── IMPLEMENTATION_ROADMAP.md # Roadmap & milestones
```

---

## 📱 Frontend Setup (Expo React Native)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create `.env` in project root:
```bash
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENV=development
```

### 3. Start Development Server
```bash
npm start
```

Then choose your platform:
- **iOS (macOS only)**: Press `i`
- **Android**: Press `a` (requires Android Studio running)
- **Web**: Press `w` (if testing in browser)

### 4. Explore the App
1. **Welcome Screen**: Sign up or sign in
2. **Capture Screen**: Take or select a photo
3. **Edit Screen**: Add stickers, tags, caption
4. **Settings Screen**: Switch themes and fonts

---

## 🔧 Backend Setup

### 1. Start Services (Docker Compose)
```bash
docker-compose up -d
```

This starts:
- PostgreSQL (port 5432)
- Redis (port 6379)
- Node.js API (port 3000)

### 2. Verify Backend is Running
```bash
curl http://localhost:3000/health
# Expected: {"status":"ok","timestamp":"2026-05-26T..."}
```

### 3. View Logs
```bash
docker-compose logs -f backend
```

### 4. Install Backend Dependencies (if not using Docker)
```bash
cd backend
npm install
npm run dev
```

---

## 🎨 Design System & Theming

**Design tokens** are in `design-tokens.json`:
- **Colors**: Dark (#000000), Gold (#FFCC00), Navy, Marble Red, Silver, White
- **Typography**: Inter font family for display and UI
- **Spacing**: 8pt base unit
- **Motion**: Spring easing, 120–600ms transitions

**Apply themes in the app**:
- Settings → Appearance → Choose theme
- Available themes: Dark Gold, Navy Marble, Silver White

---

## 🔐 Authentication Flow

1. **Sign Up**: Email + password + display name
2. **Sign In**: Email + password
3. **Verification**: Email verification (mock for now)
4. **JWT Token**: Stored in device secure storage
5. **Auto Logout**: On token expiration

---

## 📸 Core Features

### Capture
- Camera mode with flash & front/back toggle
- Gallery picker with pinch-to-zoom
- Crop and frame with presets (1:1, Story 9:16, Widget)
- Widget-ready mode for home screen

### Edit
- Sticker picker with categories (Emoji, Drinks, Food, Cigarettes, Locations)
- Layer management (add, remove, reorder)
- Drag, scale, rotate, flip interactions
- Caption with style options (font, size, color, shadow)
- Tagging system for lifestyle metadata

### Share
- Instagram Stories (prepares image + metadata)
- Threads (creates share-ready post)
- Save to in-app collections

### Settings
- Theme switcher with live preview
- Font selection
- Accessibility (reduce motion)
- Privacy & analytics toggles

---

## 🗂️ Asset Catalog

Stickers and GIFs are in `src/data/stickerCatalog.ts`:

```typescript
// Categories:
- emoji: Party, Fire, Heart, Star
- drinks: Champagne, Wine, Cocktail, Beer, Coffee, Tea, Juice
- food: Pizza, Burger, Sushi, Pasta, Tacos, Dessert, Salad
- cigarettes: Smoke
- locations: Bar, Restaurant, Map

// Search example:
searchStickers('drinks', 'champagne')
// Returns drink stickers matching "champagne"
```

To add more stickers, edit the catalog or fetch from backend API.

---

## 🔌 API Integration

Base URL: `http://localhost:3000/api`

### Key Endpoints

**Auth**:
- `POST /auth/signup` - Register new user
- `POST /auth/signin` - Login
- `POST /auth/verify` - Verify email token

**Media**:
- `POST /upload/image` - Upload image (multipart/form-data)

**Posts**:
- `POST /posts` - Create post
- `GET /posts/:id` - Get post
- `GET /users/saved` - Get user's saved posts

**Sharing**:
- `POST /share/instagram` - Prepare for Instagram Stories
- `POST /share/threads` - Prepare for Threads

**Settings**:
- `GET /users/settings` - Get user preferences
- `PUT /users/settings` - Update preferences

See `API_SPEC.md` for complete endpoint documentation.

---

## 🧪 Testing

### Frontend Tests
```bash
npm test
```

### Backend Tests
```bash
cd backend
npm test
```

---

## 📦 Building for Production

### Frontend (Expo)

**Build APK (Android)**:
```bash
expo build:android -t apk
```

**Build IPA (iOS)**:
```bash
expo build:ios
```

**Web**:
```bash
npm run build:web
```

### Backend

**Build Docker Image**:
```bash
docker build -f backend/Dockerfile -t souls-backend:latest .
```

**Push to Registry**:
```bash
docker tag souls-backend:latest your-registry/souls-backend:latest
docker push your-registry/souls-backend:latest
```

---

## 🚢 Deployment

### Option 1: Vercel (Frontend) + Railway/Heroku (Backend)

**Frontend**:
```bash
npm install -g vercel
vercel
```

**Backend**:
```bash
# Connect GitHub repo to Railway or Heroku
# Set environment variables
# Deploy
```

### Option 2: Docker on AWS ECS, GCP Cloud Run, or DigitalOcean

**Build & Deploy**:
```bash
docker-compose up -d
# Your app now runs on port 3000
```

---

## 🛡️ Security Checklist

- [ ] Change JWT_SECRET in production
- [ ] Enable HTTPS everywhere
- [ ] Use secure database credentials
- [ ] Add rate limiting to API endpoints
- [ ] Implement CORS properly (allow only your frontend domain)
- [ ] Add input validation and sanitization
- [ ] Use secure image storage (S3, Cloudinary, etc.)
- [ ] Set up error monitoring (Sentry, LogRocket)
- [ ] Implement age gating for restricted content

---

## 📊 Analytics & Monitoring

Events tracked (with user consent):
- `onboarding.completed` — Theme selection
- `capture.taken` — Photo captured
- `editor.opened` — Edit flow started
- `sticker.added` — Sticker placed
- `share.completed` — Post shared

Add your analytics provider (Firebase, Mixpanel, Amplitude) in `src/services/analytics.ts`.

---

## 🎯 Next Steps (Roadmap)

**Phase 1 (Now)**: MVP launch with core features ✅

**Phase 2 (2–4 weeks)**:
- GIF integration (GIPHY)
- Advanced sticker packs
- Location search
- Moderation primitives

**Phase 3 (4–8 weeks)**:
- In-app feed & explore
- Social graph (follow, likes)
- Cloud sync & backup
- Accessibility polish

---

## 🐛 Troubleshooting

### App won't start
```bash
# Clear cache
expo start --clear

# Reinstall dependencies
rm -rf node_modules
npm install
```

### Backend connection error
```bash
# Check if backend is running
curl http://localhost:3000/health

# Restart Docker
docker-compose restart backend
```

### Image upload fails
- Check file size < 10MB
- Ensure proper S3 credentials in .env
- Verify multipart form data encoding

### Theme not applying
- Clear AsyncStorage: In Settings, tap "Reset Data"
- Check `useTheme()` hook is inside `ThemeProvider`

---

## 📚 Documentation

- [Product Spec](./SPEC_FULL.md)
- [API Documentation](./API_SPEC.md)
- [Data Models](./data-models.json)
- [Design Tokens](./design-tokens.json)
- [Implementation Roadmap](./IMPLEMENTATION_ROADMAP.md)

---

## 🤝 Contributing

1. Clone repo
2. Create feature branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m "feat: add my feature"`
4. Push: `git push origin feature/my-feature`
5. Open PR

---

## 📝 License

SOULS © 2026. Proprietary.

---

## 🆘 Support

For issues:
1. Check [Troubleshooting](#-troubleshooting) above
2. Review logs: `npm start` or `docker-compose logs`
3. Check `.env` configuration
4. Review API_SPEC.md for endpoint details

---

## 🎉 You're Ready!

Your complete SOULS app is ready to launch. Start with:

```bash
# Terminal 1: Start backend
docker-compose up

# Terminal 2: Start frontend
npm start
```

Then open the app and create your first moment! 🚀

---

**Last updated**: 2026-05-26
