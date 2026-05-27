SOULS — Enhanced Product Specification

**Executive Summary**
- **Purpose:** A luxury, playful social-lifestyle mobile app for creating and sharing visually rich moments (photos + expressive overlays) that emphasize cigarettes, drinks, food, locations, and social micro-stories. The experience is premium, tactile, and social-first, designed for quick capture, expressive editing, and light-weight sharing to Instagram Stories, Threads, and in-app feeds.
- **Vision:** Be the go-to mobile canvas for tasteful lifestyle self-expression — polished, fast, and fashion-forward.

**Goals & Principles**
- **Delight:** Make editing and sharing joyful through premium visuals and micro-interactions.
- **Simplicity:** Minimize friction for capture → decorate → share.
- **Tasteful Treatment:** Represent lifestyle elements (cigarettes, alcohol, etc.) with mature, non-promotional visuals and age-aware controls.
- **Brand Feel:** High-contrast dark base with gold accents, tactile controls, and spacious layouts.

**Personas**
- **Ava — 26, Creative Freelancer:** Uses the app to create styled moments for social platforms; cares about aesthetics and quick sharing.
- **Tom — 31, Social Host:** Tracks drinks/meals/locations while out; likes visual logs and private collections.
- **Maya — 22, Trendsetter:** Loves playful stickers and sharing to Stories; experiments with fonts/themes.

**Top-Level User Journeys**
1. Onboard & personalize: Install → Sign up → Pick theme fonts → Quick tour.
2. Capture & decorate: Open Capture → Take/select photo → Add overlays (emoji, drinks, cigarettes, food, location) → Preview → Share or Save.
3. Save & browse: Open Saved → View collections → Edit a saved moment → Re-share.
4. Settings & themes: Open Settings → Change theme/font → Preview → Apply.

**MVP Scope (recommended)**
- Sign up / Sign in with email.
- Camera capture + gallery pick.
- Basic crop + frame for widget mode.
- Stickers: emojis, GIFs (GIPHY integration), drinks, food, cigarettes (catalog and tags).
- Location tag (map-based quick selection using geolocation + reverse geocoding).
- Save moments locally/in-app and share to Instagram Stories + Threads.
- Themes switcher with 3 curated themes (Dark Gold, Navy Marble, Silver White).
- Basic accessibility (labels, dynamic type support) and analytics events for key flows.

**Core Screens — Expanded**
**Welcome / Sign In**
- Header: logo + short tagline.
- Primary CTA: Sign up (email) — prominent gold pill button.
- Secondary CTA: Sign in with email — outline style.
- Returning user field: email input, continue button.
- Microcopy: privacy, data usage, and age gating prompt when content selections include age-restricted tags.
- Onboarding modal: optional theme/font preview carousel.

**Capture / Select Picture**
- Fullscreen camera with centered shutter; top-right: flash, front/back toggle; bottom floating nav for gallery and widget toggle.
- Gallery selector opens horizontal filmstrip with pinch-to-zoom preview.
- Crop/frame modal: aspect presets (1:1, 4:5, widget preview) and free transform.
- Controls: Retake, Accept, Crop, Widget-ready toggle.
- Accessibility: large shutter button, haptic feedback on capture, descriptive hints for controls.

**Edit / Feature Screen**
- Canvas: photo background with layered overlay stack (stickers, text, tags).
- Toolbar (bottom-floating): Stickers / GIFs / Tags / Text / Layers / Share.
- Sticker picker: categories (Emoji, GIFs, Drinks, Food, Cigarettes, Location) shown as capsule chips; search box; recent items.
- Sticker interactions: drag, pinch-to-scale, rotate, double-tap to flip, long-press for style variants.
- Tagging UI: tappable chips for cigarette type, drink, food, cuisine, and location; chips toggle states and can include small count badges.
- Caption input: short note + style picks (font, size, color, shadow, align).
- Preview sheet: simulate Instagram Story aspect / Threads / In-app feed with safe margins.
- Save states: Draft autosave; explicit Save to Collections.

**Settings / Appearance**
- Sections: Account, Appearance, Privacy & Sharing, Widgets, About.
- Appearance: Theme presets, color accent picker, font selector with live preview cards.
- Widget settings: select widget images, refresh cadence, compact vs. detailed widget layout.
- Privacy: toggle allow-shares (Threads/Instagram), make account private/public, data export button.

**Design System & Tokens**
- Palette: Primary: Black (#000000). Accent: Gold (#FFCC00). Support: Navy (#0B1B2B), Marble Red (#6B0F0F), Silver (#C0C0C0), White (#FFFFFF).
- Elevation: subtle glows and soft shadows for floating elements.
- Spacing: 8pt base, large gutters for hero images.
- Typography: Headline: Display (condensed, bold), UI: Clean sans (regular/semibold), Captions: subtle small caps.
- Iconography: refined line icons with occasional filled states for active.
- Motion: spring easing for floating elements, 120–250ms micro-interactions, 400–600ms screen transitions.

**Functional Requirements (refined)**
- Authentication: secure email sign-up + sign-in, email verification, password reset.
- Media: capture photo, import from gallery, client-side crop and transforms, image optimization before upload (resize/compress), metadata preservation options.
- Assets: sticker catalog with categories, GIF integration via GIPHY API (or local GIF pack), searchable tags.
- Location: use device geolocation and reverse-geocode to named place; manual search fallback.
- Sharing: share to Instagram Stories using platform-specific Intents / Share Sheet; Threads via share URL or deep-link (depending on platform capabilities); copy image to clipboard.
- Persistence: local cache + cloud sync (optional, deferred to roadmap). Save posts with versioned edits.
- Export: allow saving to device gallery with watermark toggle.

**APIs & Data Model (high-level)**
Entities:
- User {id, email, displayName, avatarUrl, themePrefs, createdAt}
- Post {id, userId, imageId, layers[], caption, tags[], location, isWidgetReady, createdAt, visibility}
- Asset {id, type (sticker/gif/icon), category, tags, srcUrl, metadata}
- Theme {id, name, palette, fonts, preview}
- WidgetSetting {userId, selection[], layout, refreshInterval}

Sample API endpoints (REST) — authenticated where required:
- POST /auth/signup — body: {email, password, displayName}
- POST /auth/signin — {email, password}
- POST /auth/verify — {token}
- POST /upload/image — multipart form; returns imageId + urls
- GET /assets?category=drinks&query=martini — search stickers/GIFs
- POST /posts — create post with layers metadata
- GET /posts/:id — retrieve post
- GET /users/:id/saved — list saved moments
- GET /themes — list themes
- PUT /users/:id/settings — update appearance / widget settings

Security & Privacy:
- Use token-based auth (JWT or provider tokens).
- Store minimal PII; allow data export and delete requests.
- Age gating: detect and flag age-restricted content when user selects cigarette/alcohol tags; if under 21 (or local legal age) block or warn.

**Content Moderation & Legal**
- Non-promotion policy: All cigarette/alcohol visuals must be tagged as lifestyle, not promotional. No advertising allowed for tobacco products.
- Age gating: when a user engages with cigarette or alcohol tags, present an age confirmation modal on sign-up and on first use; block creation/sharing for underage accounts per region.
- Reporting: allow users to report posts; simple moderation queue for content review and takedown.
- COPPA/Local Laws: If user indicates underage during sign-up, enforce privacy-safe defaults and disable age-restricted tag visibility.

**Accessibility**
- Support dynamic type / font scaling.
- Provide semantic labels for camera, shutter, and sticker controls.
- High-contrast modes and color-blind-safe theme variants.
- Keyboard and screen-reader friendly modal flows.

**Analytics & Success Metrics**
- Onboarding completion rate.
- Capture → Edit → Share funnel conversion.
- Average time in editor per post.
- Shares to Instagram/Threads per user per week.
- Retention rates (D7 / D30).
- Number of saved moments and widgets configured.
- Accessibility usage signals (fonts increased, contrast mode).

**Growth & Engagement Features (post-MVP)**
- Social feed / Explore: curated in-app highlight reel.
- Follows / Profiles: social graph to follow creators.
- Collections & Albums: grouped moments.
- Collaborative edits / guest tagging.
- Cloud backup & multi-device sync.

**Roadmap & Milestones**
- Phase 1 (MVP, 0–8 weeks): core capture/edit/share, basic auth, 3 theme presets, local save.
- Phase 2 (8–16 weeks): GIF integrations, advanced sticker packs, location search, share deep-links.
- Phase 3 (16–28 weeks): in-app feed/explore, cloud sync, moderation tools, accessibility refinements.

**Deliverables & Assets**
- Spec document (this file).
- Design tokens JSON and a starter Figma kit (color, typography, spacing).
- Minimal React Native / Expo skeleton for Capture + Edit screens.
- Sticker/GIF catalog CSV and image assets.

**Design & UX Notes (practical tips)**
- Keep the hero image area uncluttered; use semi-transparent pill controls rather than full toolbars.
- Offer quick-presets for common combos (e.g., "Cocktail + Location + Night Out") to accelerate creation.
- Provide micro-animations for sticker placement (pop+spring) and a satisfying share confirmation.
- Make themes preview-first in onboarding so users feel ownership immediately.

**Example Microcopy**
- On sign: "Welcome to SOULS — where style meets story."
- Age gate: "This feature includes age-restricted lifestyle tags — confirm you are 21+ to continue."
- Save confirmation: "Saved to Moments — view in your collection."

**Open Questions**
- Cloud sync & auth provider choices: roll-your-own vs. Firebase/Auth0?
- GIF provider: GIPHY vs. Tenor or local curated packs?
- Regional age limits automation — integrate with account DOB field or implicit verification?

---
Last updated: 2026-05-26

Roll-your-own
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
npx cap init "SOULS" "com.souls.app" --web-dir=dist

npm run build
npx cap add ios
npx cap add android
npx cap sync
npx cap open ios       # opens Xcode (Mac only)
npx cap open android   # opens Android Studio

