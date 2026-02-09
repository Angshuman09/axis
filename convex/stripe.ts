import { action } from "./_generated/server";
import { components } from "./_generated/api";
import { StripeSubscriptions } from "@convex-dev/stripe";
import { v } from "convex/values";

const stripeClient = new StripeSubscriptions(components.stripe, {});

const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;

// Create a checkout session for a subscription
export const createSubscriptionCheckout = action({
  args: {
    priceId: v.optional(v.string()),
  },
  returns: v.object({
    sessionId: v.string(),
    url: v.union(v.string(), v.null()),
  }),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    // Get or create a Stripe customer
    const customer = await stripeClient.getOrCreateCustomer(ctx, {
      userId: identity.subject,
      email: identity.email,
      name: identity.name,
    });

    // Use provided priceId or default
    const priceId = args.priceId || STRIPE_PRICE_ID;

    if (!priceId) {
      throw new Error("Missing Stripe Price ID. Please set STRIPE_PRICE_ID in the Convex Dashboard environment variables.");
    }

    // Create checkout session
    return await stripeClient.createCheckoutSession(ctx, {
      priceId,
      customerId: customer.customerId,
      mode: "subscription",
      // Redirect to frontend (localhost in dev, production URL in prod)
      successUrl: `${process.env.HOST_URL ?? "http://localhost:3000"}/dashboard?success=true`,
      cancelUrl: `${process.env.HOST_URL ?? "http://localhost:3000"}/dashboard/upgrade?canceled=true`,
      subscriptionMetadata: { 
        userId: identity.subject,
        email: identity.email || "",
      },
    });
  },
});

// Create a checkout session for a one-time payment
export const createPaymentCheckout = action({
  args: { 
    priceId: v.optional(v.string()),
  },
  returns: v.object({
    sessionId: v.string(),
    url: v.union(v.string(), v.null()),
  }),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const customer = await stripeClient.getOrCreateCustomer(ctx, {
      userId: identity.subject,
      email: identity.email,
      name: identity.name,
    });

    // Use provided priceId or default
    const priceId = args.priceId || STRIPE_PRICE_ID;

    if (!priceId) {
      throw new Error("Missing Stripe Price ID. Please set STRIPE_PRICE_ID in the Convex Dashboard environment variables.");
    }

    return await stripeClient.createCheckoutSession(ctx, {
      priceId,
      customerId: customer.customerId,
      mode: "payment",
      successUrl: `${process.env.HOST_URL ?? "http://localhost:3000"}/dashboard?success=true`,
      cancelUrl: `${process.env.HOST_URL ?? "http://localhost:3000"}/dashboard/upgrade?canceled=true`,
      paymentIntentMetadata: { 
        userId: identity.subject,
        email: identity.email || "",
      },
    });
  },
});