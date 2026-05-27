SOULS — Implementation Roadmap (Practical Tasks & Estimates)

Phase 0 — Prep (1 week)
- Finalize specs & tokens (this repo).
- Create Figma kit from `design-tokens.json`.
- Set up repo skeleton and CI.

Phase 1 — MVP (0–8 weeks)
- Week 1–2: Auth + basic account flows.
  - Implement email/password sign-up, sign-in, verification.
- Week 2–4: Camera + Gallery + Upload.
  - Integrate camera API, gallery picker, client-side image compression.
- Week 4–6: Editor baseline.
  - Basic sticker placement, caption, tags, save locally.
- Week 6–8: Share + Themes + Analytics.
  - Implement share intents, 3 theme presets, event tracking.

Phase 2 — Growth (8–16 weeks)
- GIF integration (GIPHY), advanced sticker library, tag search.
- Location search with reverse geocoding.
- Age gating and moderation primitives.

Phase 3 — Scale (16–28 weeks)
- In-app feed, social graph features (follow, likes), cloud sync.
- Moderation dashboard and automated filters.
- Accessibility polish and performance improvements.

Team & Roles (minimal)
- 1 Product Manager
- 1 Designer (Figma + tokens)
- 2 Mobile Engineers (React Native / Swift / Kotlin)
- 1 Backend Engineer
- 1 QA/Accessibility engineer

Dev Notes
- Start with Expo/React Native for quick cross-platform iteration; extract native modules for advanced share features when needed.
- Use feature flags to gate social features and moderation.
- Keep image layer metadata small: store transform matrix + asset ids (no heavy raster data).

Deployment
- Host APIs on managed platform (Vercel for serverless or AWS ECS/EC2 for full control).
- Use S3 (or equivalent) + CloudFront for images.

Risks & Mitigations
- Age-restricted content compliance: implement DOB capture and region-specific policies early.
- GIF provider limitations: cache frequently used GIFs and maintain local curated pack.

Metrics for Phase Gates
- Gate Phase 2 on: 10k+ captures per week or editor retention rate > 25% (D7).

