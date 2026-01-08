# Platform Integration Guide

## Purpose
Use this prompt to connect book landing pages with external platforms, payment processors, email services, and companion applications for a seamless customer journey.

---

## The Integration Ecosystem

```
┌─────────────────────────────────────────────────────────────┐
│                    CUSTOMER JOURNEY                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐ │
│  │   LANDING    │────>│   PAYMENT    │────>│   DELIVERY   │ │
│  │    PAGE      │     │   GATEWAY    │     │   SYSTEM     │ │
│  └──────────────┘     └──────────────┘     └──────────────┘ │
│         │                    │                    │          │
│         │                    │                    │          │
│         v                    v                    v          │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐ │
│  │    EMAIL     │<───>│   CUSTOMER   │<───>│  COMPANION   │ │
│  │   SERVICE    │     │    DATABASE  │     │     APP      │ │
│  └──────────────┘     └──────────────┘     └──────────────┘ │
│         │                    │                    │          │
│         └────────────────────┼────────────────────┘          │
│                              │                               │
│                              v                               │
│                    ┌──────────────┐                          │
│                    │  ANALYTICS   │                          │
│                    │  DASHBOARD   │                          │
│                    └──────────────┘                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Integration Priority Matrix

| Integration | Priority | Complexity | Value |
|-------------|----------|------------|-------|
| Email Capture | 🔥 Critical | Low | High - Build list from day 1 |
| Payment Processing | 🔥 Critical | Medium | High - Revenue |
| Analytics | 🔥 Critical | Low | High - Data-driven decisions |
| Book Delivery | ✅ Important | Medium | Required for product |
| Companion App | 📅 Later | High | Upsell opportunity |
| Community | 📅 Later | Medium | Retention |

---

## Email Service Integration

### Provider Options

| Provider | Best For | Pricing | Features |
|----------|----------|---------|----------|
| **ConvertKit** | Creators, books | $29/mo | Landing pages, automations |
| **Buttondown** | Simple newsletters | Free-$9/mo | Clean, developer-friendly |
| **Mailchimp** | Starting out | Free tier | Templates, basics |
| **Beehiiv** | Growth-focused | Free tier | Analytics, referrals |
| **Resend** | Developers | Pay-per-email | API-first, React |

### ConvertKit Integration Prompt

```
I want to integrate ConvertKit with my book landing page.

## Requirements
- Capture email on form submit
- Tag subscribers by: book name, tier interest, assessment result
- Trigger welcome sequence on signup
- Track source (landing page vs. other)

## Current Setup
- Form ID: #email-form
- Input field: .email-input
- Submit button: .email-submit

## Please Generate
1. Client-side JavaScript for form submission
2. ConvertKit form/API configuration
3. Tag structure for segmentation
4. Welcome sequence outline (5 emails)
5. Error handling and success states
```

### Email Capture Implementation

```javascript
// Generic email capture that works with multiple providers
const emailCapture = {
    providers: {
        convertkit: {
            endpoint: 'https://api.convertkit.com/v3/forms/{FORM_ID}/subscribe',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (email, tags) => ({
                api_key: '{API_KEY}',
                email: email,
                tags: tags
            })
        },
        buttondown: {
            endpoint: 'https://api.buttondown.email/v1/subscribers',
            method: 'POST',
            headers: {
                'Authorization': 'Token {API_KEY}',
                'Content-Type': 'application/json'
            },
            body: (email, tags) => ({
                email: email,
                tags: tags,
                referrer_url: window.location.href
            })
        }
    },
    
    async submit(provider, email, metadata = {}) {
        const config = this.providers[provider];
        const tags = this.buildTags(metadata);
        
        try {
            const response = await fetch(config.endpoint, {
                method: config.method,
                headers: config.headers,
                body: JSON.stringify(config.body(email, tags))
            });
            
            if (!response.ok) throw new Error('Subscription failed');
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    buildTags(metadata) {
        const tags = ['book-rewriting-your-self'];
        if (metadata.tier) tags.push(`tier-${metadata.tier}`);
        if (metadata.assessmentResult) tags.push(`type-${metadata.assessmentResult}`);
        if (metadata.source) tags.push(`source-${metadata.source}`);
        return tags;
    }
};
```

---

## Payment Integration

### Provider Options

| Provider | Best For | Fees | Features |
|----------|----------|------|----------|
| **Gumroad** | Digital products | 9% + fees | Simple, hosted checkout |
| **Stripe** | Custom control | 2.9% + $0.30 | Full API, subscriptions |
| **LemonSqueezy** | Global sales | 5% + fees | Tax handling, licenses |
| **Paddle** | SaaS/Digital | 5% + fees | MoR, global taxes |
| **Ko-fi** | Starting out | 0% (tips), 5% (shop) | Community features |

### Gumroad Integration

```
I want to integrate Gumroad for book purchases.

## Products
1. Essential ($27): Digital book only
2. Complete ($67): Book + audio + extras
3. Immersive ($197): Complete + coaching access

## Requirements
- Embed purchase buttons on landing page
- Track conversion by tier
- Redirect to thank-you page after purchase
- Trigger email sequence on purchase

## Please Generate
1. Gumroad product setup instructions
2. Embed code for each tier button
3. Custom thank-you page design
4. Webhook handler for post-purchase automation
```

### Payment Button Implementation

```javascript
// Payment integration handler
const payments = {
    providers: {
        gumroad: {
            script: 'https://gumroad.com/js/gumroad.js',
            button: (productId, email) => `
                <a class="gumroad-button" 
                   href="https://[username].gumroad.com/l/${productId}?email=${email}">
                    Buy Now
                </a>
            `,
            overlay: true
        },
        stripe: {
            script: 'https://js.stripe.com/v3/',
            createSession: async (priceId, email) => {
                // Would need backend endpoint
                const response = await fetch('/api/create-checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ priceId, email })
                });
                return response.json();
            }
        },
        lemonsqueezy: {
            script: 'https://app.lemonsqueezy.com/js/lemon.js',
            button: (variantId) => `
                <a href="https://[store].lemonsqueezy.com/checkout/buy/${variantId}"
                   class="lemonsqueezy-button">
                    Buy Now
                </a>
            `
        }
    },
    
    init(provider) {
        const script = document.createElement('script');
        script.src = this.providers[provider].script;
        document.head.appendChild(script);
    },
    
    trackPurchase(tier, amount) {
        // Analytics tracking
        trackEvent('purchase', 'complete', tier, amount);
    }
};
```

---

## Analytics Integration

### Recommended Stack

```
Primary Analytics: Plausible or Fathom (privacy-focused)
Event Tracking: Custom events via same provider
Heatmaps: Microsoft Clarity (free) or Hotjar
A/B Testing: Posthog or custom
```

### Plausible Integration

```html
<!-- Add to <head> -->
<script defer data-domain="yourdomain.com" 
        src="https://plausible.io/js/script.js"></script>

<script>
// Custom event tracking
window.plausible = window.plausible || function() { 
    (window.plausible.q = window.plausible.q || []).push(arguments) 
}

// Track key events
plausible('Prism Interaction', { props: { lens: 'redemptive' } });
plausible('Assessment Complete', { props: { result: 'progressive' } });
plausible('Email Capture', { props: { tier: 'complete' } });
</script>
```

### Analytics Dashboard Prompt

```
I want to set up an analytics dashboard for my book landing page.

## Key Metrics to Track
1. Traffic sources and volume
2. Scroll depth / engagement
3. Interactive element usage (prism, assessment, tools)
4. Conversion funnel (visit → interact → email → purchase)
5. Revenue by tier

## Current Setup
- Hosting: [e.g., Vercel, Netlify]
- Analytics: [e.g., Plausible, none yet]
- Payment: [e.g., Gumroad]

## Please Generate
1. Analytics provider recommendation
2. Implementation code
3. Custom event tracking for all key interactions
4. Dashboard/report structure
5. Weekly metrics review template
```

---

## Book Delivery Integration

### Digital Delivery Options

| Method | Pros | Cons |
|--------|------|------|
| **Gumroad/LemonSqueezy** | Automatic, hosted | Less control |
| **BookFunnel** | Specialized for books | Additional cost |
| **SendOwl** | Flexible, PDF stamping | Setup required |
| **Direct Download** | Full control | Manual, no protection |

### Delivery Automation Flow

```
Purchase Complete
       │
       v
┌──────────────────┐
│ Webhook Received │
│ (from payment)   │
└────────┬─────────┘
         │
         v
┌──────────────────┐
│ Verify Purchase  │
│ Check tier       │
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
    v         v
┌───────┐  ┌───────┐
│ Email │  │ Grant │
│ Files │  │ Access│
└───────┘  └───────┘
    │         │
    v         v
┌──────────────────┐
│ Start Onboarding │
│ Email Sequence   │
└──────────────────┘
```

---

## Companion App Integration

### Deep Linking Strategy

```javascript
// For future companion app integration
const appIntegration = {
    // Check if app is installed
    async checkAppInstalled() {
        // Would use Universal Links (iOS) or App Links (Android)
        return false; // Placeholder
    },
    
    // Generate deep link
    createDeepLink(action, params = {}) {
        const base = 'rewritingyourself://';
        const query = new URLSearchParams(params).toString();
        return `${base}${action}${query ? '?' + query : ''}`;
    },
    
    // Book → App handoff
    async handoffToApp(userId, bookProgress) {
        const link = this.createDeepLink('continue', {
            user: userId,
            chapter: bookProgress.currentChapter,
            exercise: bookProgress.lastExercise
        });
        
        if (await this.checkAppInstalled()) {
            window.location = link;
        } else {
            // Show app store links
            this.showAppStoreModal();
        }
    },
    
    // Sync reading progress
    syncProgress(data) {
        return fetch('/api/sync-progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
};
```

### App Integration Prompt

```
I want to plan companion app integration for my book.

## Book: Rewriting Your Self
## App Concept: Daily narrative exercises, progress tracking

## Integration Points
1. Book purchase → App access (same account)
2. Reading progress sync
3. In-app exercises tied to book chapters
4. Push notifications for transformation reminders

## Technical Questions
1. User account system (shared between book/app)
2. Progress storage (local vs cloud)
3. Deep linking setup
4. Push notification strategy

## Please Generate
1. Integration architecture diagram
2. Shared authentication approach
3. API endpoints needed
4. Data sync strategy
5. Progressive disclosure (free app features vs book owner features)
```

---

## Community Integration

### Options for Community Building

| Platform | Best For | Cost | Features |
|----------|----------|------|----------|
| **Circle** | Premium communities | $39+/mo | Courses, events, spaces |
| **Discord** | Engaged, active community | Free | Real-time, bots |
| **Slack** | Professional audiences | Free/Paid | Integrations |
| **Skool** | Course + community | $99/mo | Gamification |
| **Mighty Networks** | All-in-one | $41+/mo | Mobile app |

### Community Link Prompt

```
I want to add community access as part of the book offering.

## Community Goals
- Peer support for narrative transformation
- Author Q&A sessions
- Exercise sharing and feedback
- Accountability partners

## Tier Access
- Essential: No community access
- Complete: Read-only access
- Immersive: Full access + private coaching channel

## Please Generate
1. Platform recommendation with rationale
2. Community structure (channels/spaces)
3. Onboarding flow for new members
4. Integration with book delivery
5. Moderation guidelines
```

---

## Webhook Handler Template

For backend integration (Node.js/Vercel example):

```javascript
// /api/webhooks/purchase.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    // Verify webhook signature (provider-specific)
    const isValid = verifyWebhookSignature(req);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid signature' });
    }
    
    const { email, product, tier, amount } = parseWebhookPayload(req.body);
    
    try {
        // 1. Create/update customer record
        await createOrUpdateCustomer({ email, purchases: [product] });
        
        // 2. Grant access based on tier
        await grantAccess(email, tier);
        
        // 3. Trigger email sequence
        await triggerEmailSequence(email, `purchase-${tier}`);
        
        // 4. Track purchase event
        await trackEvent('purchase', { email, tier, amount });
        
        // 5. Notify (Slack, etc.)
        await sendNotification(`New purchase: ${tier} by ${email}`);
        
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: 'Processing failed' });
    }
}
```

---

## Integration Checklist

### Before Launch
- [ ] Email capture working (test with real email)
- [ ] Analytics tracking verified
- [ ] Payment flow tested (use test mode)
- [ ] Delivery automation tested
- [ ] Thank-you page ready
- [ ] Error states handled gracefully

### After Launch
- [ ] Monitor webhook failures
- [ ] Check email deliverability
- [ ] Review analytics data quality
- [ ] Test refund/support flows
- [ ] Document any manual processes

### Scaling Preparation
- [ ] Database for customer records
- [ ] Authentication system plan
- [ ] API rate limit awareness
- [ ] Backup/recovery procedures
- [ ] GDPR/privacy compliance

---

## Quick Start: Minimal Viable Integration

For fastest launch:

1. **Email**: ConvertKit or Buttondown (form embed)
2. **Payment**: Gumroad (hosted checkout)
3. **Analytics**: Plausible (script tag)
4. **Delivery**: Gumroad automatic

Total setup time: ~2 hours
Monthly cost: ~$30-50

Scale up from there as revenue grows.

---

## Integration Philosophy

> Every integration should reduce friction for the customer
> and provide data for better decisions.

Ask before adding any integration:
1. Does this make the customer journey smoother?
2. Will I actually use the data this provides?
3. Is the setup/maintenance cost worth the value?

Start simple. Scale when there's pain.

