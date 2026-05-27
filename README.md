# SOULS — Luxury Social Lifestyle App

> **Where style meets story.** Create, customize, and share visually rich lifestyle moments with a premium mobile experience.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start backend (Docker)
docker-compose up -d

# 3. Start mobile app
npm start

# 4. Open on device or simulator
# Press 'i' (iOS) or 'a' (Android)
```

See [LAUNCH_README.md](./LAUNCH_README.md) for complete setup instructions.

---

## ✨ Features

- **📷 Capture** — Take or select photos with framing for widgets
- **✏️ Customize** — Add stickers, GIFs, emojis, tags (drinks, food, cigarettes, location)
- **🎨 Themes** — 3 luxury themes (Dark Gold, Navy Marble, Silver White) with live preview
- **🔐 Auth** — Secure email sign-up & sign-in
- **🚀 Share** — Direct share to Instagram Stories & Threads
- **💾 Save** — Keep moments in private collections
- **⚙️ Settings** — Theme, font, accessibility customization

---

## 📱 Core Screens

1. **Welcome/Sign In** — Onboarding with email auth
2. **Capture** — Camera + gallery picker with widget framing
3. **Edit** — Sticker layer editor with advanced controls
4. **Settings** — Theme switcher, font selection, privacy settings

---

## 🏗️ Architecture

**Frontend**: Expo React Native (TypeScript)  
**Backend**: Node.js + Express + PostgreSQL + Redis  
**Design System**: Luxury dark-marble + gold aesthetic  
**State**: Zustand for app state, context for theming

---

## 📂 Project Structure

```
src/
├── screens/           # Core UI screens
├── components/        # Reusable UI components (buttons, cards, chips)
├── services/          # API client
├── store/            # State management
├── theme/            # Design tokens & theme provider
├── types/            # TypeScript type definitions
└── data/             # Sticker catalog, mock data

backend/
├── src/index.ts      # Express API server
├── Dockerfile        # Container image
└── package.json

design-tokens.json    # Color, typography, spacing tokens
docker-compose.yml    # Local dev environment (Postgres, Redis, API)
```

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| **Mobile** | Expo, React Native, TypeScript, Zustand |
| **Backend** | Node.js, Express, PostgreSQL, Redis |
| **DevOps** | Docker, Docker Compose |
| **Design** | Figma (tokens exported to JSON) |
| **UI Kit** | Custom + Expo components |

---

## 📋 Documentation

- **[LAUNCH_README.md](./LAUNCH_README.md)** — Complete setup & deployment guide
- **[SPEC_FULL.md](./SPEC_FULL.md)** — Expanded product spec
- **[API_SPEC.md](./API_SPEC.md)** — API endpoints & contracts
- **[data-models.json](./data-models.json)** — Data schemas
- **[design-tokens.json](./design-tokens.json)** — Design system tokens
- **[IMPLEMENTATION_ROADMAP.md](./IMPLEMENTATION_ROADMAP.md)** — Roadmap & milestones

---

## 🚢 Deployment

**Frontend** → Vercel / Expo EAS  
**Backend** → Railway / Heroku / AWS ECS / DigitalOcean  
**Database** → Managed PostgreSQL (AWS RDS, Supabase, Railway)  
**Cache** → Redis (Upstash, Azure Cache)  

See [LAUNCH_README.md](./LAUNCH_README.md#-deployment) for step-by-step.

---

## 🔐 Security

✅ JWT authentication  
✅ Secure password hashing (bcryptjs)  
✅ HTTPS + CORS  
✅ Age gating for restricted content  
✅ Rate limiting ready  
✅ Environment-based config  

---

## 🎯 Roadmap

**Phase 1 (MVP)** — Launch ✅
- Core capture, edit, share
- Basic auth & 3 themes
- Sticker catalog

**Phase 2** — Growth
- GIF integration
- Location search
- Moderation tools

**Phase 3** — Scale
- In-app feed & explore
- Social graph (follow, likes)
- Cloud sync

---

## 📊 Key Metrics

- Onboarding completion rate
- Capture → Share funnel
- D7 / D30 retention
- Shares per user per week
- Average time in editor

---

## 🎨 Design System

- **Primary Color**: Gold (#FFCC00)
- **Background**: Black (#000000)
- **Accents**: Navy, Marble Red, Silver
- **Typography**: Inter (display & UI)
- **Spacing**: 8pt base unit
- **Motion**: Spring easing, 120–600ms transitions

See [design-tokens.json](./design-tokens.json) for all tokens.

---

## 🤝 Contributing

1. Clone repo
2. Create feature branch: `git checkout -b feature/my-feature`
3. Follow existing code style
4. Test on simulator/device
5. Open PR

---

## 📞 Support

For setup issues, see [LAUNCH_README.md#-troubleshooting](./LAUNCH_README.md#-troubleshooting).  
For feature questions, review [SPEC_FULL.md](./SPEC_FULL.md).

---

## 📄 License

SOULS © 2026. Proprietary.

---

**Ready to launch?** Start with:
```bash
npm install && docker-compose up && npm start
```

🚀 **Let's build something beautiful!**

