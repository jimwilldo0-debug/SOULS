# SOULS — Legal, Privacy & Content Moderation

**Comprehensive policies for SOULS social app (MVP to scale).**

---

## 📋 Privacy Policy

### Data Collection
**What we collect:**
- Email address (for authentication)
- Photos you upload (stored with your consent)
- Sticker usage patterns (anonymized)
- Device information (OS, version, screen size)

**What we DON'T collect:**
- Location data (unless user explicitly enables)
- Camera access for surveillance
- Contact list data
- Calendar or message data
- Third-party website browsing history

### Data Storage & Security
```
Infrastructure:
- Supabase PostgreSQL (encrypted at rest)
- Cloudinary CDN (SSL/TLS in transit)
- Auth0 (SOC 2 Type II compliant)

Encryption:
- Transit: TLS 1.3
- At Rest: AES-256
- Passwords: bcrypt (salted, hashed)
```

### User Rights
✅ Right to Access: Request your data anytime  
✅ Right to Delete: Permanent account deletion (30-day grace period)  
✅ Right to Export: Download all your photos & metadata  
✅ Right to Opt-Out: Disable analytics/sharing anytime  

### Third-Party Sharing
**We share data ONLY with:**
- Analytics providers (Google Analytics - anonymized)
- Payment processors (Stripe for premium features - PCI compliant)
- Cloud hosting (AWS/GCP - under data processing agreement)

**We NEVER sell your data to:**
- Advertisers
- Data brokers
- Unaffiliated third parties
- Foreign governments

### Retention Policy
```
User Data Retention:
- Active account: Kept for account duration
- Inactive 12 months: Soft delete (recoverable)
- Inactive 24 months: Hard delete (permanent)
- Upon deletion request: Permanent within 30 days
- Backup copies: Deleted within 90 days

Photos:
- User deletion: Removed immediately from CDN
- Account deletion: Removed from all systems
- Backup: Retained per standard backup policy
```

---

## 🚫 Content Moderation Policy

### Prohibited Content

**ILLEGAL CONTENT** ❌
- Child sexual abuse material (CSAM)
- Violence or illegal activities
- Hate speech targeting protected groups
- Terrorism or violent extremism
- Illegal substances or weapons
- Fraud or scams

**HARMFUL CONTENT** ❌
- Graphic violence or gore
- Self-harm or suicide promotion
- Harassment or bullying
- Non-consensual intimate images
- Threats or incitement to violence
- Exploitation of minors

**DECEPTIVE CONTENT** ❌
- Misinformation about health/safety
- False identity impersonation
- Phishing or spam links
- False product claims
- Election misinformation
- Fake news presented as fact

**EXPLOITATIVE CONTENT** ❌
- Commercial sexual content
- Exploitation of vulnerable people
- Unauthorized commercial use
- Copyright/trademark infringement
- Underage content of any kind

### Allowed Content
✅ Personal photos (within guidelines)  
✅ Artistic expression and satire  
✅ News and commentary  
✅ LGBTQ+ content and pride  
✅ Political discussion (not misinformation)  
✅ Educational content  
✅ Memes and humor  

### Moderation Process

**Automated Detection:**
```
1. AI scanning (PhotoModerator AI)
   - Detects CSAM, violence, gore
   - Confidence scoring (0-100%)
   - Flags for human review if >50%

2. Text analysis (OpenAI Moderation)
   - Scans captions and tags
   - Checks for harassment/hate speech
   - Automated removal if flagged

3. Duplicate detection (Perceptual hashing)
   - Detects previously banned content
   - Immediate removal without review
```

**Manual Review:**
```
1. User reports (1-2 hours response)
2. Appeals process (24-hour response)
3. Context consideration
4. Community member review panels
```

**Actions Taken:**
```
First Offense:
- Content removal
- Warning notification
- Appeal option (72 hours)

Second Offense:
- 24-hour account suspension
- Content removal
- Appeal option

Third Offense:
- 7-day account suspension
- Mandatory policy acknowledgment

Fourth Offense:
- Permanent account ban
- Content deletion
- IP ban option for repeat violations
```

### Reporting System
**Users can report:**
- Photos (tap ⋯ → Report)
- Comments/tags (tap ⋯ → Report)
- Accounts (visit profile → Report User)
- Safety issues (in-app feedback form)

**Report includes:**
- Content category
- Description
- Screenshots
- Context

**Response:**
- 24-hour acknowledgment
- Initial review within 48 hours
- Final decision within 5 business days
- Appeal notification

---

## 🔐 Terms of Service

### User Agreement

**1. Eligibility**
- Must be 13+ (or legal age in your country)
- Parents/guardians consent for minors 13-18
- One account per person
- No commercial/bot accounts

**2. User Responsibilities**
- Don't upload illegal content
- Don't harass other users
- Don't impersonate others
- Don't spam or scam
- Don't bypass security features
- Don't collect data about others

**3. IP Rights**
- You retain copyright of your photos
- You grant SOULS license to host/display
- Stickers are SOULS property
- Third-party content is theirs

**4. Prohibited Activities**
- Scraping user data
- Creating unauthorized bots
- Hacking or unauthorized access
- Reverse engineering features
- Sharing login credentials
- Using API commercially

**5. Liability Limitations**
- Service provided "as-is"
- We're not liable for user-generated content
- Max liability: amount you paid us (or $0 for free)
- We're not responsible for data loss from your actions
- No liability for third-party services

**6. Service Modifications**
- We can modify features anytime
- 30-day notice for breaking changes
- We can discontinue service with 60-day notice
- New features may have additional terms

**7. Dispute Resolution**
- Governed by California law
- Binding arbitration (except IP claims)
- Class action waiver
- You waive jury trial right

---

## 🛡️ Safety & Security

### COPPA Compliance (Children's Privacy)
**For users under 13 in US:**
- Parental consent required
- No behavioral advertising
- No third-party data sharing
- Limited data collection

**For users 13-17:**
- Age verification on signup
- Restricted DM features
- Limited comment visibility
- No adult content recommendations

### GDPR Compliance (EU Users)
**Data processing:**
- Lawful basis: User consent + contract
- Data processor agreements signed
- Privacy by design implemented
- DPA standard clauses included

**Rights enforceable in EU:**
- Right to access (within 30 days)
- Right to rectification
- Right to erasure ("right to be forgotten")
- Right to restrict processing
- Right to data portability
- Right to object
- Rights related to automated decision-making

### CCPA Compliance (California Users)
**California residents can:**
- Know what data we collect (within 45 days)
- Delete their personal data
- Opt-out of sale (we don't sell data)
- Non-discrimination for exercising rights

### LGBTQ+ Safety
✅ Inclusive content policies  
✅ No discrimination on basis of orientation/identity  
✅ Community support resources  
✅ Optional age verification for LGBTQ+ content  
✅ Safety features for vulnerable users  

---

## 📱 Data Processing & Third Parties

### Third-Party Services
```
Service             Purpose              Privacy Link
─────────────────────────────────────────────────────
Auth0              Authentication        auth0.com/privacy
Firebase           Analytics            firebase.google.com/privacy
Cloudinary         Image hosting        cloudinary.com/privacy
Stripe             Payments             stripe.com/privacy
SendGrid           Emails               sendgrid.com/privacy
Sentry             Error tracking       sentry.io/privacy
```

### User Data with Third Parties
```
Analytics (anonymized):
- Screens visited
- Feature usage
- Device type
- General location (country only)

NOT shared:
- Photos
- Email
- Real name
- Exact location
- Payment info
- Passwords
```

---

## 📢 Transparency & Accountability

### Annual Transparency Report
**Published each January:**
- Government data requests received
- Law enforcement requests honored
- Content removed by category
- Account suspensions/bans
- Privacy complaints received

### Data Breach Protocol
**If breach occurs:**
1. Assess scope (24 hours)
2. Notify affected users (48 hours)
3. Report to relevant authorities (as required)
4. Credit monitoring offered (if applicable)
5. Post-incident review
6. Public transparency report

### Community Oversight
**Community Moderation Board:**
- Quarterly public meetings
- User representation
- Review policy decisions
- Appeal oversights
- Recommendations for changes

---

## ⚖️ Updates & Changes

**Policy Version:** 1.0  
**Last Updated:** May 27, 2026  
**Next Review:** August 27, 2026  

**Changes to this policy:**
- 30-day notice before changes
- Highlighted what changed
- User consent for major changes
- Grandfather clause for existing users

---

## 📞 Contact & Support

**Privacy Questions:**
- Email: privacy@souls-app.com
- Response time: 24-48 hours
- Formal request form: souls-app.com/privacy-requests

**Legal Issues:**
- Email: legal@souls-app.com
- Mailing address: [Your address]
- Trademark: trademark@souls-app.com

**Safety Concerns:**
- Report in-app (24-hour response)
- Emergency: emergency@souls-app.com
- Critical: security@souls-app.com (GPG key available)

**Abuse Reports:**
- In-app report button
- abuse@souls-app.com
- 48-hour response SLA

---

## ✅ Compliance Checklist

| Requirement | Status | Notes |
|-------------|--------|-------|
| Privacy Policy | ✅ | Comprehensive, transparent |
| Terms of Service | ✅ | Clear user responsibilities |
| Content Moderation | ✅ | AI + human review |
| COPPA (under 13) | ✅ | Parental consent required |
| GDPR (EU) | ✅ | Data processing agreements |
| CCPA (California) | ✅ | User rights respected |
| LGBTQ+ Safety | ✅ | Inclusive policies |
| Data Security | ✅ | Encryption, access controls |
| Breach Protocol | ✅ | Documented response |
| Accessibility | ✅ | WCAG 2.1 AA target |
| Community Trust | ✅ | Transparency reports |

---

**This policy protects both users and SOULS. Review quarterly and update as needed.**

**Effective Date: June 1, 2026**
