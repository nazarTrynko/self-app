# Payment Setup Guide

## Recommended: LemonSqueezy (or Gumroad)

Both support pre-orders with refundable payments. LemonSqueezy is newer with better fees.

---

## Product 1: Quote Builder Pro

**Platform Settings:**
- Product Type: Digital Download (Pre-Order)
- Price: $45.00 USD
- Refund Policy: 30-day money-back guarantee

**Product Name:** Quote Builder Pro — Professional On-Site Quoting

**Product Description:**
```
Create professional quotes in 2 minutes while standing with your client.

✓ Unlimited quotes forever
✓ Works 100% offline
✓ Digital signature capture
✓ Professional PDF export
✓ Trade-specific pricing databases
✓ All future updates free

⚠️ PRE-ORDER: App ships in 6-8 weeks. Full refund if not satisfied.

Built for: General contractors, specialty trades, remodelers, handymen
```

**Thank You Page Message:**
```
🎉 You're in! Thank you for pre-ordering Quote Builder Pro.

What happens next:
1. You'll receive email updates on development progress
2. App ships in 6-8 weeks
3. You'll get a download link when ready

Questions? Reply to your receipt email.
```

**After Purchase URL:** (leave blank or link to your email signup)

---

## Product 2: Delivery Proof

**Platform Settings:**
- Product Type: Digital Download (Pre-Order)
- Price: $15.00 USD
- Refund Policy: 30-day money-back guarantee

**Product Name:** Delivery Proof — Stop "I Never Received It" Disputes

**Product Description:**
```
Photo + Signature + GPS proof for every delivery.

✓ Unlimited delivery proofs
✓ Photo + signature + GPS capture
✓ Works 100% offline
✓ PDF export for disputes
✓ No monthly fees ever
✓ 30-second capture per delivery

⚠️ PRE-ORDER: App ships in 6-8 weeks. Full refund if not satisfied.

Built for: Gig drivers, couriers, furniture delivery, food delivery
```

**Thank You Page Message:**
```
🎉 You're protected! Thank you for pre-ordering Delivery Proof.

What happens next:
1. You'll receive email updates on development progress
2. App ships in 6-8 weeks
3. You'll get a download link when ready

Questions? Reply to your receipt email.
```

---

## Product 3: Pre-Job Photo Vault

**Platform Settings:**
- Product Type: Digital Download (Pre-Order)
- Price: $19.00 USD
- Refund Policy: 30-day money-back guarantee

**Product Name:** Pre-Job Photo Vault — Never Hear "You Broke It" Again

**Product Description:**
```
Document every scratch BEFORE you start work.

✓ Unlimited job documentations
✓ Tamper-proof timestamps
✓ GPS location lock
✓ Works 100% offline
✓ PDF report generation
✓ Organized by job address

⚠️ PRE-ORDER: App ships in 6-8 weeks. Full refund if not satisfied.

Built for: Contractors, movers, cleaners, appliance repair, all trades
```

**Thank You Page Message:**
```
🎉 You're protected! Thank you for pre-ordering Pre-Job Photo Vault.

What happens next:
1. You'll receive email updates on development progress
2. App ships in 6-8 weeks
3. You'll get a download link when ready

Questions? Reply to your receipt email.
```

---

## Product 4: Service Ticket Pro

**Platform Settings:**
- Product Type: Digital Download (Pre-Order)
- Price: $25.00 USD
- Refund Policy: 30-day money-back guarantee

**Product Name:** Service Ticket Pro — Stop Free Callbacks Forever

**Product Description:**
```
Document every service call with proof and customer sign-off.

✓ Unlimited service tickets
✓ Before/after photo documentation
✓ Customer signature capture
✓ Trade-specific checklists (HVAC, plumbing, electrical)
✓ Works 100% offline
✓ PDF report generation

⚠️ PRE-ORDER: App ships in 6-8 weeks. Full refund if not satisfied.

Built for: HVAC techs, plumbers, electricians, handymen
```

**Thank You Page Message:**
```
🎉 No more free callbacks! Thank you for pre-ordering Service Ticket Pro.

What happens next:
1. You'll receive email updates on development progress
2. App ships in 6-8 weeks
3. You'll get a download link when ready

Questions? Reply to your receipt email.
```

---

## Product 5: T&M Tracker

**Platform Settings:**
- Product Type: Digital Download (Pre-Order)
- Price: $29.00 USD
- Refund Policy: 30-day money-back guarantee

**Product Name:** T&M Tracker — Get Paid for Every Hour You Work

**Product Description:**
```
Track time and materials with client milestone sign-offs.

✓ Unlimited job tracking
✓ One-tap time tracking
✓ Material logging with photos
✓ Client milestone sign-offs (dispute-proof!)
✓ Works 100% offline
✓ Invoice-ready PDF reports

⚠️ PRE-ORDER: App ships in 6-8 weeks. Full refund if not satisfied.

Built for: Contractors doing T&M work, crews, remodelers
```

**Thank You Page Message:**
```
🎉 No more underbilling! Thank you for pre-ordering T&M Tracker.

What happens next:
1. You'll receive email updates on development progress
2. App ships in 6-8 weeks
3. You'll get a download link when ready

Questions? Reply to your receipt email.
```

---

## Setup Steps (LemonSqueezy)

1. **Create account** at https://lemonsqueezy.com
2. **Connect Stripe** for payments
3. **Create 5 products** with the details above
4. **Enable checkout** for each product
5. **Copy the checkout URLs** and update landing pages

### Updating Landing Pages

After creating products, update each landing page's pre-order button:

**quote-builder/index.html:**
```html
<a href="https://YOUR_STORE.lemonsqueezy.com/checkout/buy/PRODUCT_ID" class="btn btn-primary btn-lg">
```

**delivery-proof/index.html:**
```html
<a href="https://YOUR_STORE.lemonsqueezy.com/checkout/buy/PRODUCT_ID" class="btn btn-primary btn-lg">
```

(Repeat for all 5 products)

---

## Alternative: Gumroad Setup

1. **Create account** at https://gumroad.com
2. **Create 5 products** as "Digital Product - Pre-Order"
3. **Set "Coming Soon"** date to 6-8 weeks out
4. **Copy embed/link URLs** to landing pages

---

## Testing Checklist

- [ ] All 5 products created
- [ ] Prices correct ($45, $15, $19, $25, $29)
- [ ] Pre-order messaging clear
- [ ] Refund policy visible
- [ ] Thank you messages configured
- [ ] Landing page links updated
- [ ] Test purchase works (use test mode)

---

## Tracking Pre-Orders

Create a simple spreadsheet to track:

| Product | Pre-Orders | Revenue | Conversion Rate | Notes |
|---------|------------|---------|-----------------|-------|
| Quote Builder Pro | 0 | $0 | - | |
| Delivery Proof | 0 | $0 | - | |
| Pre-Job Photo Vault | 0 | $0 | - | |
| Service Ticket Pro | 0 | $0 | - | |
| T&M Tracker | 0 | $0 | - | |

**Success Threshold:** 10+ pre-orders = BUILD IT
**Kill Threshold:** 0 pre-orders after 2 weeks = concept needs work

