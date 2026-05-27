import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ============ AUTH ENDPOINTS ============

interface SignupBody {
  email: string;
  password: string;
  displayName: string;
  dob?: string;
}

app.post('/api/auth/signup', (req: Request<{}, {}, SignupBody>, res: Response) => {
  const { email, password, displayName, dob } = req.body;

  // Validation
  if (!email || !password || !displayName) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // TODO: Hash password, check if user exists, save to DB
  const userId = uuidv4();

  // Mock token
  const token = Buffer.from(JSON.stringify({ userId, email })).toString('base64');

  res.status(201).json({
    userId,
    token,
    verificationSent: true,
  });
});

interface SigninBody {
  email: string;
  password: string;
}

app.post('/api/auth/signin', (req: Request<{}, {}, SigninBody>, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  // TODO: Verify password from DB
  const userId = uuidv4();
  const token = Buffer.from(JSON.stringify({ userId, email })).toString('base64');

  res.json({
    token,
    user: {
      id: userId,
      email,
      displayName: 'User',
      verified: true,
      createdAt: new Date().toISOString(),
    },
  });
});

interface VerifyBody {
  token: string;
}

app.post('/api/auth/verify', (req: Request<{}, {}, VerifyBody>, res: Response) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token required' });
  }

  // TODO: Verify JWT token
  res.json({ verified: true });
});

// ============ IMAGE UPLOAD ============

app.post('/api/upload/image', (req: Request, res: Response) => {
  // TODO: Implement multipart file upload with sharp for image optimization
  const imageId = uuidv4();

  res.status(201).json({
    imageId,
    urls: {
      thumb: `https://cdn.example.com/${imageId}_thumb.jpg`,
      medium: `https://cdn.example.com/${imageId}_medium.jpg`,
      full: `https://cdn.example.com/${imageId}_full.jpg`,
    },
    width: 1080,
    height: 1920,
  });
});

// ============ ASSETS / STICKERS ============

app.get('/api/assets', (req: Request, res: Response) => {
  const { category, query, page = 1, limit = 50 } = req.query;

  // TODO: Fetch from DB, filter by category/query
  const mockAssets = [
    {
      id: 'emoji-party',
      type: 'sticker',
      category: 'emoji',
      tags: ['celebration'],
      srcUrl: '🎉',
    },
    {
      id: 'drink-champagne',
      type: 'sticker',
      category: 'drinks',
      tags: ['champagne', 'alcoholic'],
      srcUrl: '🍾',
    },
  ];

  res.json({
    items: mockAssets,
    meta: { total: mockAssets.length, page, limit },
  });
});

// ============ POSTS ============

app.post('/api/posts', (req: Request, res: Response) => {
  const { imageId, layers, caption, tags, location, visibility } = req.body;

  // TODO: Validate auth token, save post to DB
  const postId = uuidv4();

  res.status(201).json({
    postId,
    saved: true,
    createdAt: new Date().toISOString(),
  });
});

app.get('/api/posts/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  // TODO: Fetch post from DB
  res.json({
    id,
    userId: uuidv4(),
    imageId: uuidv4(),
    layers: [],
    caption: 'Sample post',
    tags: [],
    visibility: 'private',
    createdAt: new Date().toISOString(),
  });
});

app.get('/api/users/saved', (req: Request, res: Response) => {
  // TODO: Fetch user's saved posts from DB
  res.json({
    posts: [],
    meta: { page: 1, limit: 20, total: 0 },
  });
});

// ============ SHARING ============

app.post('/api/share/instagram', (req: Request, res: Response) => {
  const { postId } = req.body;

  // TODO: Prepare image + metadata for Instagram share
  res.json({ intent: 'ok', url: 'instagram://...' });
});

app.post('/api/share/threads', (req: Request, res: Response) => {
  const { postId } = req.body;

  // TODO: Prepare content for Threads
  res.json({ intent: 'ok', url: 'threads://...' });
});

// ============ SETTINGS ============

app.get('/api/users/settings', (req: Request, res: Response) => {
  // TODO: Fetch user settings from DB
  res.json({
    themeId: 'darkGold',
    font: 'Inter',
    reduceMotion: false,
    analyticsEnabled: true,
  });
});

app.put('/api/users/settings', (req: Request, res: Response) => {
  const { themeId, font, reduceMotion, analyticsEnabled } = req.body;

  // TODO: Save settings to DB
  res.json({ updated: true });
});

// ============ THEMES ============

app.get('/api/themes', (req: Request, res: Response) => {
  const themes = [
    {
      id: 'darkGold',
      name: 'Dark Gold',
      palette: {
        background: '#000000',
        primary: '#FFCC00',
      },
    },
    {
      id: 'navyMarble',
      name: 'Navy Marble',
      palette: {
        background: '#0B1B2B',
        primary: '#FFD700',
      },
    },
  ];

  res.json({ themes });
});

// ============ HEALTH CHECK ============

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 SOULS Backend running at http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/docs`);
});
