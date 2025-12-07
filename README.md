---

## Features

### 1️⃣ Driver Profile Form
Captures all monetizable fields:

- Contact: Name, Email, Phone  
- CDL Class: A/B/C  
- Endorsements: HazMat, Tanker, Doubles/Triples, Passenger, TWIC  
- Driver Type: Company Driver, Owner-Operator, Fleet Owner  
- Fleet Size & Years of Experience  
- Equipment Type & ELD System  
- Route Preference, Home City/State  
- Willingness & Load Preferences  
- Pay Structure & Current Insurance Provider  
- Interests / Opt-ins for Training, Insurance, Fleet Opportunities  
- Consent for GDPR/CCPA compliance and data monetization  

---

### 2️⃣ Buttons / Lead Capture
- **Join Network:** Submits full driver profile  
- **Refer a Driver:** Captures referral email + referrer info  
- **Get CDL Info:** Captures leads for CDL training programs  

---

### 3️⃣ Compliance
- Consent checkbox for **data storage and licensing**  
- GDPR/CCPA ready  
- Optional fields for richer analytics  
- All sensitive backend keys stored in environment variables  

---

### 4️⃣ Monetization Potential

| Stream | Method |
|--------|--------|
| Driver Profiles | Premium placement, fleet matchmaking |
| Referrals | Driver-to-driver bonuses, network growth |
| CDL Leads | Education partner commissions |
| Insurance / SaaS | Owner-operator insurance & telematics subscriptions |
| Analytics | Sell aggregated, anonymized insights to carriers & brokers |
| Premium Access | Tiered dashboard & verified driver pools |

---

## Deployment Instructions

1. **Update Backend Keys**
   - Replace `YOUR_SUPABASE_ENDPOINT` and `YOUR_SUPABASE_KEY` in `app.js` with your actual backend credentials.  
   - Keep keys **secure**; do not share directly with developers.

2. **Check HTML IDs**
   - Ensure form and buttons match IDs used in `app.js`:  
     - `driverForm` (main form)  
     - `referBtn` (referral button)  
     - `infoBtn` (CDL info button)  
     - `confirmation` (submission confirmation div)

3. **Host Files**
   - Recommended: **GitHub → Fleek / Vercel / Netlify** for Web3 or conventional hosting  
   - Steps:  
     - Push folder to GitHub repo (private for IP protection)  
     - Connect hosting service to repo  
     - Deploy site with HTTPS  

4. **Test Functionality**
   - Submit a test profile, referral, and CDL info request  
   - Confirm data appears in backend  
   - Check mobile responsiveness  

---

## Developer Guidance / IP Protection
- **Do not give backend keys**; keep them in environment variables  
- Only provide access to **front-end files** if necessary  
- Consider **obfuscating JavaScript** before deployment for added protection  
- NDA should be signed before code handoff  

---

## Future Phase 2 Recommendations
- Add **driver scoring algorithm** for premium placement  
- Integrate **analytics dashboards** for carriers & brokers  
- Add **automated email notifications** to drivers & referrers  
- Expand **referral & licensing program**  