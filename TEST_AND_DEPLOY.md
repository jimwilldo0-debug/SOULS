# SOULS — Test Locally & Deploy (No Docker)

Your app is **ready to test**. Skip Docker, use this simpler flow.

---

## 🚀 Test Locally (5 min)

### Start the Mobile App

```bash
cd /workspaces/SOULS
npm start
```

Then:
- **iOS** (Mac): Press `i`
- **Android**: Press `a` (requires Android Studio)
- **Web**: Press `w` (Expo web simulator)

### Test the Flow

1. **Welcome Screen** → Sign up with email `test@example.com` / `password123`
2. **Capture Screen** → Take photo or select from gallery
3. **Edit Screen** → Add sticker (🎉 emoji), write caption
4. **Settings Screen** → Switch themes (Dark Gold → Navy Marble)

### Expected Behavior
- ✅ Screens load without errors
- ✅ Navigation works smoothly
- ✅ Theme changes apply instantly
- ✅ UI looks premium (gold + dark)

---

## 🔗 API Testing (Mock Mode)

**Currently**: All API calls are mocked locally. They return dummy data.

**To test with real backend**: Update `.env`

```bash
# .env
REACT_APP_API_URL=https://your-backend-url.com/api
```

Then `npm start` again — app will use live backend.

---

## 🚢 Deploy Now (Choose One)

### Option A: Vercel (Frontend Only) — 2 min

```bash
# Install
npm install -g vercel

# Deploy
vercel --prod
```

**Result**: Your app live on `https://souls-xxx.vercel.app`

### Option B: Deploy Backend Separately — 5 min

**Deploy to Railway**:
1. Go to https://railway.app
2. Create new project
3. Connect GitHub
4. Select `/workspaces/SOULS` repo
5. Railway auto-detects Node.js backend
6. Deploy ✅

**Then update frontend `.env`**:
```bash
REACT_APP_API_URL=https://your-railway-backend-url/api
```

**Redeploy frontend**:
```bash
vercel --prod
```

### Option C: Full Stack Docker (Advanced)

If you want Docker with everything:

```bash
# Skip Docker for now, use Railway instead
# It handles all the containerization for you
```

---

## ✅ Validation Checklist

- [ ] `npm start` runs without errors
- [ ] App loads in simulator/device
- [ ] Can navigate all 4 screens
- [ ] Theme switching works
- [ ] Deployed to Vercel or Railway
- [ ] Live URL is shareable

---

## 🎯 Next Steps (Post-Launch)

After local testing passes:

1. **Deploy Frontend**: `vercel --prod`
2. **Deploy Backend**: Railway or Render.com
3. **Connect them**: Update `.env` with backend URL
4. **Add real features**:
   - Firebase Auth (instead of mock)
   - S3 image storage
   - Supabase PostgreSQL
   - Real GIF API (GIPHY)

---

## 📱 Build for Mobile (Optional)

To submit to App Store / Play Store:

```bash
# Install EAS
npm install -g eas-cli
eas login

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit
eas submit --platform ios
eas submit --platform android
```

Takes ~10-15 min per build.

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm start` fails | Run `npm install --legacy-peer-deps --force` |
| Simulator won't start | Close simulator, run `npm start` again, press `i` |
| Theme doesn't apply | Close app, restart with `npm start` |
| API calls fail | Check `.env` has correct `REACT_APP_API_URL` |
| Deploy fails | Make sure GitHub repo is pushed with all changes |

---

## 🎬 Quick Commands Reference

```bash
# Start app
npm start

# Test build
npm run build

# Run tests
npm test

# Deploy to Vercel
vercel --prod

# Deploy to Railway
# Via GitHub integration at railway.app

# Build for mobile
eas build --platform ios
eas build --platform android
```

---

## 📊 What You Have

✅ Complete mobile app (4 screens)  
✅ Design system (luxury themes)  
✅ Ready to deploy  
✅ Mock API (works locally)  
✅ Backend scaffold (ready to connect)  

---

## 🚀 Recommended Path (Fastest)

1. **Now**: Test locally with `npm start`
2. **Today**: Deploy frontend to Vercel
3. **Tomorrow**: Deploy backend to Railway
4. **Week 1**: Connect them + iterate
5. **Week 2**: Add real auth/storage

---

## 📞 Status

**Local**: ✅ Ready to test  
**Deploy**: ✅ Ready (Vercel + Railway)  
**Live**: 🚀 10 minutes away

Pick a path above and let's go! 🎉
