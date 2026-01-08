/**
 * Stripe Configuration for PromptCraft
 * 
 * This file contains the Stripe integration setup.
 * For development, we use mock functions until Stripe is configured.
 */

// Price configuration
export const STRIPE_PRICES = {
  PRO_MONTHLY: {
    id: process.env.STRIPE_PRO_MONTHLY_PRICE_ID || 'price_pro_monthly',
    name: 'Pro Monthly',
    amount: 900, // $9.00 in cents
    currency: 'usd',
    interval: 'month' as const,
  },
};

// Subscription tiers
export type SubscriptionTier = 'free' | 'pro';

export interface UserSubscription {
  tier: SubscriptionTier;
  status: 'active' | 'cancelled' | 'past_due' | 'none';
  currentPeriodEnd?: Date;
  customerId?: string;
  subscriptionId?: string;
}

/**
 * Get user's current subscription status
 * In production, this would check Stripe and/or your database
 */
export function getUserSubscription(): UserSubscription {
  // For now, return free tier
  // In production, this would:
  // 1. Check if user is authenticated
  // 2. Query database for subscription status
  // 3. Optionally verify with Stripe API
  
  return {
    tier: 'free',
    status: 'none',
  };
}

/**
 * Check if user can perform a transformation
 * Free tier: 5 per day
 * Pro tier: Unlimited
 */
export function canTransform(): { allowed: boolean; remaining?: number; message?: string } {
  const subscription = getUserSubscription();
  
  if (subscription.tier === 'pro' && subscription.status === 'active') {
    return { allowed: true };
  }
  
  // Check daily limit for free tier
  const today = new Date().toDateString();
  const storageKey = `transforms_${today}`;
  
  try {
    const count = parseInt(localStorage.getItem(storageKey) || '0', 10);
    const limit = 5;
    
    if (count >= limit) {
      return {
        allowed: false,
        remaining: 0,
        message: 'Daily limit reached. Upgrade to Pro for unlimited transformations.',
      };
    }
    
    return {
      allowed: true,
      remaining: limit - count,
    };
  } catch {
    // If localStorage fails, allow the transformation
    return { allowed: true };
  }
}

/**
 * Record a transformation for rate limiting
 */
export function recordTransformation(): void {
  const today = new Date().toDateString();
  const storageKey = `transforms_${today}`;
  
  try {
    const count = parseInt(localStorage.getItem(storageKey) || '0', 10);
    localStorage.setItem(storageKey, String(count + 1));
  } catch {
    // Silently fail if localStorage is not available
  }
}

/**
 * Create a Stripe checkout session
 * In production, this would call your API endpoint
 */
export async function createCheckoutSession(): Promise<{ url: string } | { error: string }> {
  // In production, this would:
  // 1. Call your API endpoint
  // 2. Create a Stripe checkout session
  // 3. Return the checkout URL
  
  // For now, return a placeholder
  return {
    error: 'Stripe integration coming soon! Join the waitlist for early access.',
  };
}

/**
 * Create a Stripe customer portal session
 * In production, this would call your API endpoint
 */
export async function createPortalSession(): Promise<{ url: string } | { error: string }> {
  return {
    error: 'Stripe integration coming soon!',
  };
}

