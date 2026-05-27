SOULS — Complete Product Specification (Expanded)

1 — Overview
- App name: SOULS
- Purpose: Luxury social-lifestyle mobile app for creating, saving, and sharing visually rich moments emphasizing cigarettes, drinks, food, location and social micro-stories.
- Tone: Luxurious, playful, expressive, tactile.

2 — Quick Start (for product, design, or dev)
- Install and open app → Sign up with email → Select Dark Gold theme in onboarding → Open Capture → Take photo → Add "Champagne" sticker + location → Preview → Share to Instagram Stories.

3 — Core Screens (detailed flows & states)
3.1 Welcome / Sign In
- States: Fresh install (onboarding carousel), Sign up form, Sign in form, Email verification pending, Age-gate modal.
- Flows:
  - New user: Tap "Sign up" → Email, password, display name → Optional DOB (for age gating) → Accept Terms → Email verification sent → On success, onboarding carousel opens (theme + fonts preview) → Home (Capture) loaded.
  - Returning user: Tap "Sign in" → Enter email → Enter password → Success → Home (Capture).
- Accessibility: Form labels, error states, focus order, large tap targets.
- Visual components: Logo lockup, tagline, gold pill CTA, subtle marble texture background, onboarding theme preview cards.
- Acceptance criteria: User can create account; email verification required for account-sensitive actions; age-gate shown when selecting restricted tags.

3.2 Capture / Select Picture
- States: Camera preview, Gallery picker (filmstrip), Crop/frame modal, Widget-ready preview.
- Flows:
  - Capture: Tap shutter → show captured preview → options: Retake / Accept / Edit. On Accept → transition to Edit screen with chosen image.
  - Gallery pick: Tap gallery → select image → open Crop modal → choose aspect presets (1:1, Story 9:16, Widget) → confirm → Edit screen.
  - Widget framing: Toggle "Widget-ready" before saving; UI overlays safe-safe margin for widget.
- Interactions: Haptic feedback on capture, animated shutter pulse, drag-to-dismiss gallery.
- Acceptance criteria: Capture and pick workflows complete within 3 taps to Edit.

3.3 Edit / Feature Screen
- Primary surface: Full-bleed photo background; toolbar floats at bottom; layer tray collapsible on right (or top for narrow screens).
- Tools: Stickers, GIFs, Text, Tags, Layers, Filters, Crop, Undo/Redo, Share/Save.
- Sticker Picker:
  - Categories displayed as capsule chips horizontally.
  - Search input filters stickers and GIFs.
  - Recent and favorites row at top.
- Layer interactions:
  - Tap to select; drag to move; pinch to scale; two-finger rotate; double-tap for quick presets; long-press to reveal style variants.
  - Layer z-order controls: bring forward/back; lock; duplicate; delete.
- Tags & Metadata:
  - Tag chips (cigarette type, drink, food, cuisine) are metadata not baked into pixels; these appear in post JSON as tags.
  - Location tag includes placeName, coordinates, and optional venueId.
- Caption & Styling:
  - Inline caption input with type styles selector: font family, size slider, color swatches, shadow toggle, stroke toggle.
- Share Path:
  - Preview sheet provides export options: Instagram Story (prepare image + background color + stickers mapped to Story size), Threads (square/vertical), In-app feed.
  - On share, the app should attempt direct handoff via OS share intents; fallback exports to gallery then opens target app.
- Accept criteria: User can fully decorate an image and share or save without leaving the edit screen more than twice.

3.4 Settings / Appearance
- Sections: Account, Appearance, Privacy & Sharing, Notifications, Widgets.
- Appearance options: Theme presets (Dark Gold, Navy Marble, Silver White), Accent color picker (hues locked to brand palette), Font pack selector (Display / UI / Serif), Motion toggle (reduce motion), Accessibility settings.
- Widget settings: Choose which saved posts appear in the widget, refresh cadence, layout style (compact/detailed), background overlay opacity.
- Acceptance criteria: User can preview and apply theme and font changes instantly.

4 — Data Model (JSON schemas)
- See `/data-models.json` for machine-friendly schemas.
- Key entities summarized:
  - User: id, email (hashed/encrypted), displayName, dob (optional), themePrefs, verified, createdAt.
  - Post: id, userId, image (storage refs), layers (array of layer objects), tags, caption, location, visibility, createdAt.
  - Asset: id, type, category, tags, url, variants (sizes).
  - Theme: id, name, palette, fonts, previewUrl.

5 — API Contract (essential endpoints)
- See `/API_SPEC.md` with request/response examples.
- Notes: All mutable endpoints require auth token; use standard 401/403 codes.
- Image uploads support multipart + client-side compression; server returns multiple sizes and CDN URLs.

6 — Content Moderation & Legal
- Principles: Non-promotional representation of cigarettes/alcohol; age checks; user reporting and takedown workflows.
- Age gating: Present DOB capture during sign-up; if none, require age confirmation modal on first age-restricted action. Block share if under minimum age for region.
- Moderation flow: User report → triage queue (automated checks first: explicit nudity, hate speech, illegal promotion) → human review → action (remove/post takedown, warn, ban). Keep audit log.
- Legal: Provide Terms and Privacy with explicit statements about user-generated content and content responsibility. Disallow paid tobacco advertisements.

7 — Analytics & Events (tracking plan)
- Core analytics events:
  - onboarding.completed {userId, themeChosen}
  - capture.taken {userId, cameraMode, flash}
  - image.uploaded {userId, imageId, sizeKb}
  - editor.opened {userId, postId?}
  - sticker.added {userId, stickerId, category}
  - tag.added {userId, tag}
  - share.attempted {userId, destination}
  - share.completed {userId, destination}
  - post.saved {userId, postId}
- Privacy: Allow users to opt-out of analytics; mask PII in tracking.

8 — Design Tokens (see `/design-tokens.json`)
- Colors, fonts, spacing, motion durations, radius, elevation tokens provided. Use these across code and design.

9 — Accessibility Checklist
- All interactive elements have accessible labels.
- Support dynamic font sizes and high-contrast themes.
- Reduce motion preference respected.
- Sufficient color contrast for primary CTAs.

10 — Tech Recommendations
- Client: React Native + Expo (fast iteration, cross-platform) OR native Swift/Kotlin for deeper integrations.
- Backend: Node.js + Express or Go; use cloud storage (S3) + CDN for images; optional Firebase for Auth/storage.
- GIFs: GIPHY or Tenor integration with caching.
- Auth: Start with email/password + JWT; consider OAuth for future social sign-ins.
- Database: PostgreSQL for relational data; Redis for caching; ElasticSearch for sticker/tag search.

11 — Roadmap (milestones & tasks)
- Phase 1 (0–8 weeks): Auth, Camera, Gallery, Editor basic stickers, Save/Share, 3 themes, analytics.
- Phase 2 (8–16 weeks): GIF integration, advanced sticker pack, location search, age gating flow, moderation basics.
- Phase 3 (16–28 weeks): In-app feed, follow/favorites, cloud sync, moderation tooling, accessibility polish.

12 — Developer Handoff Checklist
- Provide `design-tokens.json` and Figma token file.
- Provide sticker pack CSV with categories and source files.
- Provide API spec, data models, and example post payloads.
- Provide a small React Native demo showing Capture → Edit → Save (optional deliverable).

13 — Deliverables added to repo
- `SPEC.md` (summary)
- `SPEC_FULL.md` (this file)
- `API_SPEC.md` (API details)
- `data-models.json`
- `design-tokens.json`
- `IMPLEMENTATION_ROADMAP.md`

---
Last updated: 2026-05-26
