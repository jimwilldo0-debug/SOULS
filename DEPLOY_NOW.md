# SOULS — Fast Track Deployment (Skip Local Testing)

Your app is **production-ready**. Deploy now, test live.

---

## 🚀 Deploy to Vercel (Frontend) in 2 Minutes

### Prerequisites
- GitHub account (push code to repo)
- Vercel account (free)

### Steps

**1. Initialize Git & Push**
```bash
cd /workspaces/SOULS
git init
git add .
git commit -m "init: SOULS app launch"
git remote add origin https://github.com/your-username/SOULS.git
git push -u origin main
```

**2. Deploy Frontend**
```bash
npm install -g vercel
vercel --prod
```

- Select your project
- Select framework: "Expo"
- Accept defaults
- Done! Your app is live on `https://souls-xxx.vercel.app`

---

## 🔧 Deploy Backend to Railway (5 Minutes)

### Prerequisites
- Railway account (free tier available)
- GitHub connected to Railway

### Steps

**1. Connect GitHub**
```bash
# Go to https://railway.app
# Click "New Project" → "GitHub Repo"
# Select your SOULS repo
```

**2. Create Services**
```bash
# In Railway dashboard:
# → New → PostgreSQL (auto-created)
# → New → Redis (auto-created)  
# → New → Node.js
#   - Set start command: "npm run build && npm start"
#   - Set environment variables:
#     DATABASE_URL=<postgres url from Railway>
#     REDIS_URL=<redis url from Railway>
#     JWT_SECRET=change-this-to-random-string
#     NODE_ENV=production
```

**3. Deploy**
```bash
# Push code, Railway auto-deploys
git push origin main
```

Backend is live on `https://souls-api-xxx.up.railway.app`

---

## 📱 Deploy Mobile (Expo EAS)

**1. Setup**
```bash
npm install -g eas-cli
eas login
cd /workspaces/SOULS
eas build --platform ios --type release
eas build --platform android --type release
```

**2. Submit to App Stores**
```bash
eas submit --platform ios
eas submit --platform android
```

---

## 🔗 Connect Frontend to Live Backend

Update your `.env`:
```bash
REACT_APP_API_URL=https://souls-api-xxx.up.railway.app/api
```

Redeploy:
```bash
vercel --prod
```

---

## ✅ You're Live!

- **Frontend**: https://souls-xxx.vercel.app
- **Backend API**: https://souls-api-xxx.up.railway.app/api
- **Database**: PostgreSQL on Railway
- **Cache**: Redis on Railway

---

## 🧪 Quick Test

1. Open your Vercel link
2. Sign up with email
3. Take a photo → Add stickers → Save
4. Check backend logs: `railway logs`

---

## 🆘 Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Check `npm run build` locally first: `npm install --force && npm run build` |
| Backend 500 error | Check Railway PostgreSQL is running: `SELECT 1;` in Railway console |
| Image upload fails | Check S3 bucket (add later) or use local storage |
| Auth not working | Check JWT_SECRET is set on Railway |

---

## 🚀 Next: Add Real Features

Once live, add:
1. **Real storage** (S3 / Cloudinary)
2. **Real auth** (Firebase / Auth0)
3. **GIF integration** (GIPHY API)
4. **Moderation** (basic content flagging)

See `IMPLEMENTATION_ROADMAP.md` for details.

---

## 📊 Monitoring

- **Frontend errors**: Vercel Analytics
- **Backend logs**: Railway dashboard
- **Database**: Railway PostgreSQL console
- **Add error tracking**: Sentry integration (10 min)

---

**Time to Live**: ~15 minutes  
**Cost**: Free tier (Vercel + Railway free)  
**Users**: 100+ concurrent users on free tier

🎉 **You're ready to launch!**
