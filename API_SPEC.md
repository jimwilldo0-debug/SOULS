SOULS — API Specification (Core Endpoints)

Authentication
- POST /auth/signup
  - Body: { "email": string, "password": string, "displayName": string, "dob"?: "YYYY-MM-DD" }
  - Response: 201 { "userId": "...", "verificationSent": true }
- POST /auth/signin
  - Body: { "email": string, "password": string }
  - Response: 200 { "token": "<jwt>", "user": { ... } }
- POST /auth/verify
  - Body: { "token": string }
  - Response: 200 { "verified": true }

Image Upload
- POST /upload/image
  - Auth: required
  - Multipart form: file=image, metadata={aspect: "story|widget|square"}
  - Response: 201 { "imageId": "...", "urls": { "thumb": "...", "medium": "...", "full": "..." }, "width": 1080, "height": 1920 }

Assets & Stickers
- GET /assets
  - Query params: category, query, page, limit
  - Response: 200 { items: [{id,type,category,tags,srcUrl}], meta: {total,page,limit} }

Posts
- POST /posts
  - Auth: required
  - Body: {
      "imageId": "...",
      "layers": [ {"type":"sticker","assetId":"...","x":0.5,"y":0.5,"scale":1.2,"rotation":12} ],
      "caption": "string",
      "tags": ["cocktail","late-night"],
      "location": {"name":"The Blue Bar","lat":...,"lng":...},
      "isWidgetReady": true,
      "visibility": "private|friends|public"
    }
  - Response: 201 { "postId": "...", "saved": true }

- GET /posts/:id
  - Auth: required for private posts
  - Response: 200 { post: { ... } }

User Settings
- GET /users/:id/settings
- PUT /users/:id/settings
  - Body: { "themeId": "...", "font": "Inter", "widgetSettings": { ... } }

Sharing
- POST /share/instagram
  - Body: { postId }
  - Response: 200 { "intent": "ok" }

Moderation
- POST /reports
  - Body: { postId, reason, details }
  - Response: 202 { "reportId": "...", "status": "queued" }

Errors
- Use standard HTTP codes. Errors return { code, message, details? }.

Rate Limiting & Size Limits
- Image uploads: 10 MB per image; server resizes to standard sizes.
- API: rate limit 200 req/min per user (adjustable).

Security
- Use HTTPS. JWT tokens expire in 24 hours; provide refresh tokens if long sessions needed.

Notes
- All image-related responses include multiple CDN-ready URLs. Keep layer metadata lightweight (store only references to assets and transform matrix).