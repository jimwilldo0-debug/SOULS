# SOULS — Success Metrics & Launch Roadmap

**Data-driven growth strategy from MVP to scale.**

---

## 📊 Week 1-4 Success Criteria (MVP)

### User Metrics
```
Week 1:
├─ Signups: 100+ users
├─ DAU (daily active): 30+
├─ Retention (Day 1): 50%+
├─ Avg session: 5+ minutes
└─ Crash rate: <1%

Week 2:
├─ Signups: 300+ cumulative
├─ DAU: 100+
├─ Retention (Day 7): 30%+
├─ Avg session: 7+ minutes
└─ Churn rate: <10% daily

Week 3:
├─ Signups: 600+ cumulative
├─ DAU: 200+
├─ Retention (Day 14): 20%+
├─ Avg session: 8+ minutes
└─ Photos per user: 5+ avg

Week 4:
├─ Signups: 1000+ cumulative
├─ DAU: 300+
├─ Retention (Day 30): 15%+
├─ Avg session: 10+ minutes
└─ Stickers used: 10+ per session
```

### Engagement Metrics
```
Photo Capture:
- Capture rate: 70%+ of DAU
- Gallery usage: 40%+ of captures
- Retake rate: <5% (shows friction)

Editing:
- Sticker adoption: 80%+ of photos
- Avg stickers/photo: 2-3
- Caption rate: 60%+
- Tag rate: 40%+

Theme Switching:
- Theme change rate: 30%+ DAU
- Favorite theme: Track adoption
- Theme retention: Does switching increase session time?

Sharing:
- Export rate: 50%+ of edits
- Social share attempts: 20%+
- Re-open after share: 40%+
```

### Technical Metrics
```
Performance:
- Page load: <2 seconds (web)
- App load: <3 seconds (mobile)
- Image processing: <1 second
- Database queries: <100ms p95

Reliability:
- Uptime: 99.9%+
- Error rate: <0.1%
- Crash rate: <1%
- API response time: <200ms

User Experience:
- Core Web Vitals (LCP/FID/CLS)
- Time to Interactive: <3 sec
- Cumulative Layout Shift: <0.1
```

---

## 🎯 Success Metrics by Phase

### Phase 1: MVP Launch (Week 1-2)
**Goal: Validate core concept with 300+ users**

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Signup conversion | 10%+ invite → signup | Mixpanel tracking |
| Photo uploads | 500+ total | Analytics dashboard |
| Avg photos/user | 3+ | Cohort analysis |
| Session time | 5-10 min avg | Google Analytics |
| Day 1 retention | 50%+% | Cohort analysis |
| Day 7 retention | 30%+ | Cohort analysis |
| NPS score | 40+ | In-app survey |
| Error rate | <1% | Sentry monitoring |

**Success Criteria Met If:**
- ✅ 300+ signups by end of Week 2
- ✅ 30%+ Day 7 retention
- ✅ <1% crash rate
- ✅ NPS >30
- ✅ Feature usability (no major bugs)

---

### Phase 2: Growth (Week 3-8)
**Goal: Scale to 5,000+ users with social features**

| Metric | Target | Improvement |
|--------|--------|------------|
| Signups | 5,000 cumulative | 5x from Phase 1 |
| DAU | 800+ | 4x from Phase 1 |
| Retention D30 | 20%+ | Measure compound growth |
| Viral coeff. | 0.2+ | Each user brings 0.2 invites |
| NPS | 45+ | 5pt improvement |
| Session time | 12+ min avg | Steady increase |

**Features Added:**
- Real Firebase Auth (replace mock)
- Supabase database (cloud saves)
- Instagram Stories sharing
- User profiles & followers
- In-app messaging (beta)

---

### Phase 3: Scale (Month 3+)
**Goal: 50,000+ users, sustainable growth**

| Metric | Target | Notes |
|--------|--------|-------|
| MAU | 50,000+ | Monthly active users |
| DAU | 10,000+ | 20% MAU conversion |
| Retention D30 | 25%+ | Improved with features |
| Retention D90 | 15%+ | Tracks power users |
| Viral coeff | 0.5+ | Organic growth acceleration |
| NPS | 50+ | Strong product-market fit |
| Revenue | $1,000+/mo | Premium features |

**Features Added:**
- Premium sticker packs ($2.99)
- Advanced editing (filters, effects)
- Community discover page
- User recommendations
- Push notifications
- Analytics dashboard for creators

---

## 🗓️ Detailed Roadmap

### Week 1-2: MVP Launch Phase
```
PRIORITY 1 (Critical):
□ Deploy to Vercel (DONE ✅)
□ Setup analytics (Mixpanel)
□ Monitor errors (Sentry)
□ User feedback form
□ Basic user support

PRIORITY 2 (Important):
□ Fix bugs reported
□ Optimize performance
□ Improve onboarding
□ Community moderation tools
□ Basic user guidelines

Success = 100+ DAU, <1% errors
```

### Week 3-4: Early Growth Phase
```
PRIORITY 1:
□ Firebase Auth integration (2-3 hrs)
□ Supabase setup (2-3 hrs)
□ Cloud photo storage (2 hrs)
□ Instagram sharing (3-4 hrs)

PRIORITY 2:
□ User profiles (basic)
□ Follow system
□ In-app notifications
□ Advanced analytics

Success = 300+ DAU, Instagram sharing live
```

### Week 5-8: Growth Acceleration
```
PRIORITY 1:
□ User profiles (advanced)
□ Follower feed (basic)
□ Direct messaging (beta)
□ Premium stickers (3-pack)
□ Payment integration (Stripe)

PRIORITY 2:
□ Discover page algorithm
□ User recommendations
□ Trending stickers
□ Community challenges
□ Creator analytics

Success = 2,000+ DAU, $500+/mo revenue
```

### Month 2-3: Scale Phase
```
PRIORITY 1:
□ Advanced sticker packs
□ Image filters & effects
□ Creator monetization
□ Premium tier ($4.99/mo)
□ App Store/Play Store launch

PRIORITY 2:
□ Web version improvements
□ Desktop editing
□ Batch uploads
□ Hashtag system
□ Trending analytics

Success = 10,000+ DAU, 5,000 premium users
```

---

## 📈 Growth Drivers

### Organic Growth (Week 1-4)
```
Word of Mouth:
- Referral link in app
- Share on social media
- Email invites
- Personal network

Target: 50% of signups from organic
Metric: viral coefficient
```

### Paid Growth (Week 5+)
```
Marketing Spend:
- Instagram ads ($300-500/mo)
- TikTok ads ($200-300/mo)
- Twitter ads ($100-200/mo)
- Google Ads ($200-300/mo)

Target: $2-3 LTV:CAC ratio
Budget: Start with $500/mo
```

### Creator Growth (Month 2+)
```
Incentive Program:
- Top 100 creators: Early features
- Influencer program: Revenue share
- Challenges: Weekly themes
- Leaderboards: Social proof

Goal: 1,000 power creators by Month 3
```

---

## 💰 Monetization Strategy

### Phase 1: MVP (Revenue = $0)
**Goal:** Validate product, not revenue

```
Free only:
- All basic features
- No ads
- No paid content
- No restrictions
```

### Phase 2: Premium Stickers (Week 5+)
**Goal:** 5% conversion rate (250 users paying)

```
Pricing:
- Basic pack (free): 10 stickers
- Gold pack: $2.99 (20 stickers)
- Platinum pack: $4.99 (50 stickers)
- Seasonal packs: $3.99/mo

Revenue model:
- 70% to SOULS, 30% app store
- Projected: $1,000-2,000/mo at 5% conv
```

### Phase 3: Premium Membership (Month 2+)
**Goal:** 2-3% conversion rate (1,000 users paying)

```
Premium Tier ($4.99/mo):
- Unlimited sticker packs
- Advanced filters
- Creator analytics
- Ad-free experience
- Priority support

Expected revenue: $5,000-10,000/mo
```

### Phase 4: Creator Monetization (Month 3+)
**Goal:** Enable creators to earn (50% share)

```
Features:
- Creator badge
- Revenue share program
- Tip system
- Sponsored sticker packs
- Affiliate marketing

Revenue split:
- SOULS: 50%
- Creator: 50%
- Transaction fee: 2.9% + $0.30
```

---

## 🎯 Key Performance Indicators (KPIs)

### Daily Dashboard (Operations)
```
Traffic:
- Signups today
- DAU (real-time)
- Sessions per user
- Avg session duration
- Crash rate

Engagement:
- Photos uploaded
- Stickers used
- Captions written
- Shares completed
- Theme switches

Revenue (after monetization):
- Premium conversions
- MRR
- Churn rate
- LTV estimate

Health:
- API error rate
- DB latency (p95)
- CDN performance
- Sentry error count
```

### Weekly Dashboard (Product)
```
Growth:
- Cumulative signups
- WAU (weekly active)
- Week-over-week growth %
- Retention cohorts

Engagement:
- Photos per user
- Stickers per photo
- Share rate
- Return rate

Issues:
- Top 5 errors
- Feature bugs
- Performance issues
- User complaints

Hypothesis tracking:
- Tests running
- Results
- Decisions made
```

### Monthly Dashboard (Strategy)
```
Business:
- MAU
- DAU
- Retention D30/D60/D90
- NPS score
- Revenue/MRR

Market:
- Market size estimate
- Competitor analysis
- User feedback themes
- Feature requests

Team:
- Capacity
- Velocity
- Burndown
- Blockers
```

---

## 🚀 Success Indicators by Month

| Metric | Month 1 | Month 2 | Month 3 |
|--------|---------|---------|---------|
| **Users** | 1,000 | 10,000 | 50,000 |
| **DAU** | 300 | 2,000 | 10,000 |
| **Retention D30** | 15% | 20% | 25% |
| **Revenue** | $0 | $2,000 | $15,000 |
| **NPS** | 40 | 45 | 50 |
| **Churn** | 10%/day | 3%/day | 1%/day |

---

## 📋 Decision Criteria

### When to Pivot
**Pivot if:**
- DAU <50 after Week 2 (demand doesn't exist)
- Retention D7 <10% (product isn't sticky)
- Critical bugs unfixable (architecture issue)
- User feedback contradicts vision (rethink)

**DO NOT pivot if:**
- Growth is slow but consistent (needs more time)
- Early feedback is mixed (expected for early product)
- Competition exists (not barrier to entry)
- Revenue is $0 (monetization comes later)

### When to Scale
**Scale when:**
- DAU consistent >500 (proven demand)
- Retention D30 >15% (stickiness confirmed)
- Unit economics positive (revenue > CAC)
- Team capacity available (can handle growth)

### When to Fundraise
**Fundraise when:**
- Product-market fit confirmed (NPS 40+)
- Growth metrics excellent (WoW 20%+)
- Runway concern (need 6+ months)
- Scale capital needed (expensive marketing)

---

## ✅ Roadmap Status

**Phase 1: MVP** (Week 1-2)
- [x] 4 screens complete
- [x] Core features working
- [x] Deployment ready
- [ ] Analytics tracking live
- [ ] Error monitoring live

**Phase 2: Growth** (Week 3-8)
- [ ] Cloud auth (Firebase)
- [ ] Cloud storage (Supabase)
- [ ] Social sharing (Instagram)
- [ ] User profiles
- [ ] Premium stickers

**Phase 3: Scale** (Month 3+)
- [ ] Advanced editing
- [ ] Creator program
- [ ] Monetization
- [ ] App store launch
- [ ] Marketing campaigns

---

**This roadmap is flexible. Adjust based on user feedback and metrics.**

**Review and update: Monthly**  
**Last updated: May 27, 2026**
